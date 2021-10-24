const orador = document.getElementById('orador');
const tickets = document.getElementById('tickets');

orador.addEventListener('click',serOrador);
tickets.addEventListener('click',comprarTickets);

function serOrador()
{
    window.location.href = "#ser-orador"
}

function comprarTickets()
{
    window.location.href = "Tickets.html"
}