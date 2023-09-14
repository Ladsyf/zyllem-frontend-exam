import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ZyllemApiService } from '../app.service';
import { Article, VideoArticle } from '../model/article';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  constructor(
    private readonly apiService: ZyllemApiService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  private results!: Article[];
  videoArticleHighlight!: VideoArticle;

  public types = ['VIDEO', 'FEATURED', 'FEATURED_AD', 'NORMAL'];

  _filteredArticles!: Article[];
  _typeFilter!: string;

  filter!: string;

  get filteredArticles(): Article[] {
    return this._typeFilter ? this._filteredArticles : this.articles;
  }

  set typeFilter(type: string) {
    this._typeFilter = type;
    this._filteredArticles = [...this.articles].filter(
      (article) => article.type === this._typeFilter
    );
  }

  get articles() {
    return this.results;
  }

  ngOnInit(): void {
    this.apiService.getArticles().subscribe((result) => {
      this.videoArticleHighlight = result
        .filter((article) => article.type === 'VIDEO')
        .sort((a, b) => {
          return (
            new Date(a.publishedAt).getTime() -
            new Date(b.publishedAt).getTime()
          );
        })[0] as VideoArticle;
      this.results = result.filter(
        (article) => article.id !== this.videoArticleHighlight.id
      );
      this.cdr.markForCheck();
    });
  }
}
