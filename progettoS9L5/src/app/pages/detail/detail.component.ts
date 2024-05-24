import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../cars.service';
import { iCar } from '../../Models/i-car';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  currentCar!: iCar;
  returnUrl!: string;
  cardColor!: string;
  history: any;
  window: any;

  constructor(
    private route: ActivatedRoute,
    private carSvc: CarsService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(async paramMap => {
      const model = paramMap.get('model');
      if (model) {
        try {
          const car = await this.carSvc.getByModel(model);
          console.log(car);
          if (car) {
            this.currentCar = car;
          } else {
            console.error('Car not found');
          }
        } catch (error) {
          console.error('Error fetching car details:', error);
        }
      } else {
        console.error('No model parameter found');
      }
    });
  }

  goBack() {
    history.back();
  }
}
