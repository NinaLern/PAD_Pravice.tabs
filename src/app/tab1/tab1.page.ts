import { Component } from '@angular/core';

@Component({
  // 用在html檔
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

// 用在ts檔
export class Tab1Page {

  // 屬性(Property): 給別人用的資料  =>  教學單位陣列
  units = [
    '多多生日快到了!',
    '習慣吃罐罐之後，臭多都不願意吃飼料，公主病?',
    '想媽嘛的哭哭多多.',
    '出門逛街好快樂? 第一次去逛街的多!',
    '心愛的爸拔終於回來了，但小多竟然鬧脾氣?',
    '剪毛累累多',
    '調皮搗蛋多，竟然咬壞家裡的東西'
  ];

  constructor() {}

  // 方法(Method): 給別人呼叫的方法  =>  選取項目

  // 有沒有回傳的型態? 是甚麼? 要在:後定義   以下舉例:
  // unitSelected: number(){}  =>  回傳數字值

  // 有沒有要帶進函式的參數?類型是?   以下舉例:
  // unitSelected(unit: string) {}  =>  有一個叫unit的是字串
  unitSelected(unit: string) {
    console.log('被選項目為:', unit);
  }

}
