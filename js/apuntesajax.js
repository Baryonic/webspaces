
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
                var caja = document.getElementById("caja");
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