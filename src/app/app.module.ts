import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FlashMessagesModule } from "angular2-flash-messages";

// COMPONENTS
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/layout/navbar/navbar.component";
import { SidebarComponent } from "./components/layout/sidebar/sidebar.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { CreateComponent } from "./components/pages/create/create.component";
import { ListComponent } from "./components/pages/list/list.component";

// SERVICES
import { ItemService } from "./services/item.service";
import { ShowComponent } from "./components/pages/show/show.component";
import { EditComponent } from "./components/pages/edit/edit.component";

// ROUTES
const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "create", component: CreateComponent },
  { path: "list", component: ListComponent },
  { path: "show/:id", component: ShowComponent },
  { path: "edit/:id", component: EditComponent },
  { path: "**", component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    CreateComponent,
    ListComponent,
    ShowComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule {}
