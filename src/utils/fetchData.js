let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const STATE = {
    'COMPLETED': 4
}

const fetchData = (apiURL) => {
    return new Promise((resolve,reject)=> {
        const xhttp = new XMLHttpRequest();

        xhttp.open('GET',apiURL,true);
        xhttp.onreadystatechange = (event => {
            if(xhttp.readyState === STATE.COMPLETED){
                (xhttp.status === 200)
                ? resolve(JSON.parse(xhttp.responseText))
                : reject(new Error('ha ocurrido un error', apiURL))
            }
        })
        xhttp.send();
    });
}

module.exports = fetchData;