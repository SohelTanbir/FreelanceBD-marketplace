$(document).ready(function(){

  // fullCalendar
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
     droppable: true,
    editable: true,
  });
  calendar.render();
//   // event show in UI from localStorage
for (var key in localStorage) {
if (typeof localStorage[key] == 'string') {
    // addEvents();
    addEvents(JSON.parse(localStorage[key]));
}
}
// add new event 
function addEvents(event) {
    calendar.addEvent(event, true)
    calendar.render();
}
// place new order
$(".contact-btn").click(function(){

})




})