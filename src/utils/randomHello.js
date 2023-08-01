const genHello = () => {

    const greet = document.querySelector('.hero__title');

    let x = Math.floor(Math.random() * 10 + 1)
    if(x<=7){
        greet.innerHTML = 'Hello and welcome!'
    }
    if(x==8){
        greet.innerHTML = "I'm Batman."
    }
    if(x==9){
        greet.innerHTML ='GOOOOOD MORNING, VIETNAM!'
    }

    if(x==10){
        greet.innerHTML ="What’s kickin’, little chicken?"
    }
}

export default genHello;