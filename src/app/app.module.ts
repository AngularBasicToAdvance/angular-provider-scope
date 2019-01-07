import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*import { VoteService } from './vote.service';*/
import { AppComponent } from './app.component';
import { FeatureModule } from './feature/feature.module';
import { VoteService } from './vote.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FeatureModule
  ],
  providers: [VoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
