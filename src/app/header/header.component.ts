import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/dataShare/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private data: DataService) {
  }

  ngOnInit() {
  }

  setSearchText(name) {
    this.data.changeMessage({name: name.target.value});
  }
  setLanguage(lang) {
    this.data.changeMessage({lang: lang.value});
  }
}
