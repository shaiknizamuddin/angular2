import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "app-star",
  templateUrl: "star.component.html",
  styleUrls: ["star.component.css"]
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;

  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = this.rating * 100 / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`Rating ${this.rating} was clicked !`);
  }
}
