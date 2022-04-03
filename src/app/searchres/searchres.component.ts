import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchres',
  templateUrl: './searchres.component.html',
  styleUrls: ['./searchres.component.css']
})
export class SearchresComponent implements OnInit {

  constructor() { }

  searchResHidden = true;
  totalServicesCount = 0;
  totalFeaturesCount = 0;
  totalBlogsCount = 0;
  totalDocumentationsCount = 0;
  totalKBsCount = 0;
  searchText:string = "";

  showSearchResults() {
    if(this.searchText.length>0) {
      this.searchResHidden = false;
    } else {
      this.searchResHidden = true;
    }
    this.search(this.searchText);
  }

  ngOnInit(): void {
  }

  search(value:string) {

  }

}
