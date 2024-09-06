import { ItemService } from './../item.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent implements OnInit{
  items : { id: number, name: string }[] = [];
  newItem: { id: number, name: string} = { id: 0, name: ''};

  constructor( private itemService: ItemService){  }

  ngOnInit(): void {
    this.items = this.itemService.getItems();
  }

  addItem(){
    if (this.newItem.name){
      this.newItem.id = this.items.length + 1;
      this.itemService.addItem(this.newItem);
      this.newItem = { id: 0, name: ''};
      this.items = this.itemService.getItems();
    }
  }

  updateItem( id: number, name: string){
    this.itemService.updateItem(id, { id, name });
    this.items = this.itemService.getItems();
  }

  deleteItem( id: number){
    this.itemService.deleteItem(id);
    this.items = this.itemService.getItems();
  }
}
