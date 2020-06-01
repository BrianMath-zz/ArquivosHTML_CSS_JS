// _3auIg -> classe do <header>

const intervalo = setInterval(()=>{  // A cada 1s realiza o código
    const topo = document.querySelector("._3auIg")  // Constante com o <header>

    if(topo){  // Se o <header> já estiver carregado, continua
        clearInterval(intervalo)
        
        const botao = document.createElement("button")  // Constante com <button> criado aqui
        botao.innerHTML = "2x"  // Seleciona o botão criado dentro do HTML e edita
        botao.classList.add("AudioDuasVezes")  // Adicionar classe ao botão

        botao.addEventListener("click",()=>{
            const audios = document.querySelectorAll("audio");
            audios.forEach((audio)=>{
                audio.playbackRate = 2;
            })
        })

        topo.appendChild(botao)  // Adiciona o botão ao final do <header>        
    }
},1000)
