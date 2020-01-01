import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-project';
  private vysledek = 0;
  private priklad = [];
  private operators = [];
  private mezipamet = null;

  addNumberToMezipamet(x) {
    this.mezipamet += (x);
  }

  flushMezipamet() {
    this.priklad.push(this.mezipamet);
    this.mezipamet = null;
  }

  addOperator(x) {
    this.flushMezipamet();
    this.operators.push(x);
  }

  getInt() {
    this.flushMezipamet();
    console.log('toto je priklad na vypocet: ' + this.mezipamet);
    console.log('toto je vysledek: ');
    console.log('delka pole prikladu: ' + this.priklad.length)
  this.vysledek = this.priklad[0];
    for (let i = 0; i < this.priklad.length; i++) {
      switch (this.operators[i]) {
        case '+':
          this.vysledek += parseInt(this.priklad[i+1]);
          break;

        case '-':
          this.vysledek -= parseInt(this.priklad[i+1]);
          break;
        
        case '*':
          this.vysledek *= parseInt(this.priklad[i+1]);
          break;
        
       // case '/':       dodelam pak pripadne
         // break;

          default:
          break;
      }
      console.log(this.vysledek);

    }
  }


}
