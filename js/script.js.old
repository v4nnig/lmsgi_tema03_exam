var formElement = null;
var respuestaQuestion001 = null;
var respuestaQuestion002 = null;
var respuestaQuestion003 = null;
var respuestaQuestion004 = null;
var respuestaQuestion005 = null;
var respuestaQuestion006 = null;
var respuestaQuestion007 = null;
var respuestaQuestion008 = null;
var respuestaQuestion009 = null;
var respuestaQuestion010 = null;
var i = 0;

var nota = 0; //nota de la prueba sobre 10 puntos (hay 10 preguntas)

//**************************************************************************************************** 
//Después de cargar la página (onload) se definen los eventos sobre los elementos entre otras acciones.
window.onload = function() {

    // función para abrir el menú movil

    document.getElementById("openMenu").onclick = function() {

        var page = document.getElementById("page");
        var navpage = document.getElementById("navpage");

        if (page.style.visibility === 'hidden') {
            page.style.visibility = 'visible';
            navpage.style.visibility = 'hidden';
        }
        else {
            page.style.visibility = 'hidden';
            navpage.style.visibility = 'visible';
        }

    };
    // fin función para abrir el menú movil

    //CORREGIR al apretar el botón
    formElement = document.getElementById('myform');
    formElement.onsubmit = function() {
        inicializar();
        // if (comprobar()) {
        // corregirQuestion001();
        // corregirQuestion002();
        // corregirQuestion003();
        // corregirQuestion004();
        // corregirQuestion005();
        // corregirQuestion006();
        // corregirQuestion007();
        // corregirQuestion008();
        // corregirQuestion009();
        // corregirQuestion010();
        // console.log("q1=" + corregirQuestion001());
        // console.log("q2=" + corregirQuestion002());
        // console.log("q3=" + corregirQuestion003());
        // console.log("q4=" + corregirQuestion004());
        // console.log("q5=" + corregirQuestion005());
        // console.log("q6=" + corregirQuestion006());
        // console.log("q7=" + corregirQuestion007());
        // console.log("q8=" + corregirQuestion008());
        // console.log("q9=" + corregirQuestion009());
        // console.log("q10=" + corregirQuestion010());
        if(!corregirQuestion001()) {
            alert("P1: seleccionar una opción");   
            inicializar();
            return false;
        }
        if(!corregirQuestion002()) {
            alert("P2: seleccionar una opción");
            inicializar();
            return false;
        }
        if(!corregirQuestion003()) {
			alert("P3: seleccionar una opción");
            inicializar();
            return false;
        }
        if(!corregirQuestion004()) {
            alert("P4: seleccionar una opción");
            inicializar();
            return false;
        }
        if(!corregirQuestion005()) {
			alert("P5: seleccionar una opción");
            inicializar();
            return false;
        }
        if(!corregirQuestion006()) {
            alert("P6: seleccionar una opción");
            inicializar();
            return false;
        }
        if(!corregirQuestion007()) {
			alert("P7: seleccionar una opción");
            inicializar();
            return false;
        }
        if(!corregirQuestion008()) {
            alert("P8: seleccionar una opción");
            inicializar();
            return false;
        }
        if(!corregirQuestion009()) {
			alert("P9: seleccionar una opción");
            inicializar();
            return false;
        }
        if(!corregirQuestion010()) {
            alert("P10: seleccionar una opción");
            inicializar();
            return false;
        }
        
        presentarNota();
        // } //if(comprobar())

        return false;
    };

    //LEER XML de xml/preguntas.xml
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            gestionarXml(this);
        }
    };
    xhttp.open("GET", "xml/questions_xsd.xml", true);
    xhttp.send();

    //****************************************************************************************************
    // Recuperamos los datos del fichero XML xml/preguntas.xml
    // xmlDOC es el documento leido XML.
    function gestionarXml(dadesXml) {
        var xmlDoc = dadesXml.responseXML; //Parse XML to xmlDoc

        gestionarQuestion001(xmlDoc);
        gestionarQuestion002(xmlDoc);
        gestionarQuestion003(xmlDoc);
        gestionarQuestion004(xmlDoc);
        gestionarQuestion005(xmlDoc);
        gestionarQuestion006(xmlDoc);
        gestionarQuestion007(xmlDoc);
        gestionarQuestion008(xmlDoc);
        gestionarQuestion009(xmlDoc);
        gestionarQuestion010(xmlDoc);

    } // gestionarXml()
}; // windows.onload()

