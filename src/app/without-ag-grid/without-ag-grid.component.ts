import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs/operators';
import { AllCommunityModules } from '@ag-grid-community/all-modules';
import { DataService } from '../data.service';

@Component({
  selector: 'app-without-ag-grid',
  templateUrl: './without-ag-grid.component.html',
  styleUrls: ['./without-ag-grid.component.scss']
})
export class WithoutAgGridComponent implements OnInit {
  constructor(private dataService: DataService) {}

  searchControl = new FormControl('');

  columnDefs = [
    { headerName: 'ID', field: 'id' },
    { headerName: 'Title', field: 'title' }
  ];

  rowData;

  modules = AllCommunityModules;

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        switchMap(value => this.dataService.fetch())
      )
      .subscribe(posts => (this.rowData = posts));
  }
}
