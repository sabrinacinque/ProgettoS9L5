import { Component } from '@angular/core';
import { iCar } from '../../Models/i-car';
import { CarsService } from '../../cars.service';

@Component({
  selector: 'app-mario-brand',
  templateUrl: './mario-brand.component.html',
  styleUrl: './mario-brand.component.scss'
})
export class MarioBrandComponent {
  carsArr: iCar[] = [];

  constructor(
    private carSvc: CarsService) {}

  ngOnInit() {
    this.carSvc.getBrand("Mariobrand").then(cars => {
      this.carsArr = cars;
      console.log(this.carsArr);
    }).catch(error => {
      console.error('Error fetching active posts:', error);
    });
  }

}
