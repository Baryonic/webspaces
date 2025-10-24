
function finit(){
    console.log("finit() loaded");
    }

if (window.XMLHttpRequest){ //es mozilla, chrome, safari....
	objRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) { // es internet explorer
	objRequest = new ActiveXObject("Microsoft.XMLHTTP")
}

console.log("objRequest: ", objRequest);

function cargar(numero) {
                var objHttp = null;
                if (window.XMLHttpRequest) {
                    objHttp = new XMLHttpRequest();
                } else if (window.ActiveXObject) {
                    objHttp = new ActiveXObject("Microsoft.XMLHTTP");
                }
                objHttp.open("GET", "../views/texto" + numero + ".html", true);
                objHttp.onreadystatechange = function () {
                    if (objHttp.readyState == 4) {
                        document.getElementById('caja').innerHTML =
                            objHttp.responseText;
                    }
                }
                objHttp.send(null);
            }

function cargarTiempo() {
                //leemos el archivo.
                var caja = document.getElementById("caja2");
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4) {
                        if (this.status == 200) {
                            mostrar(this);
                        } else {
                            caja && (caja.textContent = "Error (" + this.status + ") al cargar tiempo.xml");
                        }
                    }
                };
                xhttp.onerror = function(){
                    caja && (caja.textContent = "Fallo de red al cargar tiempo.xml");
                }
                xhttp.open("GET", "../data/tiempo.xml", true);
                xhttp.send();
                //cargamos usando variables.
                function mostrar(xml) {
                    var i, xmlDoc = xml.responseXML;
                    if (!xmlDoc || !xmlDoc.documentElement) {
                        // Fallback a DOMParser por si el navegador no llena responseXML
                        try {
                            var parser = new DOMParser();
                            xmlDoc = parser.parseFromString(xml.responseText, "text/xml");
                        } catch(e) { xmlDoc = null; }
                    }
                    if (!xmlDoc) { caja && (caja.textContent = "No se pudo parsear el XML"); return; }

                    var nombre = xmlDoc.getElementsByTagName('nombre');
                    var estado = xmlDoc.getElementsByTagName('estado');
                    var max = xmlDoc.getElementsByTagName('maxima');
                    var min = xmlDoc.getElementsByTagName('minima');
                    var out = [];
                    for (i = 0; i < nombre.length; i++) {
                        out.push(
                            "Ciudad: <b>" + (nombre[i].textContent || "") + "</b><br/>" +
                            "Estado del cielo: " + (estado[i].textContent || "") + "<br>" +
                            "Temperatura Máxima: " + (max[i].textContent || "") + "<br>" +
                            "Temperatura Mínima: " + (min[i].textContent || "") + "<br/><br/><br/>"
                        );
                    }
                    caja && (caja.innerHTML = out.join(""));
                }
            }
function cargarEmpleados() {
    var caja = document.getElementById('caja3');
    if (!caja) {
        console.warn("Elemento #caja3 no encontrado");
    }

    var xhr = new XMLHttpRequest();
    var url = '../data/empleados.json';
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                var data;
                try {
                    data = JSON.parse(xhr.responseText);
                } catch (e) {
                    if (caja) caja.textContent = 'Error parseando JSON de empleados.json: ' + e.message;
                    return;
                }
                var out = '';
                if (data && Array.isArray(data.ficha)) {
                    for (var i = 0; i < data.ficha.length; i++) {
                        var f = data.ficha[i] || {};
                        var p = f.parametros || {};
                        out += 'Nombre: <b>' + (f.nombre || '') + '</b><br/>';
                        if (p.edad != null) out += 'Edad: ' + p.edad + '<br/>';
                        if (p.ciudad) out += 'Ciudad: ' + p.ciudad + '<br/>';
                        if (p.profesion) out += 'Profesion: ' + p.profesion + '<br/>';
                        if (p.carnet != null) out += 'Carnet: ' + p.carnet + '<br/>';
                        out += '<br/>';
                    }
                } else {
                    out = 'Estructura de JSON inesperada en empleados.json';
                }
                if (caja) caja.innerHTML = out;
            } else {
                if (caja) caja.textContent = 'Error (' + xhr.status + ') al cargar ' + url;
            }
        }
    };
    xhr.onerror = function() {
        if (caja) caja.textContent = 'Fallo de red al cargar ' + url;
    };
    xhr.send(null);
}           