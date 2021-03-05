import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface Hero {
  id: number;
  title : string;
  body : string;
}

export interface Photo {
  id: number;
  title : string;
  url : string;
  thumbnailUrl : string;
}

@Component({
  selector: 'app-multiple-api',
  templateUrl: './multiple-api.component.html',
  styleUrls: ['./multiple-api.component.css']
})
export class MultipleApiComponent implements OnInit {

  constructor(private http : HttpClient) { }

  public heroes: Hero[] = [];
  public photos: Photo[] = [];
  p : any;
  q : any;

  public heroesUrl = 'https://jsonplaceholder.typicode.com/posts';  // URL to web api
  public photoUrl = 'https://jsonplaceholder.typicode.com/photos';  // URL to web api

  ngOnInit(): void {
    this.getHeroes().subscribe(
      data => this.heroes = data
    );
    console.log(this.heroes.values);
    this.getSymbols().subscribe(
      data => this.photos = data
    )
  }

  getHeroes(): Observable<Hero[]>{
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  getSymbols(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.photoUrl);
  }

}
