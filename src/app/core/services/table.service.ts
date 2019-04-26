import { Injectable } from '@angular/core';
import { ITable } from '../../interfaces/ITable';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from '../../../../node_modules/rxjs';

@Injectable()
export class TableService {
    private _tables: BehaviorSubject<ITable[]> = new BehaviorSubject(Array());
    get oTables() {
        return this._tables.asObservable();
    }
    constructor(private httpClient: HttpClient) {
    }

    getTables() {
        return this.httpClient.get(`/tables`).pipe(
            map((res: any[]) => {
                return res.map(i => {
                    const table: ITable = {
                        id: i.id,
                        name: i.name,
                        status: i.bill ? i.bill.status: 0,
                        orderName: i.bill ? i.bill.customer: '',
                        totalDishes: i.bill ? i.bill.details.length: 0,
                        orderId: i.bill ? i.bill.id: ''
                    };
                    return table;
                });
            }), tap(data => {
                this._tables.next(data);
            })
        ).subscribe();
    }

    addTable(table: ITable) {
        this._tables.getValue().push();
        this._tables.next(this._tables.getValue());
    }

    getTableById(id: string) {
        return this.httpClient.get(`tables/${id}`).pipe(
            map((res: any) => {
                const table: ITable = {
                    id: res.id,
                    name: res.name,
                    bill: res.bill,
                    // tslint:disable-next-line:radix
                    status: parseInt(res.status)
                };
                return table;
            })
        );
    }
}
