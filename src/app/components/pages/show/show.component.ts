import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ItemService } from "../../../services/item.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { Item } from "../../../models/item";

@Component({
  selector: "app-show",
  templateUrl: "./show.component.html",
  styleUrls: ["./show.component.css"]
})
export class ShowComponent implements OnInit {
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

  onDelete(id) {
    this.itemService.delete(id).subscribe(item => {
      // display flash message
      this.flashMessages.show("Successfully removed item", {
        cssClass: "alert-success",
        timeout: 5000
      });
      // redirect
      this.router.navigate(["/list"]);
    });
  }
}
