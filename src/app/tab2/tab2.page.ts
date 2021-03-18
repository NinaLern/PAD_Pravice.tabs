import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  doMemo = [
    { name: '喜歡的玩具', counts: '5', type: '玩偶', fav: '橘子' },
    { name: '最喜歡的食物', counts: '無限', type: '軟軟好吃的', fav: '雞肉罐罐' },
    { name: '奴才', counts: '9', type: '家人', fav: '媽麻' },
  ]

  constructor() { }

}
