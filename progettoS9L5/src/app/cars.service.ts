import { Injectable } from '@angular/core';
import { iCar } from './Models/i-car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  apiUrl: string = 'assets/db.json'; // Assicurati che il percorso sia corretto
  carsArr: iCar[] = [];

  constructor() {
    this.getFromJson();
  }

  async getFromJson(): Promise<void> {
    try {
      const res = await fetch(this.apiUrl);
      const res_1 = await res.json();
      if (Array.isArray(res_1)) {
        this.carsArr = res_1;
      } else {
        console.error('Invalid JSON structure:', res_1);
      }
    } catch (error) {
      console.error('Error fetching JSON:', error);
    }
  }

  async getAll(): Promise<iCar[]> {
    if (this.carsArr.length === 0) {
      await this.getFromJson();
    }
    return Promise.resolve(this.carsArr);
  }


  async getBrand(brand : string): Promise<iCar[]> {
    if (this.carsArr.length === 0) {
      await this.getFromJson();
    }
    return this.carsArr.filter(car => car.brand === brand);
  }


  async getByModel(model: string): Promise<iCar | undefined> {
    if (this.carsArr.length === 0) {
      await this.getFromJson();
    }
    return this.carsArr.find(p => p.model === model);
  }
}
