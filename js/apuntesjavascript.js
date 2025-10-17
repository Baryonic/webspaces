//keday electronics
/* buenos dias  */

alert("welcome to javascript master v0.1")

generica = 10;

//APUNTES


function suma() 
{ 
var a = parseFloat(document.getElementById('num1').value); 
var b = parseFloat(document.getElementById('num2').value); 
document.getElementById('resultado').value = a + b; 
let par = "SOME VALUE"; // Replace `someValue` with an actual value or logic
var resul = par
seFloat(document.getElementById('resultado').value);  
alert( "El primer numero es: " + a + "\nEl segundo numero es: " + 
b + "\nLa suma de los dos es: " + resul ) 
}
function f01()
{
var interna = 20;
alert('valor de interna = ' + interna + 'valor de generica = ' + generica);
}
function arrayf(){
    var mivector = new Array(); 
    mivector = ['coche','moto','avion'];   
    mivector[3] = 'amarillo';
    mivector[4] = 'verde';
    mivector[5] = 'azul';
    mivector[6] = 'rojo';
    var matriz = new Array();
    var fila1= new Array();
    fila1=[1,2,3]
    matriz=[[fila1],[2,1,3],[1,3,2]]
    matriz.forEach(function (elemento,índice,array){
        console.log(elemento, índice);
     })
    mivector.push('barco');
    //vemos el resultado en la consola
    console.log(mivector);
    //mivector.pop();
    //mivector.shift();
    mivector.shift();
    /*
    unshift: Nos permite agregar un elemento al inicio del vector.
    mivector.unshift('triciclo');
    indexOf: Devuelve el índice de un elemento dentro de un vector. Si el elemento buscado no existe nos devolverá -1.
    mivector.indexOf('moto'); //devuelve 1 (los índices de vectores empiezan en 0)
    splice: Nos permite eliminar el elemento que deseemos indicando el índice del mismo y la cantidad de elementos a eliminar en el segundo parámetro.
    mivector.splice(1,1); //borrara el elemento moto
    */
}
function f02(){
    var mivector = ["coche","moto","avión"];
    console.log("vector original"+mivector);
    mivector.push("barco");
    mivector.unshift("triciclo");
    console.log("vector con dos elementos más"+mivector);
    mivector.splice(mivector.indexOf("moto"),1);
    mivector.forEach(function (elemento,índice,array){
        console.log(elemento, índice);
        });
    var a = 10;
    var b = 20;
    var suma = eval("a + b");
    console.log(suma);
    var mivar;
    if(mivar === undefined){
        console.log("variable no definicdsa");
    }else{
        console.log("variable definida");
    }
    var cadena = "console.log";
    eval(cadena + '("eval(console.log(eval()))")');
}
function f03(){
    contador = 10;
    contador++;
    contador = 10;
    contador--;
    contador = 10;
    contador = -contador;
    contador = 10;
    contador2 = contador++;
    contador = 10;
    contador2 = ++contador;
    if (3 > 4) {
        console.log("f03.1()")   
    } else if (4 > 2){
        console.log("f03.2()")   
    } else if (8 == 8){
        console.log("f03.3()")   
    }else{
        console.log("f03.4()")
    }
    switch (document.getElementById('campo1').value) {
        case "str1":
            alert('La salud y los negocios no son lo tuyo esta semana');
            break;
        case "str2":
            alert('En el ámbito laboral aparecerá una oportunidad difícil de rechazar');
            break;
        case "str3":
            alert('Cuídate un poco más, o enfermarás este invierno');
            break;
        case "str4":
            alert('En lo personal deja que los amigos te aconsejen');
            break;
        case "str5":
            alert('Todo bien… sigue así');
            break;
        case "pateo":
            alert('Mucho trabajo, tomate unas vacaciones. Tu salud te lo agradecerá');
            break;
        default:
            console.log("f03() switch successfull");
    }
    console.log("f03()")
    }
function f04(){
    var valorInicial=1;
    var condición="valorInicial<10";
    var incremento="valorInicial++";
    for (valorInicial; eval(condición); eval(incremento)){
        console.log(valorInicial);
    }
    for (i = 1; i < 10; i++){
        console.log(i*i);
    }
    i = 0;
    do {
        i += 1;
        console.log(i*i);
    } while (i < 20);
    i = 100;
    while (i > 20) {
        
        console.log(i*i);
        i -= 1;
    }
    for (i = 1; i < 5; i++){
        if (i == 3){
        break; //cuando i valga 3 saldrá del bucle
        }
        console.log(i + '-');
    }
    i = 0;
    while (i < 5) {
        i++;
        if (i == 3)
            continue;
        console.log(i + 'continue');
    }
    //if abreviado
    var mi_variable = (5 > 6) ? "mayor" : "menor";
    console.log(mi_variable+" if abreviado");
    var opciones= new Array();
    opciones = [1,2,"dasf",3,4,5];
    for (x in opciones){
        console.log(opciones[x]);
    }
}

