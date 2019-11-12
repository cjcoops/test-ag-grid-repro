import { Spectator, createComponentFactory, byText } from '@ngneat/spectator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from '@ag-grid-community/angular';
import { DataService } from '../data.service';
import { fakeAsync, tick } from '@angular/core/testing';
import { timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { WithoutAgGridComponent } from './without-ag-grid.component';

describe('WithoutAgGridComponent', () => {
  let spectator: Spectator<WithoutAgGridComponent>;
  const createComponent = createComponentFactory({
    component: WithoutAgGridComponent,
    imports: [
      FormsModule,
      ReactiveFormsModule,
      AgGridModule.withComponents([])
    ],
    mocks: [DataService],
    detectChanges: false
  });

  it('should display the posts', fakeAsync(() => {
    spectator = createComponent();
    const dataService = spectator.get(DataService);
    dataService.fetch.andCallFake(() =>
      timer(100).pipe(mapTo([{ id: 1, title: 'testing without ag grid' }]))
    );
    spectator.detectChanges();

    spectator.typeInElement('Test', 'input');

    tick(300);
    spectator.detectChanges();

    expect(spectator.query(byText('testing without ag grid'))).not.toExist();

    tick(100);
    spectator.detectChanges();

    expect(dataService.fetch).toHaveBeenCalled();
    expect(spectator.query(byText('testing without ag grid'))).toExist();
  }));
});
