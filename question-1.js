// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้
inventory.apple.quantity = 200;
inventory.orange ={ price: 20, quantity: 300 };
let Total = 0;
for (let item in inventory){
  Total += inventory[item].price * inventory[item].quantity;
}
console.log(`Total inventory value: ${Total} baht`);