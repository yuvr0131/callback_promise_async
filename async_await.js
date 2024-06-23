async function  getcheese(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('cheese 🧈');
        }, 1000)
    })
}

async function makedough(cheese)
{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`${cheese} dough 🥚`);
        },2000)
    })
}

async function makepizza (dough){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`${dough} pizza 🍕`);
        },2000)
    })
}

async function orderpizza (){
    try{
        const cheese=await getcheese();
        console.log('now we have', cheese);
        const dough=await makedough(cheese);
        console.log('now we have', dough);
        const pizza=await makepizza(dough);
        console.log('now we have ',pizza);
        return pizza;
    }
    catch(e)
    {
        console.log(e);
    }
}
orderpizza().then ((pizza)=>{
    console.log(pizza);
}).catch(e=>{

});