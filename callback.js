function orderpizza(myfunction)
{
    setTimeout(()=>{
        const pizza='🍕';
        myfunction(pizza);
    },2000);
}

function notifymeorsuccess(pizza)
{
console.log("here is my notification for pizza ",pizza);
}

orderpizza(notifymeorsuccess);
console.log('visited jamiri');
console.log('visited tenga haat');