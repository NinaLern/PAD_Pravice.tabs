import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  dodoCard = {
    subtitle:'假期結束回家後的多多....',
    title : '宛如征服宇宙的可愛尿布狗',
    imgName:'dodo_cute.jpeg',
    content:'過年前回家的多多看到爸拔的棉被放在床上，雖然習慣了，但是一回到家還是要整隻狗塞在棉被裡面，就像被爸拔抱著一樣。那一臉自豪的表情，就像征服了全宇宙的人類一樣。',
  };

  constructor() {}

}
