import { Component, OnInit } from '@angular/core';
import { anime } from '../interface/anime'

@Component({
  selector: 'app-secondcomp',
  templateUrl: './secondcomp.component.html',
  styleUrls: ['./secondcomp.component.css']
})
export class SecondcompComponent implements OnInit {

  constructor() { }

  months=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];

  marks = 0.3242;

  num1 = 0.87689;

  todayDate = new Date();



  ngOnInit(): void {
  }

  animeCln: anime[] = [
    {
      clan: 'uchiha',
      name: 'itachi',
    },
    {
      clan: 'otsutsuki',
      name: 'kaguya',
    },
    {
      clan: 'senju',
      name: 'hashirama',
    },
    {
      clan: 'hyuga',
      name: 'neji',
    },
    {
      clan: 'uzumaki',
      name: 'naruto',
    },
    {
      clan: 'nara',
      name: 'shikamaru',
    },
    {
      clan: 'kazekage',
      name: 'gaara',
    }
  ]

  getColor(anm: string): any {
    switch (anm) {
      case 'uchiha':
        return 'red';
        break;

      case 'otsutsuki':
      case 'kazekage':
        return 'blue';
        break;

      case 'nara':
      case 'senju':
        return 'pink';
        break;

      case 'hyuga':
        return 'green';
        break;

      case 'uzumaki':
        return 'orange';
        break;
    }
  }


}
