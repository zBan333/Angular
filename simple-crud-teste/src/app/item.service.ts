import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private items = [
    {id: 1, name: 'item 1'},
    {id: 2, name: 'item 2'},
    {id: 3, name: 'item 3'},
  ]

  constructor() { }

  getItems(){
    return this.items;
  }

  getItem(id: number){
    return this.items.find(item => item.id === id);
  }

  addItem(item: { id: number, name: string}){
    this.items.push(item);
  }

  updateItem(id: number, updatedItem: {id: number, name: string} ){
    const index = this.items.findIndex( item => item.id === id);
    if(index > -1){
      this.items[index] = updatedItem;
    }
  }

  deleteItem(id: number){
    this.items = this.items.filter(item => item.id !== id);
  }
}
