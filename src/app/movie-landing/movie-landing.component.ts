import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-landing',
  templateUrl: './movie-landing.component.html',
  styleUrls: ['./movie-landing.component.sass']
})
export class MovieLandingComponent implements OnInit {

  imageObject = [
    // {
    // image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
    // thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
    // title: 'Hummingbirds are amazing creatures'
    // },
     {
			"movie": "Batman",
			"heroImg": "https://images.pexels.com/photos/6633/car-superhero-symbol-batman.jpg",
			"cast": "John Doe, Mike Hessan ",
			"rating": "5"
		},
		{
			"movie": "Green Lantern",
			"heroImg": "https://images.pexels.com/photos/4142511/pexels-photo-4142511.jpeg",
			"cast": "Dwayne Diaz",
			"rating": "2"
		},
		{
			"movie": "Groot",
			"heroImg": "https://images.pexels.com/photos/4048093/pexels-photo-4048093.jpeg",
			"cast": "Groot",
			"rating": "4"
		}
  
  ];         

  constructor() { }

  ngOnInit(): void {
  }

}
