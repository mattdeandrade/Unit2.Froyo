const froyo={
counter:[0,0,0],
//counts the number of times each flavor has been called in alphabetical order of flavors.
//Example: "2, 1, 0" means that 2 coffee froyos, 1 strawberry froyo, and no vanilla froyos were ordered.
checkout:"",//this string holds the message for the user's order. The function search will take in the order and parse for flavors.
};

function readOrder(order){let message="You have ordered " + order.counter[0] + " coffee, " + order.counter[2] + " strawberry " + order.counter[2] + " vanilla froyos.";
    return message;   
}

alert(readOrder(froyo));
froyo.checkout="coffee, coffee, coffee";


function search(order){
    /*const bill=order.checkout; for (let i=0; i<bill.length; i++) if (bill.checkout[i]==="coffee") */ order.counter[0]++; 
}

//search(froyo);

/*alert(froyo.checkout);*/
froyo.counter[0]++;
alert(froyo.counter[0]);