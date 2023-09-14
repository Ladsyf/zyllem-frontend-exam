import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticleModule } from './components/articles';
import { ZyllemApiService } from './app.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './landing/landing.component';
import { RouterModule } from '@angular/router';
import { ArticleDetailsComponent } from './components/articles/article-details/article-details.component';

@NgModule({
  declarations: [AppComponent, LandingComponent],
  imports: [
    BrowserModule,
    ArticleModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LandingComponent,
      },
      {
        path: ':id',
        component: ArticleDetailsComponent,
      },
    ]),
  ],
  providers: [ZyllemApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
