import { Component } from '@angular/core';
import { iCar } from '../../Models/i-car';
import { CarsService } from '../../cars.service';

@Component({
  selector: 'app-luigi-brand',
  templateUrl: './luigi-brand.component.html',
  styleUrl: './luigi-brand.component.scss'
})
export class LuigiBrandComponent {
  carsArr: iCar[] = [];

  constructor(
    private carSvc: CarsService) {}

  ngOnInit() {
    this.carSvc.getBrand("Luigibrand").then(cars => {
      this.carsArr = cars;
      console.log(this.carsArr);
    }).catch(error => {
      console.error('Error fetching active posts:', error);
    });
  }

}
