import { TestBed } from '@angular/core/testing';

import { DataServiceService } from './data-service.service';

describe('DataServiceService', () => {
  let service: DataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return clients', () => {
    expect(service.getClients()).toBeTruthy();
  });

  it('should return products', () => {
    expect(service.getProducts()).toBeTruthy();
  });
  
  it('should return reservations', () => {
    expect(service.getReservations()).toBeTruthy();
  });

  it('should return client by id', () => {
    expect(service.getClientById(1)).toBeTruthy();
  });

  it('should return product by id', () => {
    expect(service.getProductById(1)).toBeTruthy();
  });

});
