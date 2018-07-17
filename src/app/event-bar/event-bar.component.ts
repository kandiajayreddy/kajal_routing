
import {Component, OnInit, Input} from '@angular/core';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'event-bar',
    templateUrl: './event-bar.component.html',
    styleUrls: ['./event-bar.scss']
})
export class EventBarComponent implements OnInit {
@Input() eventBarData: any = {};

    constructor() {
    }

    ngOnInit() {
        console.log('eventBarData====', this.eventBarData);
    }


    checkWidth(eventBarData) {
        return eventBarData.leftWidthPercent == 0 || eventBarData.rightWidthPercent == 0 ? 'no_width' : '';
    }

    /*getWidth(width, key) {
        // //console.log('width===', width);
        if(width.total) {
          //  console.log('====', ((width[key]/ width.total)*100));
        return ((width[key]/ width.total)*100);
        }
    }*/
}
