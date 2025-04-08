function test(a , b){

    return a + b

}

function testAsync(a , b){

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if(a == 0){
                reject("error");
                return;
            }
            const r =  a + b;
            resolve(r);
    
        }, 1000)

    })

   
}

const result= test(2, 6);
console.log(result);

const promise = testAsync(0, 7);
console.log(promise);
promise
    .then((result) => {console.log("resolved", result)})
    .catch(err => console.log("err", err));

async function callTestAsync(){

    try {
        const result = await testAsync(3,4);
        console.log("resolved", result)
    } catch (error) {
        console.log("err", error)
    }
}
callTestAsync();