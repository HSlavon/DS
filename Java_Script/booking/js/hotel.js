/**
 * Created by Slavon on 13.05.2017.
 */
(function () {
    function Hotel(data) {
        this._data = data;
    }

    Hotel.prototype.render = function () {
        var template = document.querySelector('#hotelTemplate');
        this.element = template.content.children[0].cloneNode(true);
        this.element.querySelector('.name').textContent = this._data.name;
        this.element.querySelector('.price').textContent = this._data.price + '$';
        this.element.querySelector('.rating').textContent = 'Rating - ' + this._data.rating;

        var background = new Image();
        background.onload = function () {
            this.element.style.backgroundImage = 'url(\'' + background.src + '\')';
        }.bind(this);
        background.src = '/' + this._data.image;
    };
    window.Hotel = Hotel;
})();