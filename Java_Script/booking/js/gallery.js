/**
 * Created by Slavon on 13.05.2017.
 */
(function () {
    var Gallery = function () {
        this.element = document.querySelector('.gallery');
    };
    Gallery.prototype.show = function () {
        this.element.classList.remove('hidden');
    };
    Gallery.prototype.hide = function () {
        this.element.classList.add('hidden');
    };
    window.Gallery = Gallery;
})();