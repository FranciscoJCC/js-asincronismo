let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;


//Traer información de la API
const fetchData = (url_api) => {

    return new Promise((resolve,reject)=> {

        const xhttp = new XMLHttpRequest();
    
        //Método (GET), Url (API), Asincrono (si => true o no => false)
        xhttp.open('GET',url_api,true);
        //Escuchar lo que hace la conexión
        xhttp.onreadystatechange = (() => {
            //Que se ha completado, 4 = Termino la petición
            if(xhttp.readyState === 4){

                //Retorno los datos correctamente
                (xhttp.status === 200) 
                    ? resolve(JSON.parse(xhttp.responseText)) 
                    : reject(new Error('Error', url_api));
            }
        });
        
        xhttp.send();
    });

}

module.exports = fetchData;