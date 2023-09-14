import {
    Component, ComponentFactoryResolver, Input,
    OnChanges,
    OnInit, Renderer2, ViewContainerRef
} from "@angular/core";
import { Article, NormalArticle } from "src/app/model/article";
import { articleMapper } from "./article.mapper";
import { Router } from "@angular/router";

@Component({
    selector: 'article-renderer-component',
    template: ''
})
export class ArticleRendererComponent implements OnInit, OnChanges {

    @Input() articles!: Article[];

    constructor(
        private readonly viewContainerRef: ViewContainerRef,
        private readonly componentFactoryResolver: ComponentFactoryResolver,
        private _router:Router,
        private renderer: Renderer2
    ) { }

    ngOnInit() {
        this.renderArticlesList()
    }

    ngOnChanges(): void {
        this.renderArticlesList()
    }

    renderArticlesList() {
        this.viewContainerRef.clear();
        for (const article of this.articles) {
            const resolveArticle = articleMapper.get(article.type);
            if (resolveArticle) {
                const componentFactory = this.componentFactoryResolver.resolveComponentFactory(resolveArticle);
                const componentRef = this.viewContainerRef.createComponent(componentFactory);
                
                const hostElement = <HTMLElement>componentRef.location.nativeElement;

                hostElement.classList.add('article-item');
                hostElement.insertAdjacentElement("afterbegin", this.addArticleTitle(article.title));

                this.renderer.listen(hostElement, 'click', () => {
                    this._router.navigateByUrl(`/${article.id}`)
                  });

                componentRef.instance.article = article;
                componentRef.changeDetectorRef.detectChanges();
            } else {
                console.warn(`component not implemented yet for this type ${article.type}.`);
            }
        }
    }

    private addArticleTitle(title: string) {
        const heading = document.createElement('h2');
        heading.classList.add('article-title');
        heading.innerText = title;
        heading.title = title;
        return heading;
    }
}
