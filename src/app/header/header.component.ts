import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  getBarData(data) {
    console.log('data---', data);
    return {
        left: 50,
        right: 50,
        leftWidthPercent: 50,
        rightWidthPercent: 50,
        total: 100,
        leftText: 'DIRECT HOURS',
        rightText: 'INDIRECT HOURS'
    };
}

}
