import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from './API.service';
import { Calculation } from '../types/calculation';
import { CalcInput } from '../types/calcInput';
import { input } from 'aws-amplify';
import * as uuid from 'uuid';
import { Console } from 'console';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'sezzle-project';
  public createForm: FormGroup;

  calculations: Array<Calculation>;

  constructor(private api: APIService, private fb: FormBuilder) { }

  async ngOnInit() {
    this.createForm = this.fb.group({
      'operand1': ['', Validators.required],
      'operator': ['', Validators.required],
      'operand2': ['', Validators.required]
    });

    /* TODO: ONLY SHOW LAST TEN */ 
    this.api.ListCalculations().then(event=> {
      var sortedArray= event.items.sort((calc1, calc2) => {
        if (calc1.timestamp > calc2.timestamp){
          return -1;
        }
        if (calc1.timestamp < calc2.timestamp){
          return 1;
        }
        return 0;
      })
      this.calculations = sortedArray.slice(0, 10);
    });

    /* subscribe to new calculations being created */
    this.api.OnCreateCalculationListener.subscribe( (event: any) => {
      const newCalculation = event.value.data.onCreateCalculation;
      if (this.calculations.length == 10) {
        var slicedArray = this.calculations.slice(0,9)
        this.calculations = [newCalculation, ...slicedArray]
      } 
      else {
        this.calculations = [newCalculation, ...this.calculations];
      }
      
    });
  } 


  public onCreate(inputCalc: CalcInput) {
    var calcres = ''
    var result = 0
    if (inputCalc.operator == '+') {
      result = +inputCalc.operand1 + +inputCalc.operand2
      calcres = String(inputCalc.operand1) + ' + ' + String(inputCalc.operand2) + ' = ' + result 
    }

    else if (inputCalc.operator == '-') {
      result = inputCalc.operand1-inputCalc.operand2
      calcres = String(inputCalc.operand1) + ' - ' + String(inputCalc.operand2) + ' = ' + result
    }

    else if (inputCalc.operator == '*') {
      result = inputCalc.operand1*inputCalc.operand2
      calcres = String(inputCalc.operand1) + ' * ' + String(inputCalc.operand2) + ' = ' + result
    }

    else if (inputCalc.operator == '/') {
      result = inputCalc.operand1/inputCalc.operand2
      calcres = String(inputCalc.operand1) + ' / ' + String(inputCalc.operand2) + ' = ' + result
    }

    else {
      calcres = 'Error. Please enter a valid calculation.'
    }

    var timestp=Math.floor(Date.now()/1000);
    const myId = uuid.v4();

    const newCalculation = {
      id : myId,
      timestamp: timestp,
      calcul: calcres
    }

    this.api.CreateCalculation(newCalculation).then(event => {
      console.log('calculation created!');
      this.createForm.reset();
    })
    .catch(e => {
      console.log('error creating a new calculation...', e);
    });
  }
}