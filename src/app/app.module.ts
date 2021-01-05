import { LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { UserListComponent } from "./user-list/user-list.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, UserListComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
