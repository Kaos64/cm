import { Component, OnInit } from '@angular/core';
import { SearchService, Path } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  results: any= [];
  query: string ;
  currentPath: Path = null;
  pageSize: number = 24
  pageIndex: number = 1;
  pageCount: number = 1;

  constructor(protected srv: SearchService) { }

  ngOnInit() {
    this.search('Franck');
  }

  pageChange(evt){
    this.pageIndex  = evt.pageIndex + 1 ;
    this.__search()
  }

  search(q){
    this.query = q;
    this.__search();
  }

  searchFromExplore(path: Path){
    const lio = path.file.lastIndexOf('.');
    this.query = (lio > -1) ? path.file.substring(0, lio) : this.query = path.file;
    this.search(this.query);
  }


  __search(){
    this.srv.search(this.query, this.pageIndex).subscribe(r =>{
      this.results = r.data;
      this.pageSize = r.pageSize;
      this.pageCount = r.pageCount;
      this.pageIndex = r.pageIndex;
    }  );
  }

  
}
