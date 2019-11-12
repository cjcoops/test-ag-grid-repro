import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs/operators';
import { AllCommunityModules } from '@ag-grid-community/all-modules';
import { DataService } from '../data.service';

@Component({
  selector: 'app-with-ag-grid',
  templateUrl: './with-ag-grid.component.html',
  styleUrls: ['./with-ag-grid.component.scss']
})
export class WithAgGridComponent implements OnInit {
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
