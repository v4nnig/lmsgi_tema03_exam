function gestionarQuestion001(e){var t=e.getElementsByTagName("title")[0].innerHTML,n=[],o=e.getElementById("question001").getElementsByTagName("option").length;for(i=0;i<o;i++)n[i]=e.getElementById("question001").getElementsByTagName("option")[i].innerHTML;ponerDatosQuestion001(t,n),respuestaQuestion001=parseInt(e.getElementById("question001").getElementsByTagName("answer")[0].innerHTML,10)}function gestionarQuestion002(e){var t=e.getElementsByTagName("title")[1].innerHTML;ponerDatosQuestion002(t),respuestaQuestion002=e.getElementById("question002").getElementsByTagName("answer")[0].innerHTML}function gestionarQuestion003(e){var t=e.getElementsByTagName("title")[2].innerHTML,n=[],o=e.getElementById("question003").getElementsByTagName("option").length;for(i=0;i<o;i++)n[i]=e.getElementById("question003").getElementsByTagName("option")[i].innerHTML;ponerDatosQuestion003(t,n),respuestaQuestion003=parseInt(e.getElementById("question003").getElementsByTagName("answer")[0].innerHTML,10)}function gestionarQuestion004(e){var t=e.getElementsByTagName("title")[3].innerHTML,n=[],o=e.getElementById("question004").getElementsByTagName("option").length;for(i=0;i<o;i++)n[i]=e.getElementById("question004").getElementsByTagName("option")[i].innerHTML;ponerDatosQuestion004(t,n),respuestaQuestion004=e.getElementById("question004").getElementsByTagName("answer")}function gestionarQuestion005(e){var t=e.getElementsByTagName("title")[4].innerHTML,n=[],o=e.getElementById("question005").getElementsByTagName("option").length;for(i=0;i<o;i++)n[i]=e.getElementById("question005").getElementsByTagName("option")[i].innerHTML;ponerDatosQuestion005(t,n),respuestaQuestion005=e.getElementById("question005").getElementsByTagName("answer")}function gestionarQuestion006(e){var t=e.getElementsByTagName("title")[5].innerHTML;ponerDatosQuestion006(t),respuestaQuestion006=e.getElementById("question006").getElementsByTagName("answer")[0].innerHTML}function gestionarQuestion007(e){var t=e.getElementsByTagName("title")[6].innerHTML,n=[],o=e.getElementById("question007").getElementsByTagName("option").length;for(i=0;i<o;i++)n[i]=e.getElementById("question007").getElementsByTagName("option")[i].innerHTML;ponerDatosQuestion007(t,n),respuestaQuestion007=parseInt(e.getElementById("question007").getElementsByTagName("answer")[0].innerHTML,10)}function gestionarQuestion008(e){var t=e.getElementsByTagName("title")[7].innerHTML,n=[],o=e.getElementById("question008").getElementsByTagName("option").length;for(i=0;i<o;i++)n[i]=e.getElementById("question008").getElementsByTagName("option")[i].innerHTML;ponerDatosQuestion008(t,n),respuestaQuestion008=e.getElementById("question008").getElementsByTagName("answer")}function gestionarQuestion009(e){var t=e.getElementsByTagName("title")[8].innerHTML,n=[],o=e.getElementById("question009").getElementsByTagName("option").length;for(i=0;i<o;i++)n[i]=e.getElementById("question009").getElementsByTagName("option")[i].innerHTML;ponerDatosQuestion009(t,n),respuestaQuestion009=parseInt(e.getElementById("question009").getElementsByTagName("answer")[0].innerHTML,10)}function gestionarQuestion010(e){var t=e.getElementsByTagName("title")[9].innerHTML,n=[],o=e.getElementById("question010").getElementsByTagName("option").length;for(i=0;i<o;i++)n[i]=e.getElementById("question010").getElementsByTagName("option")[i].innerHTML;ponerDatosQuestion010(t,n),respuestaQuestion010=e.getElementById("question010").getElementsByTagName("answer")}function corregirQuestion001(){var e=document.getElementById("divQuestion001").getElementsByTagName("input");for(i=0;i<e.length;i++){if(e[i].checked){if(i==respuestaQuestion001-1){darRespuestaHtml("P1: Correcto!"),nota+=1;break}darRespuestaHtml("P1: Respuesta Incorrecta");break}if(i==e.length-1)return darRespuestaHtml("P1: Respuesta Incorrecta"),console.log("P1: no se la seleccionado nada"),!1}return!0}function corregirQuestion002(){var e=formElement.elements,t=e.entradaQuestion002.value;if(t==respuestaQuestion002)darRespuestaHtml("P2: Correcto!"),nota+=1;else{if(""==t)return darRespuestaHtml("P2: Respuesta Incorrecta"),console.log("P2: no se ha seleccionado nada"),!1;darRespuestaHtml("P2: Respuesta Incorrecta")}return!0}function corregirQuestion003(){var e=formElement.elements.namedItem("selQuestion003");if(e.selectedIndex==respuestaQuestion003)darRespuestaHtml("P3: Correcto!"),nota+=1;else{if(0==e.selectedIndex)return darRespuestaHtml("P3: Respuesta Incorrecta"),console.log("P3: no se ha seleccionado nada"),!1;darRespuestaHtml("P3: Respuesta Incorrecta")}return!0}function corregirQuestion004(){for(var e=document.getElementById("divQuestion004").getElementsByTagName("option"),t=0,n=0;n<e.length;n++)if(e[n].selected&&0!=n){t+=1;for(var i=0;i<respuestaQuestion004.length;i++){if(e[n].value==parseInt(respuestaQuestion004[i].innerHTML,10)){nota+=1/respuestaQuestion004.length,darRespuestaHtml("P4: "+n+" Correcta!");break}i==respuestaQuestion004.length-1&&(nota-=1/respuestaQuestion004.length,darRespuestaHtml("P4: "+n+" Respuesta Incorrecta"))}}return 0!=t||(darRespuestaHtml("P4: Respuesta Incorrecta "),console.log("P4: no se ha seleccionado nada"),!1)}function corregirQuestion005(){for(var e=document.getElementById("divQuestion005").getElementsByTagName("input"),t=0,n=0;n<e.length;n++)if(e[n].checked){t+=1;for(var i=0;i<respuestaQuestion005.length;i++){if(e[n].value==parseInt(respuestaQuestion005[i].innerHTML,10)){nota+=1/respuestaQuestion005.length,darRespuestaHtml("P5: "+n+" Correcta!");break}i==respuestaQuestion005.length-1&&(nota-=1/respuestaQuestion005.length,darRespuestaHtml("P5: "+n+" Respuesta Incorrecta"))}}return 0!=t||(darRespuestaHtml("P5: Respuesta Incorrecta "),console.log("P5: no se ha seleccionado nada"),!1)}function corregirQuestion006(){var e=formElement.elements,t=e.entradaQuestion006.value;if(t==respuestaQuestion006)darRespuestaHtml("P6: Correcto!"),nota+=1;else{if(""==t)return darRespuestaHtml("P6: Respuesta Incorrecta"),console.log("P6: no se ha seleccionado nada"),!1;darRespuestaHtml("P6: Respuesta Incorrecta")}return!0}function corregirQuestion007(){var e=formElement.elements.namedItem("selQuestion007");if(e.selectedIndex==respuestaQuestion007)darRespuestaHtml("P7: Correcto!"),nota+=1;else{if(0==e.selectedIndex)return darRespuestaHtml("P7: Respuesta Incorrecta"),console.log("P7: no se ha seleccionado nada"),!1;darRespuestaHtml("P7: Respuesta Incorrecta")}return!0}function corregirQuestion008(){for(var e=document.getElementById("divQuestion008").getElementsByTagName("input"),t=0,n=0;n<e.length;n++)if(e[n].checked){t+=1;for(var i=0;i<respuestaQuestion008.length;i++){if(e[n].value==parseInt(respuestaQuestion008[i].innerHTML,10)){nota+=1/respuestaQuestion008.length,darRespuestaHtml("P8: "+n+" Correcta!");break}i==respuestaQuestion008.length-1&&(nota-=1/respuestaQuestion008.length,darRespuestaHtml("P8: "+n+" Respuesta Incorrecta"))}}return 0!=t||(darRespuestaHtml("P8: Respuesta Incorrecta "),console.log("P8: no se ha seleccionado nada"),!1)}function corregirQuestion009(){var e=document.getElementById("divQuestion009").getElementsByTagName("input");for(i=0;i<e.length;i++){if(e[i].checked){if(i==respuestaQuestion009-1){darRespuestaHtml("P9: Correcto!"),nota+=1;break}darRespuestaHtml("P9: Respuesta Incorrecta");break}if(i==e.length-1)return darRespuestaHtml("P9: Respuesta Incorrecta"),console.log("P9: no se la seleccionado nada"),!1}return!0}function corregirQuestion010(){for(var e=document.getElementById("divQuestion010").getElementsByTagName("option"),t=0,n=0;n<e.length;n++)if(e[n].selected&&0!=n){t+=1;for(var i=0;i<respuestaQuestion010.length;i++){if(e[n].value==parseInt(respuestaQuestion010[i].innerHTML,10)){nota+=1/respuestaQuestion010.length,darRespuestaHtml("P10: "+n+" Correcta!");break}i==respuestaQuestion010.length-1&&(nota-=1/respuestaQuestion010.length,darRespuestaHtml("P10: "+n+" Respuesta Incorrecta"))}}return 0!=t||(darRespuestaHtml("P10: Respuesta Incorrecta "),console.log("P10: no se ha seleccionado nada"),!1)}function ponerDatosQuestion001(e,t){var n=document.getElementById("divQuestion001");for(document.getElementById("question001").innerHTML=e,i=0;i<t.length;i++){var o=document.createElement("input"),s=document.createElement("label");s.innerHTML=t[i],s.setAttribute("for","option_"+i),o.name="optionsQ001",o.type="radio",o.value=i+1,n.appendChild(o),n.appendChild(s),n.appendChild(document.createElement("br"))}}function ponerDatosQuestion002(e){document.getElementById("question002").innerHTML=e}function ponerDatosQuestion003(e,t){document.getElementById("question003").innerHTML=e;var n=document.getElementById("divQuestion003").getElementsByTagName("select")[0];for(i=0;i<t.length;i++){var o=document.createElement("option");o.text=t[i],o.value=i+1,n.options.add(o)}}function ponerDatosQuestion004(e,t){document.getElementById("question004").innerHTML=e;var n=document.getElementById("divQuestion004").getElementsByTagName("select")[0];for(i=0;i<t.length;i++){var o=document.createElement("option");o.text=t[i],o.value=i+1,n.options.add(o)}}function ponerDatosQuestion005(e,t){document.getElementById("question005").innerHTML=e;var n=document.getElementById("divQuestion005");for(i=0;i<t.length;i++){var o=document.createElement("input"),s=document.createElement("label");s.innerHTML=t[i],s.setAttribute("for","option_"+(i+1)),o.name="optionsQ005",o.type="checkbox",o.value=i+1,n.appendChild(o),n.appendChild(s),n.appendChild(document.createElement("br"))}}function ponerDatosQuestion006(e){document.getElementById("question006").innerHTML=e}function ponerDatosQuestion007(e,t){document.getElementById("question007").innerHTML=e;var n=document.getElementById("divQuestion007").getElementsByTagName("select")[0];for(i=0;i<t.length;i++){var o=document.createElement("option");o.text=t[i],o.value=i+1,n.options.add(o)}}function ponerDatosQuestion008(e,t){var n=document.getElementById("divQuestion008");for(document.getElementById("question008").innerHTML=e,i=0;i<t.length;i++){var o=document.createElement("input"),s=document.createElement("label");s.innerHTML=t[i],s.setAttribute("for","option_"+(i+1)),o.name="optionsQ008",o.type="checkbox",o.value=i+1,n.appendChild(o),n.appendChild(s),n.appendChild(document.createElement("br"))}}function ponerDatosQuestion009(e,t){var n=document.getElementById("divQuestion009");for(document.getElementById("question009").innerHTML=e,i=0;i<t.length;i++){var o=document.createElement("input"),s=document.createElement("label");s.innerHTML=t[i],s.setAttribute("for","option_"+i),o.name="optionsQ009",o.type="radio",o.value=i+1,n.appendChild(o),n.appendChild(s),n.appendChild(document.createElement("br"))}}function ponerDatosQuestion010(e,t){document.getElementById("question010").innerHTML=e;var n=document.getElementById("divQuestion010").getElementsByTagName("select")[0];for(i=0;i<t.length;i++){var o=document.createElement("option");o.text=t[i],o.value=i+1,n.options.add(o)}}function darRespuestaHtml(e){var t=document.createElement("p"),n=document.createTextNode(e);t.appendChild(n),document.getElementById("resultadosDiv").appendChild(t)}function presentarNota(){darRespuestaHtml("Nota: "+nota+" puntos sobre 10")}function inicializar(){document.getElementById("resultadosDiv").innerHTML="",nota=0}var formElement=null,respuestaQuestion001=null,respuestaQuestion002=null,respuestaQuestion003=null,respuestaQuestion004=null,respuestaQuestion005=null,respuestaQuestion006=null,respuestaQuestion007=null,respuestaQuestion008=null,respuestaQuestion009=null,respuestaQuestion010=null,i=0,nota=0;window.onload=function(){function e(e){var t=e.responseXML;gestionarQuestion001(t),gestionarQuestion002(t),gestionarQuestion003(t),gestionarQuestion004(t),gestionarQuestion005(t),gestionarQuestion006(t),gestionarQuestion007(t),gestionarQuestion008(t),gestionarQuestion009(t),gestionarQuestion010(t)}document.getElementById("openMenu").onclick=function(){var e=document.getElementById("page"),t=document.getElementById("navpage");"hidden"===e.style.visibility?(e.style.visibility="visible",t.style.visibility="hidden"):(e.style.visibility="hidden",t.style.visibility="visible")},formElement=document.getElementById("myform"),formElement.onsubmit=function(){return inicializar(),corregirQuestion001()?corregirQuestion002()?corregirQuestion003()?corregirQuestion004()?corregirQuestion005()?corregirQuestion006()?corregirQuestion007()?corregirQuestion008()?corregirQuestion009()?corregirQuestion010()?(presentarNota(),!1):(alert("P10: seleccionar una opción"),inicializar(),!1):(alert("P9: seleccionar una opción"),inicializar(),!1):(alert("P8: seleccionar una opción"),inicializar(),!1):(alert("P7: seleccionar una opción"),inicializar(),!1):(alert("P6: seleccionar una opción"),inicializar(),!1):(alert("P5: seleccionar una opción"),inicializar(),!1):(alert("P4: seleccionar una opción"),inicializar(),!1):(alert("P3: seleccionar una opción"),inicializar(),!1):(alert("P2: seleccionar una opción"),inicializar(),!1):(alert("P1: seleccionar una opción"),inicializar(),!1)};var t=new XMLHttpRequest;t.onreadystatechange=function(){4==this.readyState&&200==this.status&&e(this)},t.open("GET","xml/questions_xsd.xml",!0),t.send()};