import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IFood } from '../../interfaces/IFood';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FoodService {
    constructor(private httpClient: HttpClient) { }

    getFoods(): Observable<IFood[]> {
        return this.httpClient.get(`/foods`)
            .pipe(map((res: any) => {
                return res.rows.map((food: any) => {
                    return {
                        id: food.id,
                        name: food.name,
                        price: food.price,
                        cover: food.pictures[0],
                        quantity: 0,
                        categories: food.categories
                    } as IFood;
                });
            }));
    }
}
