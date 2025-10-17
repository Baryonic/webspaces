function finit() { console.log("finit() : Página cargada correctamente."); }
function fbutton_01() { document.write("<p>Texto insertado con document.write</p> <br> <h1>PRESS F5</h1>"); }
function fbutton_02() {
    document.writeln('<div>Texto insertado con <b>document.writeln</b></div>');
    document.writeln('<div>segundo <b>document.writeln</b> en la funcion fbutton_02</div><h1>PRESS F5</h1>');
}
function fbutton_03() {
    var variable = document.createTextNode("esta variable se appendChild al PARRAFO p_01_id <b>doesnt work</b>");
    var parrafo = document.getElementById("p_01_id");
    parrafo.appendChild(variable);
}
function fbutton_04() {
    var vector = document.getElementsByName("texto");
    for (var i = 0; i < vector.length; i++) {
        document.getElementById("p_01_id").appendChild(document.createTextNode(" " + vector[i].value + " "));
    }
}
// aprender a usar createElement correctamente
function fbutton_05() {
    // 1) Creamos el elemento <span>
    var span = document.createElement("p");
    // 2) Le añadimos contenido de texto (también se puede usar span.innerText o span.textContent)
    span.appendChild(document.createTextNode("este es un texto dentro del <p> creado con createElement"));

    // 3) Elegimos dónde insertarlo. Usamos el párrafo con id "p_02_id" que sí existe en la página
    var destino = document.getElementById("p_02_id");
    if (destino) {
        // Opcional: añadir un espacio antes para separar visualmente
        destino.appendChild(document.createTextNode(" "));
        // 4) Insertamos el <span> al final del párrafo
        destino.appendChild(span);

        // Si prefieres insertarlo al principio del párrafo, usar:
        // destino.insertBefore(span, destino.firstChild);
    } else {
        console.warn("Elemento destino #p_02_id no encontrado");
    }
}

// Ejemplo de uso de document.getElementById().insertBefore()
function fbutton_06() {
    // Obtenemos el elemento padre por id
    var parent = document.getElementById("p_02_id");
    if (!parent) {
        console.warn("Elemento destino #p_02_id no encontrado");
        return;
    }

    // Creamos el nuevo nodo que queremos insertar
    var nuevo = document.createElement("span");
    nuevo.textContent = "[insertBefore]";

    // Insertamos el <span> antes del primer hijo de #p_02_id
    // Si #p_02_id no tiene hijos, firstChild es null y no se inserta nada; por eso
    // primero nos aseguramos de manejar el caso normalmente:
    parent.insertBefore(nuevo, parent.firstChild);

    // Opcional: añadimos un espacio justo después para separar del contenido original
    var espacio = document.createTextNode(" ");
    parent.insertBefore(espacio, nuevo.nextSibling);

    // Nota: También se puede insertar al final usando insertBefore con 'null' como referencia
    // parent.insertBefore(nuevo, null); // equivalente a appendChild(nuevo)    
}

