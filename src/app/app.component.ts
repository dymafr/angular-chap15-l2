import { Component, OnInit } from "@angular/core";
import { UserService } from "./user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  public search = "";
  public names$ = this.userService.users$;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}
}
