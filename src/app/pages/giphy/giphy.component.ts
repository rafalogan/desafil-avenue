import { Component, OnInit } from '@angular/core';
import { GiphyService } from "../../services/giphy.service";

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.scss']
})
export class GiphyComponent implements OnInit {

  results: string[] | undefined;

  constructor(private giphyService: GiphyService) { }

  ngOnInit(): void {
    this.getCats();
  }


  getCats() {
    return  this.giphyService.get('cats').subscribe({
      next: (response) => {
        this.results = response.data.map((item: { images: { original: { url: string; }; }; }) => item.images.original.url);
      },
      error: (err) => console.log(err)
    })
    ;
  }
}
