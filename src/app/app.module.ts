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

const appRoutes:Routes = [
  {path: 'amount', component: MatchesComponent},
  {path: 'mostusedciv', component: MostusedcivComponent},
  {path: 'elorating', component: EloratingComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MatchesComponent,
    MostusedcivComponent,
    EloratingComponent,
    FooterComponent,
    HeaderComponent
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
