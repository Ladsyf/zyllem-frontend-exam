import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZyllemApiService } from 'src/app/app.service';
import { Article } from 'src/app/model/article';
import { articleMapper } from '../article.mapper';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css'],
})
export class ArticleDetailsComponent implements OnInit {
  id!: string;
  article!: Article;
  constructor(
    private _route: ActivatedRoute,
    private _api: ZyllemApiService,
    private readonly viewContainerRef: ViewContainerRef,
    private readonly componentFactoryResolver: ComponentFactoryResolver,
    private _router: Router,
    private _renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.id = String(this._route.snapshot.paramMap.get('id'));
    this._api.getArticles().subscribe((data) => {
      this.article = data?.find((article) => article.id == this.id) as Article;
      const resolveArticle = articleMapper.get(this.article?.type);

      if (resolveArticle) {
        const componentFactory =
          this.componentFactoryResolver.resolveComponentFactory(resolveArticle);
        const componentRef =
          this.viewContainerRef.createComponent(componentFactory);

        const button = document.createElement('button');
        button.innerText = 'Back';
        this._renderer.listen(button, 'click', () => {
          this._router.navigateByUrl('/');
        });

        const hostElement = <HTMLElement>componentRef.location.nativeElement;
        hostElement.classList.add('article-detail');

        hostElement.insertAdjacentElement('beforeend', button);

        componentRef.instance.article = this.article;
      }
    });
  }
}
