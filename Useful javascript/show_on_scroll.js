
// this function will add visible class to target element after we scroll past the watch element.
function showOnScroll(targetEl, watchEl) {
    elementClassToggle();
    window.addEventListener('scroll', function () {
        elementClassToggle();
    });
    function elementClassToggle() {
        if (watchEl) {
            if (isElementAboveViewport(watchEl)) {
                targetEl.classList.remove('visible');
            } else {
                targetEl.classList.add('visible');
            }
        }
    }
    function isElementAboveViewport(element) {
        var rect = element.getBoundingClientRect();
        return !(rect.bottom < 0);
    }
}



// usage
const watchEl = document.querySelector('.product-single__meta .atc-row');
const targetEl = document.querySelector('.atc-sticky');
showOnScroll(targetEl, watchEl);