import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FooterComponent } from './footer/footer.component';
import { FormulaireCompteComponent } from './formulaire-compte/formulaire-compte.component';
import { RecapitulatifCompteComponent } from './recapitulatif-compte/recapitulatif-compte.component';
import { PasswordPatternDirective } from './directives/password-pattern.directive';
import { MatchPasswordDirective } from './directives/match-password.directive';
import { ValidateNameDirective } from './directives/validate-name.directive';
import { ValidateUsernameDirective } from './directives/validate-username.directive';
import { PhoneNumberPipe } from './pipes/phone-number.pipe';
import { ValidatePhoneNumberDirective } from './directives/validate-phone-number.directive';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TetiereComponent,
    FooterComponent,
    FormulaireCompteComponent,
    RecapitulatifCompteComponent,
    PasswordPatternDirective,
    MatchPasswordDirective,
    ValidateNameDirective,
    ValidateUsernameDirective,
    PhoneNumberPipe,
    ValidatePhoneNumberDirective,
    CatalogueComponent,
    SearchbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
