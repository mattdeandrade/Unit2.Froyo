const froyo={
counter:[0,0,0],
//counts the number of times each flavor has been called in alphabetical order of flavors.
//Example: "2, 1, 0" means that 2 coffee froyos, 1 strawberry froyo, and no vanilla froyos were ordered.
checkout:"",//this string holds the message for the user's order. The function search will take in the order and parse for flavors.
};

function readOrder(order){let message="You have ordered " + order.counter[0] + " coffee, " + order.counter[2] + " strawberry " + order.counter[2] + " vanilla froyos.";
    return message;   
}


froyo.checkout="coffee, vanilla, vanilla, coffee, coffee";
alert(froyo.checkout);

function search(bill){
const order=bill.checkout.split(", ");
for (const flavors in order) {
    if (order[flavors]==="coffee") froyo.counter[0]++;
    if (order[flavors]==="strawberry") froyo.counter[1]++;
    if (order[flavors]==="vanilla") froyo.counter[2]++;
    }
} 
search(froyo);

alert(froyo.counter[0]);

alert(readOrder(froyo));