import { Injectable } from '@angular/core';
import { Cocktail } from '../app/common/cocktail'

@Injectable({
  providedIn: 'root'
})
export class CocktailService{
  cocktailsList : Cocktail[] = [
    {
      name : "La Binouze",
      price : 6.99 ,
      img : "https://fakeimg.pl/350x200/?text=Binouze"
    },
    {
      name : "Le Pastaga" ,
      price : 2 ,
      img : "https://fakeimg.pl/350x200/?text=Pastaga"
    },
    {
      name : "Le Monaco" , 
      price : 4.99 ,
      img : "https://fakeimg.pl/350x200/?text=Monac'"
    },
  ];

  constructor() {}

  getCocktails() {
    return this.cocktailsList;
  }
}
