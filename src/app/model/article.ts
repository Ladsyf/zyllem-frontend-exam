
export interface Article {
    id: string
    title: string;
    author: string;
    publishedAt: string; //date time in ISO format 
    url: string;
    type: ArticleType;
}

export interface NormalArticle extends Article {
    description?: string;
}

export interface FeaturedArticle extends  Article{
    featureImgUrl: string;
}

export interface VideoArticle extends  Article{
    videoUrl: string;
}

export interface FeaturedAdArticle extends  Article{
    adBannerUrl: string;
}

export enum ArticleType {
    NORMAL = "NORMAL",
    FEATURED = "FEATURED",
    VIDEO = "VIDEO",
    FEATURED_AD = "FEATURED_AD"
}