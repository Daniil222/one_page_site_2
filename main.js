window.onload = () => {
    
    const burgerBtn = document.querySelector('.check-menu');
    const burger = document.querySelector('.burger');
    const slider = document.querySelectorAll('.slider-first img, .slider-second img');

    burgerBtn.addEventListener('click', () => {
        burger.classList.toggle("active");
    })

    slider.forEach( item => {
        item.addEventListener('click', (e) => {
            window.scrollTo({
                top: e.pageY + 40,
                behavior: 'smooth'
            })
        })
    })
}