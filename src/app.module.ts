import { NgModule }                    from '@angular/core';
import { BrowserModule, Title }        from '@angular/platform-browser';
import { HttpModule }                  from '@angular/http';

import { AppComponent }                from './app.component';
import { routing }                     from './app.routing';

import { PostService }                 from './post.service';

import { IndexComponent }              from './index.component';
import { BlogComponent }               from './blog.component';

import { DateBeforePipe }              from './datebefore.pipe';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    HttpModule
  ],
  declarations: [
    AppComponent,
    IndexComponent,
    BlogComponent,
    DateBeforePipe
  ],
  providers: [
    Title,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
