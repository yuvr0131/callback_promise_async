function orderpizza (){
    return new Promise(function (res, rej){
        setTimeout(()=>{
            const isavailable =true;
            if(isavailable)
                {
                    const pizza='🍕';
                    res(pizza);

                }
                else{
                    rej('we do not have pizza');
                }
        },2000);
    })
}
const pizzapromise = orderpizza ();
pizzapromise
    .then((pizza)=>{
        console.log('my pizza',pizza);
    })
    .catch(error=>{
        console.log('error occurred',error);
    })