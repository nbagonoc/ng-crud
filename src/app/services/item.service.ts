import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ItemService {
  url = "http://localhost:5000/api/items";

  constructor(private http: HttpClient) {}

  // CRUD Items

  // Create
  create(item) {
    return this.http.post(this.url, item);
  }

  // Read
  reads() {
    return this.http.get(this.url);
  }

  // Read (single)
  read(id) {
    return this.http.get(this.url + "/" + id);
  }

  // Update
  update(item) {
    return this.http.put(this.url + "/" + item._id, item);
  }

  // Delete
  delete(id) {
    return this.http.delete(this.url + "/" + id);
  }
}
