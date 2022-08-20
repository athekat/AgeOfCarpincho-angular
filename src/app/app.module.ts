import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MatchesComponent } from './matches/matches.component';
import { MostusedcivComponent } from './mostusedciv/mostusedciv.component';
import { EloratingComponent } from './elorating/elorating.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { EloratingOldComponent } from './elorating-old/elorating-old.component';

const appRoutes:Routes = [
  {path: 'amount', component: MatchesComponent},
  {path: 'mostusedciv', component: MostusedcivComponent},
  {path: 'eloratingold', component: EloratingOldComponent},
  {path: 'elorating', component: EloratingComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MatchesComponent,
    MostusedcivComponent,
    EloratingComponent,
    FooterComponent,
    HeaderComponent,
    EloratingOldComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
