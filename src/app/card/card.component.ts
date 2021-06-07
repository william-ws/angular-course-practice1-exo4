import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() name: string | undefined;
  @Input() technic: string | undefined;
  @Output() gametechnicEmitter = new EventEmitter();

  imgPath: string | undefined;

  constructor() {

  }

  ngOnInit(): void {
    this.imgPath = 'assets/img/' + this.name?.toLowerCase() + '.jpg';
  }


  onClickbutton() {
    this.gametechnicEmitter.emit(this.technic);
    // alert(this.technic);
  }

}
