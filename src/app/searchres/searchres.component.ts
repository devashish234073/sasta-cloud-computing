import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
@Component({
  selector: 'app-searchres',
  templateUrl: './searchres.component.html',
  styleUrls: ['./searchres.component.css']
})
export class SearchresComponent implements OnInit {

  constructor(private searchService:SearchService) { }

  searchResHidden = true;
  totalServicesCount = 0;
  totalFeaturesCount = 0;
  totalBlogsCount = 0;
  totalDocumentationsCount = 0;
  totalKBsCount = 0;
  data = [{"serviceName":"No results found","description":"","href":""}];
  searchText:string = "";

  showSearchResults() {
    if(this.searchText.length>0) {
      this.searchResHidden = false;
    } else {
      this.searchResHidden = true;
    }
    this.data = this.searchService.search(this.searchText);
    if(this.data==undefined) {
      this.data = [{"serviceName":"No results found","description":"","href":""}]
    } else {
      this.totalServicesCount = this.data.length;
    }
  }

  ngOnInit(): void {
  }

}
