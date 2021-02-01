import { Component, OnInit } from '@angular/core';

@Component({ //decorater, in that have java script objects 
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  newPost = 'No Content';
  enteredvalue = ' ';

  constructor() { }

  ngOnInit(): void {
  }

/*   onAddPost(postInput : HTMLTextAreaElement){
    //alert('post added !');
    this.newPost = postInput.value;
 
  } */

  onAddPost(){ 
    this.newPost = this.enteredvalue;
  }


}
