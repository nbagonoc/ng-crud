import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";
import { ItemService } from "../../../services/item.service";
import { Item } from "../../../models/item";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  item: Item;
  currentUrl;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private itemService: ItemService,
    private flashMessages: FlashMessagesService
  ) {}

  ngOnInit() {
    this.currentUrl = this.activatedRoute.snapshot.params;
    this.itemService.read(this.currentUrl.id).subscribe(item => {
      this.item = item as any;
    });
  }

  onSubmit() {
    this.itemService.update(this.item).subscribe(user => {
      // display flash message
      this.flashMessages.show("Successfully update item", {
        cssClass: "alert-success",
        timeout: 5000
      });
      // redirect
      this.router.navigate(["/list"]);
    });
  }
}
