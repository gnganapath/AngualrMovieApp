import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppServiceService } from '../services/app-service.service';
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  search = new FormControl('');

  searchResult;
  currentEvent: string = 'start do something';

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

  config = {
    showActionButtons: true,
    showAddButtons: true,
    showRenameButtons: true,
    showDeleteButtons: true,
    showRootActionButtons: true, // set false to hide root action buttons.
    enableExpandButtons: true,
    enableDragging: true,
    rootTitle: 'Company Tree',
    validationText: 'Enter valid company',
    minCharacterLength: 5,
    setItemsAsLinks: false,
    setFontSize: 32,
    setIconSize: 16
};
myTree = [
  {
    name: 'Apple',
    id: 1,
    options: {
        hidden: false,
        position: 1,
        href: 'https://github.com/Zicrael/ngx-tree-dnd'
      },
    childrens: [
      {
        name: 'Iphone',
        id: 2,
        childrens: []
      }
    ]
  },
  {
    name: 'Google',
    id: 3,
    childrens: [
      {
        name: 'Google play',
        id: 4,
        childrens: []
      }
    ]
  }
];

onDragStart(event) {
   this.currentEvent = ' on drag start';
   console.log(event);
}
onDrop(event) {
  this.currentEvent = 'on drop';
  console.log(event);
}
onAllowDrop(event) {
  this.currentEvent = 'on allow drop';
}
onDragEnter(event) {
  this.currentEvent = 'on drag enter';
}
onDragLeave(event) {
  this.currentEvent = 'on drag leave';
}
onAddItem(event) {
  this.currentEvent = 'on add item';
  console.log(event);
}
onStartRenameItem(event) {
  this.currentEvent = 'on start edit item';
}
onFinishRenameItem(event) {
  this.currentEvent = 'on finish edit item';
}
onStartDeleteItem(event) {
  console.log('start delete');
  this.currentEvent = 'on start delete item';
}
onFinishDeleteItem(event) {
  console.log('finish delete');
  this.currentEvent = 'on finish delete item';
}
onCancelDeleteItem(event) {
  console.log('cancel delete');
  this.currentEvent = 'on cancel delete item';
}
}
