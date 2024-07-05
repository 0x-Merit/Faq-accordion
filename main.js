const accordionBtns = document.querySelectorAll('.accordion-btn');

accordionBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        btn.classList.toggle('active');

        const accordionDescription = btn.nextElementSibling;
        const plusIcon = btn.querySelector('.plus-btn');
        const minusIcon = btn.querySelector('.minus-btn');

        if (accordionDescription.style.maxHeight) {
            accordionDescription.style.maxHeight = null;
            plusIcon.style.display = 'block';
            minusIcon.style.display = 'none';
        } else {
            accordionDescription.style.maxHeight = accordionDescription.scrollHeight + 'px';
            plusIcon.style.display = 'none';
            minusIcon.style.display = 'block';
        }
    });
});
