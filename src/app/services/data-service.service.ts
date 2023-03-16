import { Injectable } from '@angular/core';
import clients from '../mocks/clients.json';
import products from '../mocks/products.json';
import reservations from '../mocks/reservations.json';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  getClients() {
    return clients;
  }

  getProducts() {
    return products;
  }

  getReservations() {
    return reservations;
  }

  getClientById(id: number) {
    return clients.find(client => client.id === id);
  }

  getProductById(id: number) {
    return products.find(product => product.id === id);
  }

}
