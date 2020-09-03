import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppServiceService } from '../services/app-service.service';
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.sass']
})
export class MoviesListComponent implements OnInit {

  search = new FormControl('');

  searchResult;
  constructor(private appService: AppServiceService) { }

  ngOnInit(): void {
  }
  searchMovie(){
      console.log(this.search.value)
      if(this.search.value != ''){
        
      this.appService.searchMovie(this.search.value).subscribe( res=>{

        if(res.status){
          this.searchResult = res.data;
        }
        else{
          alert("Warning! there is no movie name from search ")
        }
      },(error) =>{
        alert("Error- Serach related - 500 Server down");
      })
      }
  }
}
