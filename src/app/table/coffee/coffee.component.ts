import { Component, OnInit } from '@angular/core';
import { ITable } from '../../interfaces/ITable';
import { ITab } from '../../interfaces/ITab';
import { TableService } from '../../core/services/table.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-coffee',
    templateUrl: 'coffee.component.html',
    styleUrls: ['coffee.component.css']
})

export class CoffeeComponent implements OnInit {
    tables: ITable[];
    currentTable: String = 'None';
    constructor(private tableService: TableService,
        private router: Router) {
    }

    ngOnInit() {
        this.tableService.getTables();
        this.tableService.oTables.subscribe(data => {
            // chay moi khi Observable next
            this.tables = data.sort((a, b) => {
                return (a.name.split(" ").slice(1) < b.name.split(" ").slice(1) ? -1 : 1);
            });
        });
    }

    onTapTable(table: ITable) {
        this.currentTable = table.name;
        if (table.id && table.status === 0) {
            this.router.navigate(['order/' + table.id]);
        } else if (table.id && table.status > 0) {
            const params = {
                id: table.orderId,
                tableId: table.id
            };
            this.router.navigate(['order', 'thanks', params]);
        }
    }
}
