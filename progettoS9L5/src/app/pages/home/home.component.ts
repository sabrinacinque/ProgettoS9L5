import { Component, OnInit } from '@angular/core';
import { iCar } from '../../Models/i-car';
import { CarsService } from '../../cars.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  carsArr: iCar[] = [];
  randomCars: iCar[] = [];

  constructor(private carSvc: CarsService) { }

  ngOnInit() {
    this.carSvc.getAll().then(cars => {
      if (Array.isArray(cars)) {
        this.carsArr = cars;
        console.log(this.carsArr);
        this.randomCars = this.getRandomPosts(this.carsArr, 2);
      } else {
        console.error('Expected an array of cars but got:', cars);
      }
    }).catch(error => {
      console.error('Error fetching cars:', error);
    });
  }

  getRandomPosts(arr: iCar[], num: number): iCar[] {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }
}
