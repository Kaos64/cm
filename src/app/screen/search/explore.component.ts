import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchService, Path } from './search.service';

@Component({
  selector: 'cm-explore',
  templateUrl: './explore.component.html',
  styles: []
})
export class ExploreComponent implements OnInit {
  basedir: string = '';
  dir: Path[] = [];

  @Output() search: EventEmitter<Path> = new EventEmitter<Path>();

  constructor(protected srv: SearchService) { }

  ngOnInit() {
    this.explore(this.basedir);
    
  }

  parent(): string{
    const lio = this.basedir.lastIndexOf('/') ;
    if(lio < 0 ){
      return null
    }

    return this.basedir.substring(0, lio);
  }

  explore(basedir: string | Path){
    let path = basedir;
    if("string" != typeof basedir ){
      path = `${basedir.path}/${basedir.file}`;
    }
    this.srv.explore(path)
      .subscribe(dir => {
        
        this.basedir = path as string;
        this.dir = dir
        this.dir.sort((a: Path, b : Path) => {
          if(a.isDir && b.isDir){
            return a.file.localeCompare(b.file);
          }
          if(a.isDir){
            return -1;
          }
          if(b.isDir){
            return 1;
          }
          return a.file.localeCompare(b.file);

        });
      });
  }

}
