const price = document.getElementById('price');
const cant = document.getElementById('cant');
const categoria = document.getElementById('categoria');

price.addEventListener('click',totalPrice);

function totalPrice()
{
    let porcentaje;

    if (categoria.value == 'student') porcentaje = 0.2;
    else if (categoria.value == 'trainee') porcentaje = 0.5;
    else if (categoria.value == 'junior') porcentaje = 0.85;

    if (cant.value <= 0) total.innerHTML = "Ingrese una cantidad válida"
    else total.innerHTML = "Total a Pagar: $" + 200 * cant.value * porcentaje;
}