const user = {
   id: 101,
    name: "Ravi",
    preferences: {
        theme: "dark",
        language: "en"
    }
};

//🎯 Task
    // 1. Create a shallow copy of user
    let copyuser={...user,name:"sidhu"}
   // console.log(user)
    console.log(copyuser)
    let copyuser1=structuredClone(user)
    copyuser1.preferences.theme="light";
    console.log(copyuser1)
    copyuser1.preferences.language="hindi"
     console.log(copyuser1)



    // 2. Change:
    //       i. name in the copied object
    
    //       ii. preferences.theme in the copied object
    //       iii .Log both original and copied objects
    //       iv. Observe what changes and what doesn’t
    const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };

// 🎯 Task:
//       1. Create a deep copy of order
let copyorder=structuredClone(order)
order.customer.address.city="kerala"
order.items[0].price=80000
console.log(order)
console.log(copyorder)
//       2. Modify in copied object:
//             i. customer.address.city
//             ii. items[0].price
//             iii. Verify original object remains unchanged
