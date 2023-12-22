import {Component, OnInit} from '@angular/core';
import {Observable, startWith} from 'rxjs';
import {BurgerConstructorService} from './burger-constructor.service';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-burger-constructor',
  templateUrl: './burger-constructor.component.html',
  styleUrls: ['./burger-constructor.component.scss']
})
export class BurgerConstructorComponent implements OnInit {

  totalPrice$!: Observable<number>;

  constructor( private burgerConstructorService: BurgerConstructorService,
               private readonly iconRegistry: MatIconRegistry,
               private readonly sanitizer: DomSanitizer) {
    this.iconRegistry.addSvgIcon('currency-icon', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/currency-icon.svg'));
  }
  ngOnInit(): void {
    this.totalPrice$ = this.burgerConstructorService.totalPrice$.pipe(
      startWith(0)
    );
  }
}
