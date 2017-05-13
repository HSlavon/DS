/**
 * Created by Slavon on 13.05.2017.
 */
// форма поиска номеров
var form = document.forms['searchForm'];
var guests = form['guests'];
var rooms = form['rooms'];
guests.min = 1;
guests.max = 8;
var GUESTS_ROOM = 2;

function minAndMaxRooms(roomsElement, guestsNumber) {
    roomsElement.min = Math.ceil(guestsNumber / GUESTS_ROOM);
    roomsElement.max = guestsNumber;

}
guests.value = 2;
minAndMaxRooms(rooms, guests.value);
rooms.value = rooms.min;
guests.onchange = function () {
    minAndMaxRooms(rooms, guests.value);
};

// запись куков
form.onsubmit = function (evt) {
    evt.preventDefault();
    var dateTo = +Date.now() + 3*24*60*60*1000;
    var formatDate = new Date(dateTo).toUTCString();
    document.cookie = 'guests=' + guests.value + ';expires='  + formatDate;
    document.cookie = 'rooms=' + rooms.value + ';expires='  + formatDate;
    form.submit();
};
console.log(document.cookie);