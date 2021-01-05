import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { UserListComponent } from "./user-list/user-list.component";
import { RouterModule } from "@angular/router";
import { APP_ROUTES } from "./app.routing";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [AppComponent, UserListComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
