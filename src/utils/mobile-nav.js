const mobileNav = () => {
    const headerBtn = document.querySelector('.header__bars')
    const mobileNav = document.querySelector('.mobile-nav')
    const mobileLinks = document.querySelectorAll('.mobile-nav__link')

    let isMobileNavOpen = false;

    headerBtn.addEventListener('click', () => {
        if (isMobileNavOpen == false){
             mobileNav.style.display = 'flex';
            document.body.style.overflowY = 'hidden'
            isMobileNavOpen = true;
        }
        else{
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto'
            isMobileNavOpen = false;
        }
       
    })

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.style.display = 'none';
        document.body.style.overflowY = 'auto'
        isMobileNavOpen = false;
        })
    })
}

export default mobileNav;