/*function orderpizza(callback)
{   setTimeout(()=>{
    const pizza='🍕';
    callback(pizza);
},2000);
}

function notifymeonsuccess(pizza)
{
    console.log('here is the notification for pizza',pizza);
}
orderpizza(notifymeonsuccess);*/

//callback hell
function getcheese(callback){
    setTimeout(()=>{
        const cheese='🍕';
        console.log("here is cheese", cheese);
        callback(cheese);

    },2000);
}

    function makedough(cheese, callback){
        setTimeout(() => {
            const dough=cheese +"🥮";
            console.log("here is dough", dough);
            callback(dough);
        }, 2000);
    }
  

    function bakepizza(dough,callback){
        setTimeout(()=>{
            const pizza=dough + "🍕";
            console.log("here is the pizza",pizza);
            callback(pizza);
        },2000);
    }

    getcheese((cheese)=>{
        makedough(cheese,(dough)=>{
            bakepizza(dough,(pizza)=>{
                console.log("got my pizza",pizza);
            })
        })
    })