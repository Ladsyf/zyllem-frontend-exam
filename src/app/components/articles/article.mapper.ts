import { Type } from "@angular/core";
import { ArticleType } from "src/app/model/article";
import { ArticleNormalComponent } from "./normal";
import { ArticleFeaturedComponent } from "./featured/article.featured.component";
import { ArticleVideoComponent } from "./video";
import { ArticleFeaturedAdComponent } from "./featured-ad/article.featured-ad.component";

export const articleMapper = new Map<ArticleType, Type<ArticleNormalComponent>>();
articleMapper.set(ArticleType.NORMAL, ArticleNormalComponent)
articleMapper.set(ArticleType.FEATURED, ArticleFeaturedComponent)
articleMapper.set(ArticleType.VIDEO, ArticleVideoComponent)
articleMapper.set(ArticleType.FEATURED_AD, ArticleFeaturedAdComponent)
