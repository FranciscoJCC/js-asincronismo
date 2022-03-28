let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let URL_API = 'https://rickandmortyapi.com/api/character/';

//Traer información de la API
function fetchData(url_api,callback){
    let xhttp = new XMLHttpRequest();
    
    //Método (GET), Url (API), Asincrono (si => true o no => false)
    xhttp.open('GET',url_api,true);
    //Escuchar lo que hace la conexión
    xhttp.onreadystatechange = function(event){
        //Que se ha completado, 4 = Termino la petición
        if(xhttp.readyState === 4){
            //Retorno los datos correctamente
            if(xhttp.status === 200){
                //El primer parametro es el error, el segundo la respuesta. 
                callback(null, JSON.parse(xhttp.responseText));
            }else{
                //Ocurrio un error en la consulta. 
                const error = new Error('Error' + url_api);
                return callback(error,null);
            }
        }
    }

    xhttp.send();
}


//
fetchData(URL_API, function(error1, data1){
    
    if(error1) return console.log("Error 1: " + error1);

    fetchData(URL_API + data1.results[0].id, function(error2, data2){
        
        if(error2) return console.log(error2);

        fetchData(data2.origin.url, function(error3, data3){
            
            if(error3) return console.log(error3);

            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        })
        /* console.log(data1.info.count);
        console.log(data2.name); */
    })

    /* console.log(data1); */

})
