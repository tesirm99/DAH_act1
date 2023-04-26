import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewPagePage } from './new-page.page';
import { ActivatedRoute } from '@angular/router';

describe('NewPageClients', () => {
  let component: NewPagePage;
  let fixture: ComponentFixture<NewPagePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPagePage ],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: ActivatedRoute, useValue: {
            snapshot: {
              paramMap: {
                get: () => 'clients'
              }
            }
          }
        }
      ]

    }).compileComponents();

    fixture = TestBed.createComponent(NewPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('NewPageProducts', () => {
  let component: NewPagePage;
  let fixture: ComponentFixture<NewPagePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPagePage ],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: ActivatedRoute, useValue: {
            snapshot: {
              paramMap: {
                get: () => 'products'
              }
            }
          }
        }
      ]

    }).compileComponents();

    fixture = TestBed.createComponent(NewPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('NewPageReservations', () => {
  let component: NewPagePage;
  let fixture: ComponentFixture<NewPagePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPagePage ],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: ActivatedRoute, useValue: {
            snapshot: {
              paramMap: {
                get: () => 'reservations'
              }
            }
          }
        }
      ]

    }).compileComponents();

    fixture = TestBed.createComponent(NewPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('NewPageGetClientName', () => {
  let component: NewPagePage;
  let fixture: ComponentFixture<NewPagePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPagePage ],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: ActivatedRoute, useValue: {
            snapshot: {
              paramMap: {
                get: () => 'clients'
              }
            }
          }
        }
      ]

    }).compileComponents();

    fixture = TestBed.createComponent(NewPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});