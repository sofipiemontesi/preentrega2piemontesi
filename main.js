const servic = [
    {id:1, nombre:"catering", precio: 100},
    {id:2, nombre:"ambientacion", precio: 30},
    {id:3, nombre:"barra", precio: 40},
    {id:4, nombre:"personal", precio: 10},
    {id:5, nombre:"musica", precio: 10}
]
console.log(servic[1].precio);
console.log((servic[1].precio)*2);
const seleccion = [
    {precio:0}
]
let nombre= prompt("Bienvenido a LA FêTE, ¿Cuál es tu nombre?");
let evento= prompt(`Hola ${nombre}, ¿Cuál será tu evento?`);
let valorFinal= 0;
let invitados= parseInt(prompt(`${nombre}, ¿Cuántos invitados tendrá tu ${evento}?`));
if(invitados<=300){
    alert("Para esa cantidad de invitados debes seleccionar uno de los siguientes sitios: \n1.Bodega Septima. \n2.Bodega Salentein. \n3.Divina Marga. \n4.Bodega Luis S. Correas.");
}else{
    alert("Para esa cantidad de invitados debes seleccionar uno de los siguientes sitios: \n1.Bodega Durigutti. \n2.Finca Martinez. \n3.Bodega Lagarde. \n4.Estancia Atamisque.");
}
//funcion para seleccionar un lugar.
function seleccionLugar(){
    let seleccion= false;
    for (i=1; i<=3; i++){
        let lugar= parseInt(prompt(`${nombre}, ¿En dónde te gustaría realizar tu ${evento}?`));
        if(lugar >0 && lugar < 5){
        alert(`Seleccionaste la opción nº${lugar}`);
        seleccion=true;
        break;
        }else{
            alert("No ha seleccionado ninguna opción.");
        }
    }
    return seleccion;
}
//funcion para contratar un servicio.
function agregarServicio(array, servicio){
    array.push(servicio);
};
//funcion para buscar un servicio.
function buscarServicio(array, busq){
    const busqueda = array.find((servic)=>{
        return servic.nombre.includes(busq);
    })
    return busqueda;
};

let lugarConfirmado= seleccionLugar();
if(lugarConfirmado){
    let menu = prompt("Opciones: \n1-Buscar servicio. \n2-Filtrar servicios por precio. \n3-Ver todos.");
    while (menu != "3") {
        switch (menu) {
            case "1":
                let busqueda = prompt("Buscar servicio");
                console.log(buscarServicio(servic, busqueda));
                break;
            case "2":
                let filtro = prompt ("Filtrar por precio");
                console.log(servic.filter((servic)=> servic.precio<=filtro));
                break;
            case "3":
                console.log(servic);
                break;
            default:
                alert("Opción incorrecta.");
                break;
        }        
        menu = prompt("Opciones: \n1-Buscar servicio. \n2-Filtrar servicios por precio. \n3-Ver todos.");
    };
    let servicios= prompt("¿Qué servicios desea contratar? (Seleccione uno por uno): \n1-Catering.($100/pers) \n2-Ambientación.($30/pers) \n3-Barra.($40/pers) \n4-Personal.($10/pers) \n5-Música.($10/pers) \n6-Buscar. \n0-Finalizar.");
    while(servicios!="0"){
        switch (servicios){
            case "1":    
                agregarServicio(seleccion, {id:1, nombre:"catering", precio: 100});
                console.log(seleccion);
                valorFinal= seleccion.reduce((acumulador, serv) => acumulador + serv.precio, 0);
                break;
            case "2":
                agregarServicio(seleccion, {id:2, nombre:"ambientacion", precio: 30});
                console.log(seleccion);
                valorFinal= seleccion.reduce((acumulador, serv) => acumulador + serv.precio, 0);
                break;
            case "3":
                agregarServicio(seleccion, {id:3, nombre:"barra", precio: 40});
                console.log(seleccion);
                valorFinal= seleccion.reduce((acumulador, serv) => acumulador + serv.precio, 0);
                break;
            case "4":
                agregarServicio(seleccion, {id:4, nombre:"personal", precio: 10});
                console.log(seleccion);
                valorFinal= seleccion.reduce((acumulador, serv) => acumulador + serv.precio, 0);
                break;
            case "5":
                agregarServicio(seleccion, {id:5, nombre:"musica", precio: 10});
                console.log(seleccion);
                valorFinal= seleccion.reduce((acumulador, serv) => acumulador + serv.precio, 0);
                break;
            case "6":
                let busqueda = prompt("Buscar servicio");
                console.log(buscarServicio(servicios, busqueda));
                break;
            default:
                alert("No contamos con ese servicio");
                break;
        }
        servicios= prompt("¿Qué servicios desea contratar? (Seleccione uno por uno): \n1-Catering.($100/pers) \n2-Ambientación.($30/pers) \n3-Barra.($40/pers) \n4-Personal.($10/pers) \n5-Música.($10/pers) \n0-Finalizar.");
    }
    valorFinal= valorFinal*invitados;
    alert(`El valor total de tu evento es $${valorFinal}`);
}else{
    alert("Gracias por su visita.");
}
