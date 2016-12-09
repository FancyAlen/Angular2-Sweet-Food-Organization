//import { Component, OnChanges, Input, trigger, state, animate, transition, style } from '@angular/core';
//
//@Component({
//	moduleId: module.id,
//	selector: 'my-fader',
//	templateUrl: 'title.component.html',
//	styleUrls: ['title.component.css'],
//	animations: [
//    trigger('isVisibleChanged', [
//      state('true' , style({ opacity: 1, transform: 'scale(1.0)' })),
//      state('false', style({ opacity: 0, transform: 'scale(0.0)'  })),
//      transition('1 => 0', animate('300ms')),
//      transition('0 => 1', animate('900ms'))
//    ])
//  ],
//})
//export class FaderComponent {
//  @Input() isVisible : boolean = true;
//  private: [OnChanges];
//}