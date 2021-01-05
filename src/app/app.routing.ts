import { Routes } from "@angular/router";
import { UserListComponent } from "./user-list/user-list.component";

export const APP_ROUTES: Routes = [
  { path: "", component: UserListComponent, pathMatch: "full" },
  { path: "new" },
  { path: ":id/edit" }
];
