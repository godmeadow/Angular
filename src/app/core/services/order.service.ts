import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../../node_modules/rxjs';
import { IFoodOrdered } from '../../interfaces/IFoodOrdered';
import { IFood } from '../../interfaces/IFood';
import { HttpClient } from '../../../../node_modules/@angular/common/http';

@Injectable()
export class OrderService {
    private _totalAmount = new BehaviorSubject(0);
    get totalAmount() {
        return this._totalAmount.asObservable();
    }

    private _foodOrdered: BehaviorSubject<IFoodOrdered[]> = new BehaviorSubject(new Array());
    get foodOrdered() {
        return this._foodOrdered.asObservable();
    }

    constructor(private httpClient: HttpClient) { }

    addFood(food: IFood) {
        const foods = this._foodOrdered.getValue();
        const index = foods.findIndex(f => f.food.id === food.id);
        if (index > -1) {
            foods[index].quantity++;
        } else {
            foods.push({
                food: food,
                quantity: 1
            });
        }

        const total = this.caclTotal(foods);
        this._totalAmount.next(total);
        this._foodOrdered.next(foods);
    }

    removeFood(food: IFood) {
        const foods = this._foodOrdered.getValue();
        const index = foods.findIndex(f => f.food.id === food.id);
        if (index > -1) {
            foods[index].quantity--;
            if (foods[index].quantity === 0) {
                foods.splice(index, 1);
            }
        }

        const total = this.caclTotal(foods);
        this._totalAmount.next(total);
        this._foodOrdered.next(foods);
    }

    private caclTotal(foods: IFoodOrdered[]) {
        let total: number = 0;
        for (let item of foods) {
            total = total + item.food.price * item.quantity;
        }
        return total;
    }

    createOrder(tableId: string,
        customer: string,
        total: number,
        status: number,
        details: IFoodOrdered[]) {

        const body = {
            table: tableId,
            customer: customer,
            status: status,
            total: total,
            details: details.map(food => {
                return {
                    food: food.food.id,
                    foodName: food.food.name,
                    quatity: food.quantity,
                    amount: food.quantity * food.food.price
                }
            })
        }
        return this.httpClient.post('/bills', body);
    }

    updateStatusOrder(billId: string, status: number) {
        const body = {
            status: status
        };
        if (status === 0) {
            this._foodOrdered.next([]);
            this._totalAmount.next(0);
        }
        return this.httpClient.put('/bills/' + billId, body);
    }

    getOrderById(billId: string) {
        return this.httpClient.get('/bills/' + billId);
    }

    updateOrder(billId: string,
        tableId: string,
        customer: string,
        total: number,
        status: number,
        details: IFoodOrdered[]) {

        const body = {
            table: tableId,
            customer: customer,
            status: status,
            total: total,
            details: details.map(food => {
                return {
                    food: food.food.id,
                    foodName: food.food.name,
                    quatity: food.quantity,
                    amount: food.quantity * food.food.price
                };
            })
        };
        return this.httpClient.put('/bills/' + billId, body);
    }

    loadOrder(bill: any) {
        this._totalAmount.next(bill.total);
        const foodOrdered: IFoodOrdered[] = bill.details.map(i => {
            const food: IFoodOrdered = {
                food: {
                    id: i.food,
                    name: i.foodName,
                    price: i.amount / i.quatity
                },
                quantity: i.quatity
            };
            return food;
        });
        this._foodOrdered.next(foodOrdered);
    }
}
