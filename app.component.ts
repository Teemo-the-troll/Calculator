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
  private prikladFake = '0';
  private operators = [];
  private mezipamet = '';

  
  addNumberToMezipamet(x) {
    console.log('pridavam cislo: ' + x)
    this.prikladFake += (x);
    this.mezipamet += (x);
    console.log('mezipamet po pridavku: ' + this.mezipamet)
    
  }

  flushMezipamet() {
    console.log('mezipamet flush: ' + this.mezipamet)
    this.priklad.push(parseInt(this.mezipamet));
    this.mezipamet = '';
  }

  addOperator(x) {
    this.prikladFake += (x);
    this.flushMezipamet();
    this.operators.push(x);
    
  }

  getInt() {
    this.flushMezipamet();
    console.log('toto je priklad na vypocet: ' + this.priklad);
    console.log('toto je vysledek: ');
    console.log('delka pole prikladu: ' + this.priklad.length)
  this.vysledek = this.priklad[0];
    for (let i = 0; i < this.priklad.length; i++) {
      switch (this.operators[i]) {
        case '+':
          this.vysledek += this.priklad[i+1];
          break;

        case '-':
          this.vysledek -= this.priklad[i+1];
          break;
        
        case '*':
          this.vysledek *= this.priklad[i+1];
          break;
        
        case '/':      
          this.vysledek /= this.priklad[i+1];
          break;

          default:
          break;
      }
      console.log(this.vysledek);
      this.prikladFake = this.vysledek.toString();
    }
  }


}
