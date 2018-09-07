import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";
import { ItemService } from "../../../services/item.service";
import { Item } from "../../../models/item";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"]
})
export class CreateComponent implements OnInit {
  item = {};

  constructor(
    private itemService: ItemService,
    private router: Router,
    private flashMessages: FlashMessagesService
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.itemService.create(this.item).subscribe(user => {
      // display flash message
      this.flashMessages.show("Successfully created new item", {
        cssClass: "alert-success",
        timeout: 5000
      });
      // redirect
      this.router.navigate(["/list"]);
    });
  }
}
