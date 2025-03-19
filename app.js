let inro = doccument.querySelector('.intro');
let logo = document.querySelector('.logoa');
let logospan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=> {

    setTimeout(()=>{

        logospan.forEach((span, idx) => {
            setTimeout(()=> {
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

        setTimeout(()=> {
            logospan.forEach((span, idx) => {
                setTimeout(()=> {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        }, 2000);

        setTimeout(()=> {
            inro.style.top = '-100vh';
        }, 2300)

    })
})
