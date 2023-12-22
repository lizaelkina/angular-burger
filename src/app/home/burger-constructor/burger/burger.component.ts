import {Component, OnInit} from '@angular/core';
import {BurgerConstructorService} from '../burger-constructor.service';
import {Observable} from 'rxjs';
import {Ingredient} from '../../../shared/models';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss']
})
export class BurgerComponent implements OnInit {

  bun$!: Observable<Ingredient>;
  middle$!: Observable<Ingredient[]>;

  constructor(private burgerConstructorService: BurgerConstructorService,
              private readonly iconRegistry: MatIconRegistry,
              private readonly sanitizer: DomSanitizer) {
    this.iconRegistry.addSvgIcon('lock-icon_inactive', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/lock-icon_inactive.svg'));
  }

  ngOnInit(): void {
    this.bun$ = this.burgerConstructorService.bun$;
    this.middle$ = this.burgerConstructorService.middle$;
  }

}
