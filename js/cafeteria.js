//Variável com o conteúdo inicial cafés para a rolagem dos itens do cardápio
let tp = "#cafes";


document.getElementsByClassName("btn-mobile")[0].onclick = () => {
    document.getElementsByTagName("nav")[0].style.marginLeft = "0px";
};

function closeMenu() {
    document.getElementsByClassName("cat-cardapio")[0].style.backgroundColor = "rgb(196, 112, 34)";
    document.querySelector(".cat-cardapio a").style.color = "white";
    document.querySelector(".cat-cardapio a ion-icon").style.color = "white";
    document.getElementById("bolos").style.display = "none";
}

function mudarItem(cat) {
    switch (cat) {
        case "cafes":
            document.getElementById(cat).style.display = "inline-flex";
            document.getElementById("bolos").style.display = "none";
            trocarSelecao(cat);
            tp = "#cafes";
            break;
        case "bolos":
            document.getElementById(cat).style.display = "inline-flex";
            document.getElementById("cafes").style.display = "none";
            trocarSelecao(cat);
            tp = "#bolos";
            break;
        /*
        case "doces":
            document.getElementById(cat).style.display = "inline-flex";
            document.getElementById("cafes").style.display = "none";
            document.getElementById("bolos").style.display = "none";
            document.getElementById("salgados").style.display = "none";
            document.getElementById("bebidas").style.display = "none";
            trocarSelecao(cat);
        break;
        case "salgados":
            document.getElementById(cat).style.display = "inline-flex";
            document.getElementById("cafes").style.display = "none";
            document.getElementById("doces").style.display = "none";
            document.getElementById("bolos").style.display = "none";
            document.getElementById("bebidas").style.display = "none";
            trocarSelecao(cat);
        break;
        case "bebidas":
            document.getElementById(cat).style.display = "inline-flex";
            document.getElementById("cafes").style.display = "none";
            document.getElementById("doces").style.display = "none";
            document.getElementById("salgados").style.display = "none";
            document.getElementById("bolos").style.display = "none";
            trocarSelecao(cat);
        break;
        */
    }
}

function trocarSelecao(cat) {
    if (cat == 'cafes') {
        document.getElementsByClassName("cat-cardapio")[0].style.backgroundColor = "rgb(196, 112, 34)";
        document.querySelectorAll(".cat-cardapio a")[0].style.color = "white";
        document.querySelectorAll(".cat-cardapio a ion-icon")[0].style.color = "white";
        document.getElementsByClassName("cat-cardapio")[1].style.backgroundColor = "white";
        document.querySelectorAll(".cat-cardapio a")[1].style.color = "#333";
        document.querySelectorAll(".cat-cardapio a ion-icon")[1].style.color = "rgb(196, 112, 34)";
    }
    else {
        document.getElementsByClassName("cat-cardapio")[1].style.backgroundColor = "rgb(196, 112, 34)";
        document.querySelectorAll(".cat-cardapio a")[1].style.color = "white";
        document.querySelectorAll(".cat-cardapio a ion-icon")[1].style.color = "white";
        document.getElementsByClassName("cat-cardapio")[0].style.backgroundColor = "white";
        document.querySelectorAll(".cat-cardapio a")[0].style.color = "#333";
        document.querySelectorAll(".cat-cardapio a ion-icon")[0].style.color = "rgb(196, 112, 34)";
    }/*
    else if (cat == 'doces') {
        document.getElementsByClassName("cat-cardapio")[2].style.backgroundColor = "rgb(196, 112, 34)";
        document.querySelector(".cat-cardapio a").style.color = "white";
        document.querySelector(".cat-cardapio a ion-icon").style.color = "white";
    }
    else if (cat == 'salgados') {
        document.getElementsByClassName("cat-cardapio")[3].style.backgroundColor = "rgb(196, 112, 34)";
        document.querySelector(".cat-cardapio a").style.color = "white";
        document.querySelector(".cat-cardapio a ion-icon").style.color = "white";
    }
    else if (cat == 'bebidas') {
        document.getElementsByClassName("cat-cardapio")[3].style.backgroundColor = "rgb(196, 112, 34)";
        document.querySelector(".cat-cardapio a").style.color = "white";
        document.querySelector(".cat-cardapio a ion-icon").style.color = "white";
    }
    else {
        document.getElementsByClassName("cat-cardapio")[4].style.backgroundColor = "rgb(196, 112, 34)";
        document.querySelector(".cat-cardapio a").style.color = "white";
        document.querySelector(".cat-cardapio a ion-icon").style.color = "white";
    }*/
}

//obter o tamanho da tela e usar apenas a metade
let metadeTela = window.screen.width / 2;
let pos = 0;

//Vamos obter a posição do mouse
document.body.onmousemove = () => {
    let px = window.event.clientX; //Pegar a posição horizontal do mouse

    if (px > metadeTela) {
        if (document.querySelector(tp).style.marginLeft == "-360px") {
            document.querySelector(tp).style.marginLeft = "-360px"
        }
        else {
            document.querySelector(tp).style.marginLeft = pos + "px";
            pos -= 5;
        }
    }
    else {
        if (document.querySelector(tp).style.marginLeft == "15px") {
            document.querySelector(tp).style.marginLeft = "15px"
        }
        else {
            document.querySelector(tp).style.marginLeft = pos + "px";
            pos += 5;
        }

    }

    console.log(document.querySelector("section").style.marginLeft)
}