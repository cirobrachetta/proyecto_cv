//boton introduccion
document.getElementById("b_introduccion").addEventListener("click", function () {
    document.getElementById("sub_titulo").innerHTML = "Presentacion:";
})
document.getElementById("b_introduccion").addEventListener("click", function () {
    document.getElementById("text_principal").innerHTML = "Aspiro a desempeñar labores que, individual y/o grupalmente, impliquen detectar, planificar y/o concretar los objetivos y/o procedimientos requeridos, de manera responsable y autónoma. Deseo que mi futura inserción laboral contemple una capacitación y profesionalización permanente, estimulando el crecimiento personal y/o grupal. Valoro el trabajo en equipo, la comunicación institucional y la atención al público.";
})
document.getElementById("b_introduccion").addEventListener("click", function () {
    document.getElementById("text_principal2").innerHTML = "Si me inclullen en su plantilla les podre brindar efciencia, responsabilidad, orden, y el tiempo que sea necesario para completar cualquier proyecto.";
})
document.getElementById("b_introduccion").addEventListener("click", function () {
    document.getElementById("text_principal3").innerHTML = "";
})
//boton competencias
document.getElementById("b_competencias").addEventListener("click", function () {
    document.getElementById("sub_titulo").innerHTML = "Competencias:";
})
document.getElementById("b_competencias").addEventListener("click", function () {
    document.getElementById("text_principal").innerHTML = "Amplia habilidad y experiencia para la planeacion y organizacion de eventos, simpre dispuesta a tomar puestos de alta responsabilidad.";
})
document.getElementById("b_competencias").addEventListener("click", function () {
    document.getElementById("text_principal2").innerHTML = "Gran adaptavilidad, completa disposicion a aprender y trabajar de cosas nuevas, plenos conosimientos de vairos lenguajes de contavilidad.";
})
document.getElementById("b_competencias").addEventListener("click", function () {
    document.getElementById("text_principal3").innerHTML = "Años de experiencia en liderar y diriguir equipos, asi como tambien manteniendo un ambinte de trabajo limpio y saludable.";
})
//boton experiencia
document.getElementById("b_experiencia").addEventListener("click", function () {
    document.getElementById("sub_titulo").innerHTML = "Experiencia:";
})
document.getElementById("b_experiencia").addEventListener("click", function () {
    document.getElementById("text_principal").innerHTML = "ARDAPEZ: junio 2017- diciembre 2017";
})
document.getElementById("b_experiencia").addEventListener("click", function () {
    document.getElementById("text_principal2").innerHTML = "Posición: Administrativa contable. Sector Proveedores.";
})
document.getElementById("b_experiencia").addEventListener("click", function () {
    document.getElementById("text_principal3").innerHTML = "Tareas desempeñadas: Control impositivo y retenciones de facturas varias. Seguimiento de procesos de stock, presupuesto, compra y facturación de materias primas y/o insumos (Quality Soft). Tareas administrativas y de atención al público, diversas y acordes al sector.";
})
//creo que estoy violando el DRY (don't repeat yourself) :(
document.getElementById("b_formacion").addEventListener("click", function () {
    document.getElementById("sub_titulo").innerHTML = "Formacion:";
})
document.getElementById("b_formacion").addEventListener("click", function () {
    document.getElementById("text_principal").innerHTML = "Universidad Nacional de Mar del Plata- Profesorado de Historia- completa.";
})
document.getElementById("b_formacion").addEventListener("click", function () {
    document.getElementById("text_principal2").innerHTML = "San Nicolás de los Arroyos- Secundario- completo. ";
})
document.getElementById("b_formacion").addEventListener("click", function () {
    document.getElementById("text_principal3").innerHTML = "Inglés: Nivel intermedio. Certificado Laboratorio de Idiomas UNMdP";
})