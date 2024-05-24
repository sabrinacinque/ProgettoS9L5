import { Component } from '@angular/core';
import { iCar } from '../../Models/i-car';
import { CarsService } from '../../cars.service';

@Component({
  selector: 'app-toad-brand',
  templateUrl: './toad-brand.component.html',
  styleUrl: './toad-brand.component.scss'
})
export class ToadBrandComponent {
  carsArr: iCar[] = [];

  constructor(
    private carSvc: CarsService) {}

  ngOnInit() {
    this.carSvc.getBrand("Toadbrand").then(cars => {
      this.carsArr = cars;
      console.log(this.carsArr);
    }).catch(error => {
      console.error('Error fetching active posts:', error);
    });
  }

}
