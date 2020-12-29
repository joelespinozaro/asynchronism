const getSomethingAsync = () => {
    return new Promise((resolve,reject)=>{
        (true)
        ? setTimeout(()=>resolve('done async!'), 3000)
        : reject(new Error('error async!'))
    });
};

const doSomethingAsync = async () => {
    const something = await getSomethingAsync()
    console.log(something);
}

console.log('Before');
doSomethingAsync();
console.log('After');


const anotherFunc = async () => {
    try{
        const something = await getSomethingAsync()
        console.log(something);
    }catch (error) {
        console.error(error)
    }
}

console.log('Before 1');
anotherFunc();
console.log('After 1');