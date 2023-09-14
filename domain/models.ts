import { randomUUID } from "crypto";



export class Product {
    readonly id: string;
    sequence?: number;
    sizes: Size[];

    constructor(){
        this.id = "";
        this.sizes = [];
    }
}

export class Size {
    readonly id: string;
    readonly productId: string;
    backsoon: boolean;
    special: boolean;
    stock: Stock[]; 

    constructor(special: boolean) {
        this.id = randomUUID();
        this.productId = randomUUID();
        this.special = special;
        this.backsoon = false;
        this.stock = []
    }

    public doWeHaveStock = () => this.stock.some(item => item.quantity > 0)
}

export class Stock {
    quantity: number;
    
    constructor() {
        this.quantity = 0;
    }
}