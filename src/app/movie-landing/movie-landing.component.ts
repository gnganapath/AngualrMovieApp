import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../services/app-service.service';

@Component({
  selector: 'app-movie-landing',
  templateUrl: './movie-landing.component.html',
  styleUrls: ['./movie-landing.component.sass']
})
export class MovieLandingComponent implements OnInit {

  imageObject = [
    {    
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
    title: 'Hummingbirds are amazing creatures'
    }];    
    
    Movielist= [];
        
  constructor(private appService: AppServiceService) { }

  ngOnInit(): void {
    this.appService.getMovieData().subscribe( response =>{
      console.log(response.data)
      let tempRes = response.data;
      tempRes.forEach(element => {
        element.thumbImage = element.heroImg;
        element.title = element.movie + "cast: "+ element.cast + "Rating: "+ element.rating
      });
      this.Movielist = tempRes;
    })
  }

}
