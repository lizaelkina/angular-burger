import {Component, OnInit} from '@angular/core';
import {BurgerConstructorService} from '../burger-constructor.service';
import {Observable} from 'rxjs';
import {Ingredient} from '../../../shared/models';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss']
})
export class BurgerComponent implements OnInit {

  bun$!: Observable<Ingredient>;

  constructor(private burgerConstructorService: BurgerConstructorService) {
  }

  ngOnInit(): void {
    this.bun$ = this.burgerConstructorService.bun$;
  }

}
