const somethingWillHappen = () => {
    return new Promise((resolve,reject)=> {
        if(true){
            resolve('Done!');
        } else {    
            reject('Failed!');
        }
    }); 
};

// somethingWillHappen()
//     .then(response => console.log(response))
//     .catch(error => console.error(error));

const somethingWillHappen2 = () => {
    return new Promise((resolve,reject)=>{
        if(true){
            setTimeout(()=>{
                resolve('Done 2!')
            }, 3000)
        } else {
            const error2 = new Error('failed 2');
            reject(error2);
        }
    });
};

// somethingWillHappen2()
//     .then(response => console.log(response))
//     .catch(error => console.error(error));


Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('resultados', response)
    })
    .catch(error => {
        console.error(error)
    })