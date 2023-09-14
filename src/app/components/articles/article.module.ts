import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { articleEntries } from "./article.entries";
import { ArticleRendererComponent } from "./article.renderer.component";
import { ArticleVideoComponent } from "./video";
import { ArticleNormalComponent } from "./normal";
import { ArticleFeaturedComponent } from './featured/article.featured.component';
import { ArticleFeaturedAdComponent } from './featured-ad/article.featured-ad.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ...articleEntries,
        ArticleVideoComponent,
        ArticleRendererComponent,
        ArticleNormalComponent,
        ArticleFeaturedComponent,
        ArticleFeaturedAdComponent,
        ArticleDetailsComponent,
    ],
    exports: [
        ArticleRendererComponent,
        ArticleVideoComponent,
        ArticleNormalComponent,
        ArticleFeaturedComponent,
        ArticleFeaturedAdComponent,
        ...articleEntries
    ]
})
export class ArticleModule { }
