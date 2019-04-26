import { Component, Input, Output, EventEmitter, OnChanges, OnDestroy } from '@angular/core';
import { ITable } from '../../interfaces/ITable';
import { ITab } from '../../interfaces/ITab';

@Component({
    selector: 'app-table',
    templateUrl: 'table.component.html',
    styleUrls: ['table.component.css']
})
export class TableComponent implements OnChanges, OnDestroy {
    @Input() table: ITable = {};
    @Output() onTable = new EventEmitter<ITable>();
    constructor() {
    }

    ngOnChanges() {
        console.log('data changed: ' + this.table.name)
    }

    ngOnDestroy() {
        console.log('component destroyed: ' + this.table.name);
    }

    tapOnTable(table: ITable) {
        this.onTable.emit(table);
    }
}