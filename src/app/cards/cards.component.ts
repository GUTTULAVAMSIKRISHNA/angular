import { Component } from '@angular/core';
import { BookstallService } from '../services/bookstall.service';
import { Bookstall } from '../models/bookstall';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  bookstall:Bookstall[]=[];
 constructor(private service:BookstallService){}

 ngOnInit():void{
  this.service.onsumbit().subscribe(data => this.bookstall =data);
 }
}
