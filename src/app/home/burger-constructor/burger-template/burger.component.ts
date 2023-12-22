import {Component} from '@angular/core';
import {BurgerConstructorService} from '../burger-constructor.service';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss']
})
export class BurgerComponent {

  constructor(public burgerConstructorService: BurgerConstructorService) {
  }

}
