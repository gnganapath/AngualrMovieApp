import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.sass']
})
export class MovieDetailsComponent implements OnInit {

  movie = {
          "movie": "Batman",
          "heroImg": "https://images.pexels.com/photos/6633/car-superhero-symbol-batman.jpg",
          "cast": "John Doe, Mike Hessan ",
          "rating": "5",
          "similar" : [
              "movie1", "movie2", "movie3"
          ], 
          "links" : [
              "google.com", "amazon.com", "azure.com"
          ]
      };
  constructor() { }

  ngOnInit(): void {
  }

}
