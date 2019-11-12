import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgGridModule } from '@ag-grid-community/angular';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { WithAgGridComponent } from './with-ag-grid/with-ag-grid.component';
import { WithoutAgGridComponent } from './without-ag-grid/without-ag-grid.component';

@NgModule({
  declarations: [AppComponent, WithAgGridComponent, WithoutAgGridComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
