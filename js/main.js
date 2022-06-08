//funcion calcular pesos
function pesos(dolar){
    return dolar*120;
}

//funcion mensaje agradecimiento
function agradecer(){
    alert("Gracias por usar el conversor");
}

//funcion mensaje no ingresa monto
function noIngresa(){
    alert("No ingresaste monto");
}

const dolares=[];
let i=0;
const peso=[];
let k=0;

let dolar=prompt("Ingrese la cantidad de $ en dolares, si desea salir escriba 'ESC'");


if(dolar=="ESC"){
    noIngresa();
}else{
    while(dolar!="ESC"){
        peso[k]=dolar;
        k++;
        alert("Necesita $" + pesos(dolar));

        dolares[i]=pesos(dolar);
        i++;
        
        //condicion de salida
        dolar=prompt("Ingrese la cantidad de $ en dolares, si desea salir escriba 'ESC'");
        
    }
    agradecer();
}

for(let j=0;j<dolares.length;j++){
    console.log("Para US$" + peso[j] + " necesitas $" + dolares[j]);
}

