import { Component, Input } from '@angular/core';
import { AbstractArticleComponent } from '../abstract.article.component';
import { FeaturedAdArticle, FeaturedArticle } from 'src/app/model/article';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'article-featured-component',
  templateUrl: './article.featured.component.html',
})
export class ArticleFeaturedComponent extends AbstractArticleComponent {
  @Input() article!: FeaturedArticle;

  get safeImageUrl() {
    return this.domSanitize.bypassSecurityTrustResourceUrl(
      this.article.featureImgUrl
    );
  }

  constructor(private readonly domSanitize: DomSanitizer) {
    super();
  }
}
