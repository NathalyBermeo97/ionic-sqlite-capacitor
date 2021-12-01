import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-pagetwo',
  templateUrl: './pagetwo.page.html',
  styleUrls: ['./pagetwo.page.scss'],
})
export class PagetwoPage  {

  products = [];
  export = null;
  newProduct = 'My cool product';

  constructor(private databaseService: DatabaseService) {
    this.loadProducts();
  }
  
  loadProducts() {
    this.databaseService.getProductList().subscribe(res => {
      this.products = res.values;
      console.log('my products: ', res);
    });
  }

  // Mode is either "partial" or "full"
  async createExport(mode) {
    const dataExport = await this.databaseService.getDatabaseExport(mode);
    console.log('my export: ', dataExport);
    
    this.export = dataExport.export;
  }
 
  async addProduct() {
    await this.databaseService.addDummyProduct(this.newProduct);
    this.newProduct = '';
    this.loadProducts();
  }
 
  async deleteProduct(product) {    
    await this.databaseService.deleteProduct(product.id);
    this.products = this.products.filter(p => p != product);    
  }
 
  // For testing..
  deleteDatabase() {
    this.databaseService.deleteDatabase();
  }
  
}
