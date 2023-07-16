import { Component } from '@angular/core';
import { Review } from '../../models/review';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent {
  reviews: Review[] = [
    {
      id: '1',
      username: 'Diana Prince',
      date: new Date(),
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies fringilla massa, eu tincidunt quam congue et. Aenean facilisis lorem in est ultricies, nec tempor urna eleifend. Aliquam vel scelerisque neque, sed lobortis diam. Suspendisse non purus tincidunt, molestie purus auctor, euismod enim.',
    },
    {
      id: '2',
      username: 'Clark Kent',
      date: new Date(),
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies fringilla massa, eu tincidunt quam congue et. Aenean facilisis lorem in est ultricies, nec tempor urna eleifend. Aliquam vel scelerisque neque, sed lobortis diam. Suspendisse non purus tincidunt, molestie purus auctor, euismod enim.',
    },
    {
      id: '3',
      username: 'Bruce Wayne',
      date: new Date(),
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies fringilla massa, eu tincidunt quam congue et. Aenean facilisis lorem in est ultricies, nec tempor urna eleifend. Aliquam vel scelerisque neque, sed lobortis diam. Suspendisse non purus tincidunt, molestie purus auctor, euismod enim.',
    },
  ];
}
