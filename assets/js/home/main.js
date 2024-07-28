import PhotoSwipeLightbox from 'photoswipe/lightbox';

const lightbox = new PhotoSwipeLightbox({
    gallery: '#ps-gallery--home',
    children: 'a.artLink',
    pswpModule: () => import('photoswipe'),
});
lightbox.init();

document.querySelectorAll('.artFigure').forEach(artFigure => {
    const artLinks = artFigure.querySelectorAll('.artLink');
    const len = artLinks.length - 1;
    var index = 0;

    function updateDOM() {
        artLinks.forEach(al => al.removeAttribute('visible'));
        artLinks[index].setAttribute('visible', '');

        artFigure.querySelector('.index').innerHTML =
            `${index + 1} / ${len + 1}`;
    }
    updateDOM();

    artFigure
        .querySelector('.galleryButtons button.right')
        .addEventListener('click', () => {
            index += 1;
            if (index > len) index = 0;
            updateDOM();
        });
    artFigure
        .querySelector('.galleryButtons button.left')
        .addEventListener('click', () => {
            index -= 1;
            if (index < 0) index = len;
            updateDOM();
        });
});
