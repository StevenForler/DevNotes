const navElement = document.querySelector('nav');
const navPosition = navElement.getBoundingClientRect().top;
const navbarLinks = navElement.querySelectorAll('a');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    navElement.style.top = scrollPosition + 'px';

    navbarLinks.forEach(link => {
        const sectionElement = document.querySelector(link.hash);
        const offset = 10;
        if (scrollPosition + offset > sectionElement.offsetTop && scrollPosition + offset < sectionElement.offsetTop + sectionElement.offsetHeight) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// if (scrollPosition > sectionElement.offsetTop) this part alone will help highlight the sections you're in but it won't remove them as you move into the next section
// && scrollPosition < sectionElement.offsetTop + sectionElement.offsetHeight with this addition it should help move the selection from on section to the next section)