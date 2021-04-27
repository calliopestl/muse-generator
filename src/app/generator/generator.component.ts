import { Component, OnInit } from '@angular/core';
declare let require: any;

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {

 
  constructor() { }

  ngOnInit(): void {
  }

  
 getRandomNumber() {
   let genRdmNumber = document.getElementById('genRdmNumber') as HTMLInputElement;
    if (genRdmNumber.checked) {
      let rdmNumber = Math.floor(Math.random()*100);
      return rdmNumber;
    }
  }

  getRandomColor() {
    let genRdmColor = document.getElementById('genRdmColor') as HTMLInputElement;
    if (genRdmColor.checked) {
      let combo = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += combo[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    }

    getRandomWord() {
      let randomWords = require('random-words');
      let genRdmWord = document.getElementById('genRdmWord') as HTMLInputElement;
    if (genRdmWord.checked) {
      return randomWords();
    }
  }
}
