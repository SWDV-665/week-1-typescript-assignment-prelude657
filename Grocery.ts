interface User {
    name: string;
    quantity: number;
    price: number;
  }
  
  class Grocery {
    name: string;
    quantity: number;
    price: number;
  
    constructor({ name, quantity, price }: { name: string; quantity: number; price: number; }) 
    {
      this.name = name;
      this.quantity = quantity;
      this.price = price;
    }
  }
  
  const user: User = new Grocery({ name: "bread", quantity: 1, price: 2 });
  
  