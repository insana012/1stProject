//função switch 

    function toggleMode () {
    const html = document.documentElement
    html.classList.toggle('light')

    const avatarswitch = document.querySelector("#profile img")
    if(html.classList.contains('light')) {
        avatarswitch.setAttribute("src", "./assets/srgirafales.png")
    } else {
        avatarswitch.setAttribute("src", "./assets/avatar-dark.png")
    }

    const inlinkswitch = document.querySelector("#insta a")
    if(html.classList.contains('light')) {
        inlinkswitch.setAttribute("href", "https://www.instagram.com/sr.girafales/") 
    } else {
        inlinkswitch.setAttribute("href", "https://www.instagram.com/raquelgarciasi") 
    }

    const arroba = document.querySelector("#insta a")
    if(html.classList.contains('light')) {
        arroba.replaceChildren("@sr.girafales") 
    } else {
        arroba.replaceChildren("@raquelgarciasi") 
    }

    const listlink = document.querySelector("#link1")
    if(html.classList.contains('light')) {
        listlink.replaceChildren("loja do sr. girafales") 
    } else {
        listlink.replaceChildren("minha loja")
    }

    const listlink2 = document.querySelector("#link2")
    if(html.classList.contains('light')) {
        listlink2.replaceChildren("catálogo") 
    } else {
        listlink2.replaceChildren("produtos")
    }
    
    const listlink3 = document.querySelector("#link3")
    if(html.classList.contains('light')) {
        listlink3.replaceChildren("sobre nós") 
    } else {
        listlink3.replaceChildren("sobre mim")
    }
    
    const listlink4 = document.querySelector("#link4")
    if(html.classList.contains('light')) {
        listlink4.replaceChildren("Entre em contato") 
    } else {
        listlink4.replaceChildren("dúvidas e sugestões")
    }
}