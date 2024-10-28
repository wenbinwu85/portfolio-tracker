import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public localStorage: Storage;
  public sessionStorage: Storage;
  stores: any;

  constructor(@Inject(DOCUMENT) private document: Document) { 
    this.localStorage = this.document.defaultView!.localStorage;
    this.sessionStorage = this.document.defaultView!.sessionStorage;
    this.stores = {
      'localStorage': this.localStorage,
      'sessionStorage': this.sessionStorage,
    };
  }

  public getItem(store: string, item: string) {
    const selectedStore = this.stores[store];
    const data = selectedStore?.getItem(item);
    return data ? JSON.parse(data) : null;
  }

  public setItem(store: string, itemName: string, item: any) {
    const selectedStore = this.stores[store];
    const data = JSON.stringify(item);
    selectedStore?.setItem(itemName, data);
  }

  public removeItem(store: string, itemName: string) {
    const selectedStore = this.stores[store];
    selectedStore?.removeItem(itemName);
  }

  public clearStore(store: string) { 
    const selectedStore = this.stores[store];
    selectedStore.clear();
  }
}