//esta funcion solo recibe un parametro, lo demas se interpreta como argumentos
function miCalculadora(operador) {
    resultado = 0;
        //a partir del argumento 1 en adelante, argumento 0 es la operación
    for (var i = 1; i < arguments.length; i++){
        switch (operador){
        case "+":
            resultado = resultado + parseFloat(arguments[i]);
            break;
        case "-":
            resultado = resultado - parseFloat(arguments[i]);
            break;
        case "*":
            if (resultado == 0) {resultado = 1;} //evitar multiplicar por 0
            resultado = resultado * parseFloat(arguments[i]);
            break;
        }
    }
    return resultado;
}
function f05(){
alert(miCalculadora("+", "6", "23", "1", "67"));
alert(miCalculadora("-", "567", "2", "32", "2"));
alert(miCalculadora("*", "3", "2", "34", "2"));
}
function sumarDatos(dato1,dato2){
	return dato1 + dato2;
}
function f06(){
    console.log("calling f06")
    console.log(sumarDatos(3,4),isNaN(7),isNaN("/"))
    console.log(isNaN(7),"isnan")
    getLocalIPInfo();
    //Execute the functions
    //getPublicIPInfo();
}

function calcula(formulario){
    formulario.resultado.value = eval(formulario.operaciones.value);
}






//____________________________________________________________________________________________________
//____________________________________________________________________________________________________

//objetos

//____________________________________________________________________________________________________
//____________________________________________________________________________________________________

function fobjetos01(){
    console.log("fobjetos 01 working")
    empleado00 = {precioHora:23,horas:6,direccion:{calle:'mayor',numero:2}}
    empleado01 = {precioHora:20,horas:8,direccion:{calle:'nuñez',numero:12}}
    
    console.log(empleado00.precioHora,empleado01.horas)
    
    function empleado(antiguedad, precioHora, horas){
        this.antiguedad = antiguedad;
        this.precioHora = precioHora;
        this.horas = horas;
    }
    
    empleado1 = new empleado('1980',23,6);
    empleado2 = new empleado('1980',20,8);
    
    console.log(empleado1.antiguedad, empleado2.precioHora)
    function direccion(calle, numero, piso){
        this.calle = calle;
        this.piso = piso;
        this.numero = numero;
    }

    function direccion(calle, numero, piso){
        this.calle = calle;
        this.piso = piso;
        this.numero = numero;
    }

    calle_mayor = new direccion('mayor',2,13);
    calle_losalamos = new direccion('los alamos',12,3);

    function empleado(antiguedad, precioHora, horas, direccion){
        this.antiguedad = antiguedad;
        this.precioHora = precioHora;
        this.horas = horas;
        this.direccion = direccion;
    }

    empleado02= new empleado('1980',23,6,calle_mayor);
    empleado03 = new empleado('1980',20,8,calle_losalamos);

    console.log(empleado02.direccion.calle);
    console.log(empleado03.direccion.numero);   

    function car(year , hp, wd){
        this.year = year;
        this.hp = hp;
        this.wd = wd;
    }

    la_kangoo = new car('2009', 89, "fwd");
	
    for (var i in la_kangoo){
	    console.log("kangoo " + i + " = " + la_kangoo[i]);
	    }
    
    la_fiesta = new car();
    la_fiesta.hp = 90;

    console.log(la_fiesta.year,"  ",la_fiesta.hp);
    car.prototype.year=null;
    la_fiesta.year=2013;
    //la_fiesta.prototype.year=null;
    console.log(la_fiesta.year);
    
    
    }

function fobjetos02(){
        function sueldo_mensual(){
            console.log('Sueldo mensual : ' + this.precioHora * this.horas * 30)
        }
        function empleado(antiguedad, precioHora, horas){
            this.antiguedad = antiguedad;
            this.precioHora = precioHora;
            this.horas = horas;
            this.sueldo_mensual = sueldo_mensual;
        }
        
        
        empleado04 = new empleado('1980',23,6);
        empleado04.sueldo_mensual();
    
    }

