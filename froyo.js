const froyo={
counter:"0,0,0"
//counts the number of times each flavor has been called in alphabetical order of flavors.
//Example: "2, 1, 0" means that 2 coffee froyos, 1 strawberry froyo, and no vanilla froyos were ordered."
};

function readOrder(order){let message="You have ordered " + order.counter[0] + " coffee, " + order.counter[2] + " strawberry " + order.counter[2] + " vanilla froyos";
    return message;   
}

alert(readOrder(froyo));
function search(order){}