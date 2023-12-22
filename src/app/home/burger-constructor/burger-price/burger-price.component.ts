import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {BurgerConstructorService} from '../burger-constructor.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-burger-price',
  templateUrl: './burger-price.component.html',
  styleUrls: ['./burger-price.component.scss']
})
export class BurgerPriceComponent implements OnInit{
  totalPrice$!: Observable<number>;

  constructor( private burgerConstructorService: BurgerConstructorService,
               private readonly iconRegistry: MatIconRegistry,
               private readonly sanitizer: DomSanitizer) {
    this.iconRegistry.addSvgIcon('currency-icon', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/currency-icon.svg'));
  }
  ngOnInit(): void {
    this.totalPrice$ = this.burgerConstructorService.totalPrice$;
  }
}
