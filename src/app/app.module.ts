import { LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import localeFr from "@angular/common/locales/fr";
import { registerLocaleData } from "@angular/common";
import { CbPipe } from "./cb.pipe";
import { FilterPipe } from "./filter.pipe";
import { UserListComponent } from './user-list/user-list.component';
registerLocaleData(localeFr);

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CbPipe, FilterPipe, UserListComponent],
  bootstrap: [AppComponent],
  providers: [{ provide: LOCALE_ID, useValue: "fr-FR" }]
})
export class AppModule {}