//____________________________________________________________________________________________________
//____________________________________________________________________________________________________
//  OBJETOS PREDIFINIDOS
//____________________________________________________________________________________________________
//____________________________________________________________________________________________________

function cuerdas() {
    mi_string="curso de JavaScript";
    console.log(mi_string.length," str.length");
    supa_string= mi_string.big()+mi_string.bold()+mi_string.italics()+mi_string.small()+mi_string.strike()+mi_string.sub()+mi_string.sup();
    console.log(mi_string.charAt(3),"str.charAt(3)",mi_string.charCodeAt(3),"str.charCodeAt(3)");
    console.log(mi_string.charCodeAt(9)+" is the UNICODE for letter: "+mi_string.charAt(9));
    console.log(mi_string.indexOf("a"),mi_string.lastIndexOf("a"));
    document.getElementById("fake_console").textContent=supa_string;
    document.getElementById("fake_console_02").textContent=mi_string.link("http://keydayelectronics.atwebpages.com/elementos.html");
    console.log(String.fromCharCode(65,66,67,68,69));
    console.log(mi_string.split(" "),mi_string.substring(2,6),mi_string.substr(2,6));
    mi_string= mi_string.replace("JavaScript","jajaescrips".toUpperCase())
    console.log(mi_string)
}

function numeros(){
    document.getElementById("fake_console_02").textContent=Number.MAX_VALUE;
    a = new Number(3.2);
    console.log(a.toExponential(),a.toFixed());
    b=Math.PI;
    console.log(b.toPrecision(55),"only 49 decimals LOL");
    document.getElementById("fake_console").textContent=b.valueOf(),Math.E,Math.LN2,Math.LOG2E,Math.LN10,Math.LOG10E,Math.SQRT2,Math.SQRT1_2;
    //to finish with content from the html
}

function fechas(){
    ahora = new Date();

    console.log(ahora.getDate(), "ahora.getDate()");
}

function vectores(){
    vector= new Array("elemento1","e2","e3",4);
    vector = vector.concat('gato' , 'guitarra');
    lista = vector.join(' - ');
    console.log(vector,lista);
    console.log(vector.reverse());
    vector = vector.slice(2,3);
    vector.splice(1,2, '1', '2');
    console.log(vector.splice(1,0, '1', '2'));
    console.log(vector);
    vector=vector.sort();
    console.log(vector);

}



//____________________________________________________________________________________________________
//____________________________________________________________________________________________________
//FUNCIONES MOLONAS
//____________________________________________________________________________________________________
//____________________________________________________________________________________________________


// Function to fetch public IP and geolocation
//esta no funciona

async function getPublicIPInfo() {
    try {
      // Fetch public IP information
      fetch('https://ipinfo.io/json?token=demo') // Free endpoint
      .then(response => response.json())
      .then(data => {
          document.getElementById("ip_text_id").textContent = "Your IP: " + data.ip;
          document.getElementById("location_text_id").textContent ="Location: " + data.city + ", " + data.region + ", " + data.country;
      })
      .catch(error => {
          console.error("Error fetching IP info:", error);
      });
      return data
    } catch (error) {
      console.error('Error fetching public IP info:', error);
    }
  }
async function getPublicIPInfo02() {
    try {
        const response = await fetch('https://ipinfo.io/json?token=demo'); // Make sure the URL is correct
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); // Parse the JSON data
        console.log("IP Information:", data); // Log to check the data
        document.getElementById("ip").textContent = "Your IP: " + data.ip;
        document.getElementById("location").textContent = 
            "Location: " + data.city + ", " + data.region + ", " + data.country;
    } catch (error) {
        console.error("Error fetching public IP info:", error); // Log any errors
    }
}

// Call the function, for example, on page load
window.onload = getPublicIPInfo;

  
  // Function to get local IP and device info
function getLocalIPInfo() {
    const localIPInfo = {
      localIP: window.location.hostname, // Gets the local hostname (may represent local IP on some setups)
      systemTime: new Date().toString(), // Retrieves current system time
    };
    console.log('Local IP Info:', localIPInfo);
    return localIPInfo;
  }
  


//____________________________________________________________________________________________________
//____________________________________________________________________________________________________

//finit()

//____________________________________________________________________________________________________
//____________________________________________________________________________________________________


function finit() {
    //getPublicIPInfo();
    //getLocalIPInfo();
    //fobjetos01();
    //SgetPublicIPInfo02();
    //fobjetos02();
    cuerdas();
    numeros();
    fechas();
    vectores();
}


window.onload=console.log("window.onload")
  