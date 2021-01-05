import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { User } from "../user.interface";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.scss"]
})
export class UserFormComponent implements OnInit {
  public form: FormGroup;
  public user: User;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.initForm();
    });
  }

  initForm(user = { username: null, age: null }) {
    this.form = this.fb.group({
      username: [user.username],
      age: [user.age]
    });
  }

  submit() {
    console.log(this.form.value);
  }
}
