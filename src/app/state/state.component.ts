import { Component, OnInit } from '@angular/core';
import {State} from '../state';
import {Country} from '../country';


@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  selectedState: State = new coun(2, 'India');
  countries = [
    new Country(1, 'USA' ),
    new Country(2, 'India' ),
    new Country(3, 'Australia' ),
    new Country(4, 'Brazil')
  ];
  constructor() { }

  ngOnInit() {
  }

}
