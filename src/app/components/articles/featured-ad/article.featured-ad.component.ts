import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FeaturedAdArticle } from 'src/app/model/article';
import { AbstractArticleComponent } from '../abstract.article.component';

@Component({
  selector: 'app-featured-ad',
  templateUrl: './article.featured-ad.component.html',
})
export class ArticleFeaturedAdComponent extends AbstractArticleComponent {
  @Input() article!: FeaturedAdArticle;

  get safeImageUrl() {
    return this.domSanitize.bypassSecurityTrustResourceUrl(
      this.article.adBannerUrl
    );
  }

  constructor(private readonly domSanitize: DomSanitizer) {
    super();
  }
}
