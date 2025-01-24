// accordion
let toggles = document.querySelectorAll('.js-toggle');
if (toggles.length > 0) {
    toggles.forEach((toggle, index) => {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            toggles.forEach(el => {
                el.classList.remove('open');
                // el.querySelector('.js-content').classList.remove('active');
                this.classList.add('open');
                // this.querySelector('.js-content').classList.add('active');
            })
        });
    })
}
