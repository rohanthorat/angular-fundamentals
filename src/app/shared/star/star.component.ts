import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnChanges {
  @Input() public rating: number;
  @Output() public ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  public starWidth: number;

  constructor() { }

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }

  public onClick(): void {
    this.ratingClicked.emit(`The rating ${this. rating} was clicked`);
  }
}
