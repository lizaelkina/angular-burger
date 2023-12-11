import {Component, Inject, Input, OnInit} from '@angular/core';
import {IngredientGroup} from '../burger-ingredients.models';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  selectedGroup?: IngredientGroup;
  @Input() groups!: IngredientGroup[];

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
    this.selectedGroup = this.groups[0];
  }

  selectGroup(group: IngredientGroup) {
    this.selectedGroup = group;
    this.document.getElementById(group.ingredientType)?.scrollIntoView({behavior: 'smooth'});
  }
}