function fbutton_07() {
    var elemento = document.getElementById("p_02_id");
    var atributozz = document.createAttribute("atributo");
    atributozz.nodeValue = "valor de mi nuevo atributo";
    elemento.setAttributeNode(atributozz);
    document.getElementById("p_03_id").innerHTML += " " + elemento.getAttribute("atributo");
}
function fbutton_08() {
    // Evitar ejecuciones simultáneas
    if (fbutton_08._running) return;
    fbutton_08._running = true;

    var DURATION_MS = 10000; // 1 segundo
    var start = performance.now();

    // Cursor falso mínimo (no modifica el cursor real)
    var dot = document.createElement("div");
    dot.setAttribute("aria-hidden", "true");
    dot.style.position = "fixed";
    dot.style.width = "8px";
    dot.style.height = "80px";
    dot.style.borderRadius = "50%";
    dot.style.background = "#661144";
    dot.style.pointerEvents = "none";
    dot.style.left = "0px";
    dot.style.top = "0px";
    dot.style.zIndex = "2147483647";
    document.body.appendChild(dot);

    // Movimiento simple horizontal de izquierda a derecha, a mitad de altura
    var y = Math.floor(window.innerHeight / 2);
    var xStart = Math.floor(window.innerWidth * 0.2);
    var xEnd = Math.floor(window.innerWidth * 0.8);

    function dispatchMove(x, y) {
        console.log("fbutton_08(): dispatchMove to", x, y);
        var target = document.elementFromPoint(x, y) || document.body;
        var evt;
        try {
            evt = new MouseEvent("mousemove", {
                bubbles: true,
                cancelable: true,
                view: window,
                clientX: x,
                clientY: y,
                screenX: x,
                screenY: y
            });
        } catch (e) {
            try {
                evt = document.createEvent("MouseEvents");
                evt.initMouseEvent("mousemove", true, true, window, 0, x, y, x, y, false, false, false, false, 0, null);
            } catch (_) {}
        }
        if (evt) target.dispatchEvent(evt);
    }

    function step(now) {
        var t = Math.min(1, (now - start) / DURATION_MS);
        var x = Math.round(xStart + (xEnd - xStart) * t);
        dot.style.left = x + "px";
        dot.style.top = y + "px";
        y=y+1
        dispatchMove(x, y);
        if (t < 1) {
            requestAnimationFrame(step);
        } else {
            if (dot && dot.parentNode) dot.parentNode.removeChild(dot);
            fbutton_08._running = false;
        }
    }

    requestAnimationFrame(step);
}

// Demo: crear un elemento arrastrable con eventos de puntero
function fbutton_09() {
    var box = document.getElementById("draggable_demo");
    if (!box) {
        box = document.createElement("div");
        box.id = "draggable_demo";
        box.textContent = "Drag me";
        // Estilos inline para que funcione sin CSS adicional
        box.style.position = "fixed";
        box.style.left = "100px";
        box.style.top = "100px";
        box.style.width = "120px";
        box.style.height = "120px";
        box.style.display = "flex";
        box.style.alignItems = "center";
        box.style.justifyContent = "center";
        box.style.background = "rgba(87, 18, 87, 0.85)";
        box.style.color = "#fff";
        box.style.borderRadius = "1px";
        box.style.boxShadow = "0 6px 16px rgba(0,0,0,0.2)";
        box.style.userSelect = "none";
        box.style.cursor = "grab";
        box.style.touchAction = "none"; // evita el scroll en táctil durante el drag
        document.body.appendChild(box);
    }

    if (box._dragInit) {
        // Ya inicializado: no añadimos listeners duplicados
        console.log("fbutton_09: Draggable ya inicializado");
        return;
    }
    box._dragInit = true;

    var dragging = false;
    var startX = 0, startY = 0;
    var startLeft = 0, startTop = 0;

    function onPointerDown(e) {
        // Solo botón principal o puntero primario
        if (e.button !== undefined && e.button !== 0) return;
        dragging = true;
        box.style.cursor = "grabbing";
        try { box.setPointerCapture && box.setPointerCapture(e.pointerId); } catch (_) {}
        startX = e.clientX;
        startY = e.clientY;
        var rect = box.getBoundingClientRect();
        startLeft = rect.left;
        startTop = rect.top;
        e.preventDefault();
    }

    function onPointerMove(e) {
        if (!dragging) return;
        var dx = e.clientX - startX;
        var dy = e.clientY - startY;
        box.style.left = Math.round(startLeft + dx) + "px";
        box.style.top = Math.round(startTop + dy) + "px";
    }

    function endDrag(e) {
        if (!dragging) return;
        dragging = false;
        box.style.cursor = "grab";
        try { box.releasePointerCapture && box.releasePointerCapture(e.pointerId); } catch (_) {}
    }

    box.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", endDrag);
    window.addEventListener("pointercancel", endDrag);
}