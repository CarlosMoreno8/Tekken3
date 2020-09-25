const cambiaPantalla = (valor) => {

    //Ahora se a que pantalla quiero dirigirme al concatenar fase + valor que viene
    //por parámetro.
    let faseDestino = "fase" + valor;

    //A continuación creo un array con todas fases.
    let arrayFases = ["fase1","fase2","fase3","fase4","fase5"];

    //El siguiente paso es incluir en arrayfases, todas las fases MENOS la de destino, para ello usamos
    //filter.
    arrayFases = arrayFases.filter(val => !faseDestino.includes(val));

    //Primero habilitamos la fase a la que queremos ir

    document.getElementById(faseDestino).style.display = "block";

    //Finalmente deshabilitamos el resto

    for(let pantalla of arrayFases){
        document.getElementById(pantalla).style.display = "none";
    }
}