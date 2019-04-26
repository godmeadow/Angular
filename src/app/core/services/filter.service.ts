import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from '../../../../node_modules/rxjs';
import { IFilter } from '../../interfaces/IFilter';
import { map, filter, tap } from '../../../../node_modules/rxjs/operators';

@Injectable({providedIn: 'root'})
export class FilterService {
    private _filters: BehaviorSubject<IFilter[]> = new BehaviorSubject(Array());
    get oFilters() {
        return this._filters.asObservable();
    }
    constructor(private httpClient: HttpClient) { }
    
    getFilters() {
        return this.httpClient.get(`/categories`).pipe(
            map((res: any[]) => {
                return res.map(i => {
                    const filter: IFilter = {
                        id: i.id,
                        title: i.name
                    };
                    return filter;
                });
            }), tap(data => {
                this._filters.next(data.reverse());
            })
        ).subscribe();
    }
}