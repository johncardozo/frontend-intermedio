import { Component, Input } from '@angular/core';
import { Review } from '../../models/review';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent {
  @Input() review!: Review;
  likes: number = 0;
  incrementLikes() {
    this.likes++;
  }
}
