import { AnimationBuilder } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { student } from '../interface/data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent implements OnInit {

  title: string = "Angular";

  isDisabled: boolean = false;

  bioDt: string = 'teacher';

  dataTyp: any = 'entryDt';
  dataType: any = {
    name: 'andre',
    dob: 16072001,
    num: 939839839,
    sec:'a',
    cls:6,

  }


  studentData: student = {
    rollNO: 1,
    name: 'andre',
    class: '5th',
    section: 'b',
    age: 12,
    contact: 123456789,
  }

  studentList: student[] = [
    {
      rollNO: 1,
      name: 'andre',
      class: '5th',
      section: 'b',
      age: 12,
      contact: 123456789,
    },
    {
      rollNO: 1,
      name: 'andre',
      class: '5th',
      section: 'b',
      age: 12,
      contact: 123456789,
    },
    {
      rollNO: 1,
      name: 'andre',
      class: '5th',
      section: 'b',
      age: 12,
      contact: 123456789,
    },
    {
      rollNO: 1,
      name: 'andre',
      class: '5th',
      section: 'b',
      age: 12,
      contact: 123456789,
    },
    {
      rollNO: 1,
      name: 'andre',
      class: '5th',
      section: 'b',
      age: 12,
      contact: 123456789,
    }
  ]


  bioData: any = {
    myName: 'andre',
    age: 21,
    num: 379834722,
    edu: 'Graduate',
  }


  constructor() { }

  ngOnInit(): void {
  }

  fireFrm() {
    console.log(this.title)
    this.title = "Learning Angular"
    console.log(this.title)
  }

  /* shwBioData(){
     this.bioDt = true;
   }*/
  chngActn(dataType: any) {
    if (dataType == 'ty') {
      this.dataTyp = 'entryDt'
    }
    else if (dataType == 'st') {
      this.dataTyp = 'entrySt'
    }
  }

}
