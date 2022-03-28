//Promise 

const somethingWillHappen = () =>{
    return new Promise((resolve,reject) =>{
        if(true){
            resolve('Hey!');
        }else{
            reject('whooops"');
        }
    });
};

const somethingWillHappen2 = () =>{
    return new Promise((resolve,reject) => {
        if(true){
            setTimeout(() => {
                resolve('Hey!');
            }, 3000);
            
        }else{
            const error = new Error("whooops");
            reject(error);
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.log(err));

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.log(err));


Promise.all([somethingWillHappen(),somethingWillHappen2()])
    .then(response => {
        console.log("Array of results", response);
    })
    .catch(err =>{
        console.log(err);
    });