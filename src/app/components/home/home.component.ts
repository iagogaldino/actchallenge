import { HomeService } from './../../services/home.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public searchError = false;
  public loadingItems = false;
  public time: any;
  public characters: Array<any> = [];

  constructor(private homeService: HomeService, private router: Router) {}

  ngOnInit() {
    this.getCharacters('');
  }

  // searchCharacters(charName: String){
  //   this.searchError = false;
  //   if (this.time) {
  //     clearTimeout(this.time)
  //   }
  //   this.time = setTimeout(()=>{
  //     console.log('consulta');
  //     this.getCharacters(charName);

  //   }, 1000);

  // }

  getCharacters(charName: String){
    this.loadingItems = true;
    let params: any;
    if(charName){
      params = {'name': charName};
    }else{
      params = null
    }
    this.homeService.getCharacters(params).subscribe(
      (response: any) => {
        this.loadingItems = false;
        if (!response.data.results.length){
          this.searchError = true;
        }
        this.characters = response.data.results;
    },
      (erro: any)=>{
        console.log('URL Inválida', erro);
        this.loadingItems = false;
      }
    )
  }



  viewDetails(item: any){
    this.router.navigate(['details', item]);
  }

}
