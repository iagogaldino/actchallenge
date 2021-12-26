import { HomeService } from './../../../services/home.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-charDetails',
  templateUrl: './charDetails.component.html',
  styleUrls: ['./charDetails.component.css']
})
export class CharDetailsComponent implements OnInit {
  public dataChar = {name: '', description: '', thumbnail: {extension: '', path: ''}};

  constructor(private route: ActivatedRoute, private homeService: HomeService) {
    this.route.params.subscribe((data)=>{

      this.getCharactersDetails(data.id);
    })
  }

  ngOnInit() {

  }

  getCharactersDetails(charId: number){
      this.homeService.getCharactersDetails({'id': charId}).subscribe((response: any)=>{

        console.log(response);
      this.dataChar = response.data.results[0];
    })
  }

}
