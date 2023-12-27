const voltarTopo = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
};

//EM construção...
const mudarImagem = () => {
    let imagem = document.getElementById("imgTema");

    if (imagem.alt === "Power-Off") {

        imagem.innerHTML = `<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/power-off-button.png" alt="Nova Imagem Escura"/>`;
        imagem.alt = "Nova Imagem Escura";
    } else {
        imagem.innerHTML = `<img width="64" height="64" src="https://img.icons8.com/cotton/64/power-off-button.png" alt="power-off-button"/>`;
        imagem.alt = "Power-Off";
    }
};



//<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/power-off-button.png" alt="power-off-button"/>