function gestionarQuestion001(xmlDoc) {

    var tituloQuestion001 = xmlDoc.getElementsByTagName("title")[0].innerHTML;
    var opcionesQuestion001 = [];
    var nopt = xmlDoc.getElementById("question001").getElementsByTagName('option').length;
    for (i = 0; i < nopt; i++) {
        opcionesQuestion001[i] = xmlDoc.getElementById("question001").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosQuestion001(tituloQuestion001, opcionesQuestion001);
    respuestaQuestion001 = parseInt(xmlDoc.getElementById("question001").getElementsByTagName("answer")[0].innerHTML, 10);
}

function gestionarQuestion002(xmlDoc) {

    var tituloQuestion002 = xmlDoc.getElementsByTagName("title")[1].innerHTML;
    ponerDatosQuestion002(tituloQuestion002);
    respuestaQuestion002 = xmlDoc.getElementById("question002").getElementsByTagName("answer")[0].innerHTML;
}

function gestionarQuestion003(xmlDoc) {

    var tituloQuestion003 = xmlDoc.getElementsByTagName("title")[2].innerHTML;
    var opcionesQuestion003 = [];
    var nopt = xmlDoc.getElementById("question003").getElementsByTagName('option').length;
    for (i = 0; i < nopt; i++) {
        opcionesQuestion003[i] = xmlDoc.getElementById("question003").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosQuestion003(tituloQuestion003, opcionesQuestion003);
    respuestaQuestion003 = parseInt(xmlDoc.getElementById("question003").getElementsByTagName("answer")[0].innerHTML, 10);
}

function gestionarQuestion004(xmlDoc) {

    var tituloQuestion004 = xmlDoc.getElementsByTagName("title")[3].innerHTML;
    var opcionesQuestion004 = [];
    var nopt = xmlDoc.getElementById("question004").getElementsByTagName('option').length;
    for (i = 0; i < nopt; i++) {
        opcionesQuestion004[i] = xmlDoc.getElementById("question004").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosQuestion004(tituloQuestion004, opcionesQuestion004);
    respuestaQuestion004 = xmlDoc.getElementById("question004").getElementsByTagName("answer");

}

function gestionarQuestion005(xmlDoc) {
    var tituloQuestion005 = xmlDoc.getElementsByTagName("title")[4].innerHTML;
    var opcionesQuestion005 = [];
    var nopt = xmlDoc.getElementById("question005").getElementsByTagName('option').length;
    for (i = 0; i < nopt; i++) {
        opcionesQuestion005[i] = xmlDoc.getElementById("question005").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosQuestion005(tituloQuestion005, opcionesQuestion005);
    respuestaQuestion005 = xmlDoc.getElementById("question005").getElementsByTagName("answer");
}

function gestionarQuestion006(xmlDoc) {

    var tituloQuestion006 = xmlDoc.getElementsByTagName("title")[5].innerHTML;
    ponerDatosQuestion006(tituloQuestion006);
    respuestaQuestion006 = xmlDoc.getElementById("question006").getElementsByTagName("answer")[0].innerHTML;
}

function gestionarQuestion007(xmlDoc) {

    var tituloQuestion007 = xmlDoc.getElementsByTagName("title")[6].innerHTML;
    var opcionesQuestion007 = [];
    var nopt = xmlDoc.getElementById("question007").getElementsByTagName('option').length;
    for (i = 0; i < nopt; i++) {
        opcionesQuestion007[i] = xmlDoc.getElementById("question007").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosQuestion007(tituloQuestion007, opcionesQuestion007);
    respuestaQuestion007 = parseInt(xmlDoc.getElementById("question007").getElementsByTagName("answer")[0].innerHTML, 10);
}


function gestionarQuestion008(xmlDoc) {
    var tituloQuestion008 = xmlDoc.getElementsByTagName("title")[7].innerHTML;
    var opcionesQuestion008 = [];
    var nopt = xmlDoc.getElementById("question008").getElementsByTagName('option').length;
    for (i = 0; i < nopt; i++) {
        opcionesQuestion008[i] = xmlDoc.getElementById("question008").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosQuestion008(tituloQuestion008, opcionesQuestion008);
    respuestaQuestion008 = xmlDoc.getElementById("question008").getElementsByTagName("answer");
}

function gestionarQuestion009(xmlDoc) {

    var tituloQuestion009 = xmlDoc.getElementsByTagName("title")[8].innerHTML;
    var opcionesQuestion009 = [];
    var nopt = xmlDoc.getElementById("question009").getElementsByTagName('option').length;
    for (i = 0; i < nopt; i++) {
        opcionesQuestion009[i] = xmlDoc.getElementById("question009").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosQuestion009(tituloQuestion009, opcionesQuestion009);
    respuestaQuestion009 = parseInt(xmlDoc.getElementById("question009").getElementsByTagName("answer")[0].innerHTML, 10);
}

function gestionarQuestion010(xmlDoc) {

    var tituloQuestion010 = xmlDoc.getElementsByTagName("title")[9].innerHTML;
    var opcionesQuestion010 = [];
    var nopt = xmlDoc.getElementById("question010").getElementsByTagName('option').length;
    for (i = 0; i < nopt; i++) {
        opcionesQuestion010[i] = xmlDoc.getElementById("question010").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosQuestion010(tituloQuestion010, opcionesQuestion010);
    respuestaQuestion010 = xmlDoc.getElementById("question010").getElementsByTagName("answer");
}


//****************************************************************************************************
//implementación de la corrección

function corregirQuestion001() { //radio
    var opt = document.getElementById("divQuestion001").getElementsByTagName("input");
    for (i = 0; i < opt.length; i++) {
        if (opt[i].checked) {
            if (i == respuestaQuestion001 - 1) {
                darRespuestaHtml("P1: Correcto!");
                nota += 1;
                break;
            }
            else {
                darRespuestaHtml("P1: Respuesta Incorrecta");
                break;
            }
        }
        else if (i == opt.length - 1) { // evalua si es el ultimo ciclo del loop
            darRespuestaHtml("P1: Respuesta Incorrecta");
            console.log("P1: no se la seleccionado nada");
            return false;
        }
    }
    return true;
} // corregirQuestion001()


function corregirQuestion002() {

    var inputs = formElement.elements;

    var txt = inputs["entradaQuestion002"].value;

    if (txt == respuestaQuestion002) {
        darRespuestaHtml("P2: Correcto!");
        nota += 1;
    }
    else if (txt != "") {
        darRespuestaHtml("P2: Respuesta Incorrecta");
    }
    else {
        darRespuestaHtml("P2: Respuesta Incorrecta");
        console.log("P2: no se ha seleccionado nada");
        return false;
    }
    return true;
} // corregirQuestion002()

function corregirQuestion003() {
    var sel = formElement.elements.namedItem("selQuestion003");
    if (sel.selectedIndex == respuestaQuestion003) { //-1 porque hemos puesto una opción por defecto en el select que ocupa la posición 0
        darRespuestaHtml("P3: Correcto!");
        nota += 1;
    }
    else if (sel.selectedIndex != 0) darRespuestaHtml("P3: Respuesta Incorrecta");
    else {
        darRespuestaHtml("P3: Respuesta Incorrecta");
        console.log("P3: no se ha seleccionado nada");
        return false;
    }
    return true;
} // corregirQuestion003()

function corregirQuestion004() {
    var opt = document.getElementById("divQuestion004").getElementsByTagName("option");
    var selected = 0;
    for (var i = 0; i < opt.length; i++) {
        if (opt[i].selected && i != 0) {
            selected = selected + 1;
            for (var j = 0; j < respuestaQuestion004.length; j++) {
                if (opt[i].value == parseInt(respuestaQuestion004[j].innerHTML, 10)) {
                    nota += 1.0 / respuestaQuestion004.length;
                    darRespuestaHtml("P4: " + i + " Correcta!");
                    break;
                }
                else if (j == respuestaQuestion004.length - 1) {
                    nota -= 1.0 / respuestaQuestion004.length;
                    darRespuestaHtml("P4: " + i + " Respuesta Incorrecta");
                }
            }
        }
    }
    if (selected == 0) {
        darRespuestaHtml("P4: Respuesta Incorrecta ");
        console.log("P4: no se ha seleccionado nada");
        return false;
    }
    return true;

} // corregirQuestion004()

function corregirQuestion005() { //checkbox
    var opt = document.getElementById("divQuestion005").getElementsByTagName("input");
    var checked = 0;
    for (var i = 0; i < opt.length; i++) {
        if (opt[i].checked) {
            checked = checked + 1;
            for (var j = 0; j < respuestaQuestion005.length; j++) {
                if (opt[i].value == parseInt(respuestaQuestion005[j].innerHTML, 10)) {
                    nota += 1.0 / respuestaQuestion005.length;
                    darRespuestaHtml("P5: " + i + " Correcta!");
                    break;
                }
                else if (j == respuestaQuestion005.length - 1) {
                    nota -= 1.0 / respuestaQuestion005.length;
                    darRespuestaHtml("P5: " + i + " Respuesta Incorrecta");
                }
            }
        }
    }
    if (checked == 0) {
        darRespuestaHtml("P5: Respuesta Incorrecta ");
        console.log("P5: no se ha seleccionado nada");
        return false;
    }
    return true;

} // corregirQuestion005()


function corregirQuestion006() { //text

    var inputs = formElement.elements;
    var txt = inputs["entradaQuestion006"].value;

    if (txt == respuestaQuestion006) {
        darRespuestaHtml("P6: Correcto!");
        nota += 1;
    }
    else if (txt != "") {
        darRespuestaHtml("P6: Respuesta Incorrecta");
    }
    else {
        darRespuestaHtml("P6: Respuesta Incorrecta");
        console.log("P6: no se ha seleccionado nada");
        return false;
    }
    return true;
} // corregirQuestion006()

function corregirQuestion007() { //select
    var sel = formElement.elements.namedItem("selQuestion007");
    if (sel.selectedIndex == respuestaQuestion007) { //-1 porque hemos puesto una opción por defecto en el select que ocupa la posición 0
        darRespuestaHtml("P7: Correcto!");
        nota += 1;
    }
    else if (sel.selectedIndex != 0) darRespuestaHtml("P7: Respuesta Incorrecta");
    else {
        darRespuestaHtml("P7: Respuesta Incorrecta");
        console.log("P7: no se ha seleccionado nada");
        return false;
    }
    return true;
} // corregirQuestion007()

function corregirQuestion008() { //checkbox
    var opt = document.getElementById("divQuestion008").getElementsByTagName("input");
    var checked = 0;
    for (var i = 0; i < opt.length; i++) {
        if (opt[i].checked) {
            checked = checked + 1;
            for (var j = 0; j < respuestaQuestion008.length; j++) {
                if (opt[i].value == parseInt(respuestaQuestion008[j].innerHTML, 10)) {
                    nota += 1.0 / respuestaQuestion008.length;
                    darRespuestaHtml("P8: " + i + " Correcta!");
                    break;
                }
                else if (j == respuestaQuestion008.length - 1) {
                    nota -= 1.0 / respuestaQuestion008.length;
                    darRespuestaHtml("P8: " + i + " Respuesta Incorrecta");
                }
            }
        }
    }
    if (checked == 0) {
        darRespuestaHtml("P8: Respuesta Incorrecta ");
        console.log("P8: no se ha seleccionado nada");
        return false;
    }
    return true;

} // corregirQuestion008()

function corregirQuestion009() { //radio
    var opt = document.getElementById("divQuestion009").getElementsByTagName("input");
    for (i = 0; i < opt.length; i++) {
        if (opt[i].checked) {
            if (i == respuestaQuestion009 - 1) {
                darRespuestaHtml("P9: Correcto!");
                nota += 1;
                break;
            }
            else {
                darRespuestaHtml("P9: Respuesta Incorrecta");
                break;
            }
        }
        else if (i == opt.length - 1) { // evalua si es el ultimo ciclo del loop
            darRespuestaHtml("P9: Respuesta Incorrecta");
            console.log("P9: no se la seleccionado nada");
            return false;
        }
    }
    return true;

} // corregirQuestion009()


function corregirQuestion010() { //multiple
    var opt = document.getElementById("divQuestion010").getElementsByTagName("option");
    var selected = 0;
    for (var i = 0; i < opt.length; i++) {
        if (opt[i].selected && i != 0) {
            selected = selected + 1;
            for (var j = 0; j < respuestaQuestion010.length; j++) {
                if (opt[i].value == parseInt(respuestaQuestion010[j].innerHTML, 10)) {
                    nota += 1.0 / respuestaQuestion010.length;
                    darRespuestaHtml("P10: " + i + " Correcta!");
                    break;
                }
                else if (j == respuestaQuestion010.length - 1) {
                    nota -= 1.0 / respuestaQuestion010.length;
                    darRespuestaHtml("P10: " + i + " Respuesta Incorrecta");
                }
            }
        }
    }
    if (selected == 0) {
        darRespuestaHtml("P10: Respuesta Incorrecta ");
        console.log("P10: no se ha seleccionado nada");
        return false;
    }
     return true;
} // corregirQuestion010()


//****************************************************************************************************
// poner los datos recibios en el HTML

function ponerDatosQuestion001(t, opt) {
    var divQuestion001 = document.getElementById('divQuestion001');
    document.getElementById('question001').innerHTML = t;
    for (i = 0; i < opt.length; i++) {
        var input = document.createElement("input");
        var label = document.createElement("label");
        label.innerHTML = opt[i];
        label.setAttribute("for", "option_" + i);
        input.name = "optionsQ001";
        input.type = "radio";
        input.value = i + 1;
        divQuestion001.appendChild(input);
        divQuestion001.appendChild(label);
        divQuestion001.appendChild(document.createElement("br"));
    }
}

function ponerDatosQuestion002(t) {
    document.getElementById("question002").innerHTML = t;
}

function ponerDatosQuestion003(t, opt) {
    document.getElementById("question003").innerHTML = t;
    var select = document.getElementById("divQuestion003").getElementsByTagName("select")[0];
    for (i = 0; i < opt.length; i++) {
        var option = document.createElement("option");
        option.text = opt[i];
        option.value = i + 1;
        select.options.add(option);
    }
}

function ponerDatosQuestion004(t, opt) {
    document.getElementById("question004").innerHTML = t;
    var select = document.getElementById("divQuestion004").getElementsByTagName("select")[0];
    for (i = 0; i < opt.length; i++) {
        var option = document.createElement("option");
        option.text = opt[i];
        option.value = i + 1;
        select.options.add(option);
    }
}

function ponerDatosQuestion005(t, opt) {
    document.getElementById("question005").innerHTML = t;
    var divQuestion005 = document.getElementById('divQuestion005');
    for (i = 0; i < opt.length; i++) {
        var input = document.createElement("input");
        var label = document.createElement("label");
        label.innerHTML = opt[i];
        label.setAttribute("for", "option_" + (i + 1));
        input.name = "optionsQ005";
        input.type = "checkbox";
        input.value = i + 1;
        divQuestion005.appendChild(input);
        divQuestion005.appendChild(label);
        divQuestion005.appendChild(document.createElement("br"));
    }
}


function ponerDatosQuestion006(t) {
    document.getElementById("question006").innerHTML = t;
}


function ponerDatosQuestion007(t, opt) {
    document.getElementById("question007").innerHTML = t;
    var select = document.getElementById("divQuestion007").getElementsByTagName("select")[0];
    for (i = 0; i < opt.length; i++) {
        var option = document.createElement("option");
        option.text = opt[i];
        option.value = i + 1;
        select.options.add(option);
    }
}

function ponerDatosQuestion008(t, opt) {
    var divQuestion008 = document.getElementById('divQuestion008');
    document.getElementById("question008").innerHTML = t;
    for (i = 0; i < opt.length; i++) {
        var input = document.createElement("input");
        var label = document.createElement("label");
        label.innerHTML = opt[i];
        label.setAttribute("for", "option_" + (i + 1));
        input.name = "optionsQ008";
        input.type = "checkbox";
        input.value = i + 1;
        divQuestion008.appendChild(input);
        divQuestion008.appendChild(label);
        divQuestion008.appendChild(document.createElement("br"));
    }
}

function ponerDatosQuestion009(t, opt) {
    var divQuestion009 = document.getElementById('divQuestion009');
    document.getElementById('question009').innerHTML = t;
    for (i = 0; i < opt.length; i++) {
        var input = document.createElement("input");
        var label = document.createElement("label");
        label.innerHTML = opt[i];
        label.setAttribute("for", "option_" + i);
        input.name = "optionsQ009";
        input.type = "radio";
        input.value = i + 1;
        divQuestion009.appendChild(input);
        divQuestion009.appendChild(label);
        divQuestion009.appendChild(document.createElement("br"));
    }
}


function ponerDatosQuestion010(t, opt) {
    document.getElementById("question010").innerHTML = t;
    var select = document.getElementById("divQuestion010").getElementsByTagName("select")[0];
    for (i = 0; i < opt.length; i++) {
        var option = document.createElement("option");
        option.text = opt[i];
        option.value = i + 1;
        select.options.add(option);
    }
}


//****************************************************************************************************
//Gestionar la presentación de las respuestas
function darRespuestaHtml(r) {
    var p = document.createElement("p");
    var node = document.createTextNode(r);
    p.appendChild(node);
    document.getElementById('resultadosDiv').appendChild(p);
}

function presentarNota() {
    darRespuestaHtml("Nota: " + nota + " puntos sobre 10");
}

function inicializar() {
    document.getElementById('resultadosDiv').innerHTML = "";
    nota = 0.0;
}


// function comprobar() {

//     return true;
// }




//

