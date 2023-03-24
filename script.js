/*toggle section here  */

let menuIcon = document.querySelector(' #menu-icno');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



/*  scroll strt active here */

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href* = ' + id + ']').classList.add('active');
            });
        };
    });
    /*  sticky  strt here */
    let header = document.querySelectorAll('header');
    header.classList.toggle('sticky', window.scrollY > 100); 

    /* remobe toole icon and navbar */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*scroll reverl sart here */

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    dekay: 200

});

ScrollReveal().reveal('.home-contact', {  orgin: 'top' });
ScrollReveal().reveal('.home-img , .service-container, .protfolio-box, .contact form',  {  orgin: 'bottm' });


               /* mukti tax sadik*/ 

const typed = new Typed('.multi-tax',{
    strings: ['lern to cyber security ' ,'lern to back Site', 'and the block chain '],
    typeSpeed: 50,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});