//settimeout
function greet(name)
{
    console.log("hello ", name);
}
//console.log("before settimeout");
//setTimeout(greet,3000,'yuvi');
/*const timeoutid=setTimeout(() => {
    greet('yuvi')
}, 3000);
const goodnightid=setTimeout(() => {
    console.log("so jao")
}, 4000);
clearTimeout(timeoutid);
console.log("this is executed before greet"); 
*/

/* setInterval */ 
 let count=0;
 const intervalid=setInterval(increasecount,2000);
 function increasecount(){
    count+=1;
    const date=new Date().toTimeString();
    console.log(date);
    if(count==5)
        {
            clearInterval(intervalid);
        }
 }
 //setInterval(increasecount,2000);
 console.log("another work ");