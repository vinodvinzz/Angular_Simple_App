import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    items: any ;
  constructor(private _http:ApiService) { }

  ngOnInit(): any{
    this._http.getData().subscribe(data =>{
      this.items =data;
      console.log(this.items)
    })
  }

}
