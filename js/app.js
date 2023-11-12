// modal redes sociales 
var btnRedSocialF = document.querySelector('#btnRedSocialF');
var btnRedSocialL = document.querySelector('#btnRedSocialL');
var btnRedSocialI = document.querySelector('#btnRedSocialI');
var btnRedSocialW = document.querySelector('#btnRedSocialW');
var btnRedSocialGH = document.querySelector('#btnRedSocialGH');
var btnRedSocialGL = document.querySelector('#btnRedSocialGL');
var btnRedSocialT = document.querySelector('#btnRedSocialT');

var bodyModal = document.querySelector('#bodyModal');
var titleModal = document.querySelector('#exampleModalLabel');
var footerModal = document.querySelector('#footerModal');


btnRedSocialF.onclick = () => RedSocial('Facebook', 'QRFacebook.png', 'primary', 'www.facebook.com/Erk.MF/');

btnRedSocialL.onclick = () => RedSocial('Linkedin', 'QRLinkedin.png', 'info', 'www.linkedin.com/in/erick-madrigal-flores-2788301a7/');

btnRedSocialI.onclick = () => RedSocial('Instagram', 'QRInstagram.png', 'danger', 'www.instagram.com/erkmadrigal/');

btnRedSocialW.onclick = () => RedSocial('WhatsApp', 'QRwhatsApp.png', 'success', 'wa.link/7wteo2');

btnRedSocialGH.onclick = () => RedSocial('GitHub', 'QRGitHub.png', 'dark', 'github.com/ErkThay');

btnRedSocialGL.onclick = () => RedSocial('GitLab', 'QRGitLab.png', 'danger', 'gitlab.com/ErkMAd');

btnRedSocialT.onclick = () => RedSocial('Telegram', 'QRTelegram.png', 'info', 'https://web.telegram.org/#/im');

const RedSocial = (title, img, color, url) => {
    titleModal.innerHTML = `<b class='text-${color}'>${title}</b>`;
    bodyModal.innerHTML = `<div class="text-center">
    <img style="width: 61vh;" src="img/RedSocial/${img}" class="img-fluid" alt="${img}">
    <br><hr>
    <a class='text-${color}' href='https://${url}' target='_blank'>${url}</a>
    </div>`;
    footerModal.innerHTML = `<button type="button" class="btn btn-${color}" data-dismiss="modal">Close</button>`;

};
// end modal redes sociales

// cambio de color Logo

var logoCambioColor = document.querySelector('#logoCambioColor');


var arriba = document.querySelector('#arriba');
var izquierda = document.querySelector('#izquierda');
var derecha = document.querySelector('#derecha');
var abajo = document.querySelector('#abajo');
var oscuro = document.querySelector('#oscuro');
var ligero = document.querySelector('#abajo');


arriba.onclick = () => cambioMenu("arriba");
izquierda.onclick = () => cambioMenu("izquierda");
derecha.onclick = () => cambioMenu("derecha");
abajo.onclick = () => cambioMenu("abajo");
oscuro.onclick = () => cambioTema("oscuro");
ligero.onclick = () => cambioTema("ligero");

var cambioColor1 = document.querySelector('#cambioColor1');
var cambioColor2 = document.querySelector('#cambioColor2');
var cambioColor3 = document.querySelector('#cambioColor3');
var cambioColor4 = document.querySelector('#cambioColor4');
var cambioColor5 = document.querySelector('#cambioColor5');
var cambioColor6 = document.querySelector('#cambioColor6');

cambioColor1.onclick = () => cambioColorIcono("#25ca7f");
cambioColor2.onclick = () => cambioColorIcono("#00a3e1");
cambioColor3.onclick = () => cambioColorIcono("#d94c48");
cambioColor4.onclick = () => cambioColorIcono("#bb68c8");
cambioColor5.onclick = () => cambioColorIcono("#0dcdbd");
cambioColor6.onclick = () => cambioColorIcono("#eae328");


const cambioColorIcono = (color) => {
    localStorage.setItem("erkPortalcolor", color);


    logoCambioColor.innerHTML = `
    
    <?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <svg width="65px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65" version="1.1" height="65px">
    <defs>
    <linearGradient id="lg" y1="26.924%" x2="28.129%" x1="54.638%" y2="79.519%">
    <stop stop-color="#fff" stop-opacity="0" offset="0"/>
    <stop stop-color="#fff" stop-opacity=".27451" offset="1"/>
    </linearGradient>
        </defs>
        <path d="m32.253 0.20991c-2.849 6.9843-4.579 11.559-7.75 18.336 1.944 2.061 4.334 4.453 8.211 7.164-4.168-1.715-7.009-3.432-9.133-5.219-4.059 8.47-10.423 20.531-23.328 43.719 10.14-5.854 18.002-9.466 25.328-10.844-0.314-1.351-0.481-2.819-0.469-4.344l0.008-0.32c0.161-6.498 3.542-11.495 7.547-11.156 4.004 0.339 7.122 5.884 6.961 12.383-0.031 1.224-0.173 2.4-0.414 3.492 7.247 1.418 15.034 5.013 25.039 10.789-1.973-3.632-3.74-6.905-5.422-10.024-2.649-2.053-5.411-4.724-11.047-7.617 3.874 1.007 6.65 2.171 8.812 3.469-17.098-31.835-18.48-36.068-24.343-49.828v-0.00009z" 
        fill="${color}"/>
        <path id="path2522" fill-opacity=".16568" fill="#fff" d="m50.266 38.249c-13.872-18.827-17.087-34.002-17.902-37.625 7.4 17.067 7.349 17.277 17.902 37.625z"/>
        <path d="m32.378 0.45992c-0.36 0.88448-0.7 1.7468-1.032 2.5625-0.364 0.8946-0.718 1.7565-1.062 2.5938s-0.693 1.6309-1.031 2.4375c-0.339 0.8065-0.654 1.6039-1 2.4063-0.346 0.802-0.726 1.613-1.094 2.437-0.368 0.825-0.752 1.658-1.156 2.532-0.404 0.873-0.828 1.801-1.282 2.75-0.061 0.128-0.124 0.276-0.187 0.406 1.939 2.054 4.33 4.427 8.187 7.125-4.167-1.715-7-3.432-9.125-5.219-0.11 0.226-0.198 0.425-0.312 0.656-0.42 0.871-0.871 1.733-1.344 2.688-0.113 0.224-0.196 0.427-0.312 0.656-0.501 1.004-1.026 2.043-1.594 3.156-0.113 0.22-0.228 0.402-0.344 0.625-0.343 0.667-1.44 2.77-2.562 4.907-0.655 1.248-1.169 2.27-1.907 3.656-0.209 0.398-0.639 1.195-0.75 1.406 8.125-4.573 16.891-11.216 32.813-5.531-0.797-1.51-1.562-2.919-2.25-4.25-0.688-1.332-1.312-2.571-1.906-3.75s-1.143-2.291-1.657-3.344c-0.513-1.053-0.989-2.047-1.437-3s-0.885-1.87-1.281-2.75c-0.397-0.879-0.766-1.73-1.125-2.562-0.359-0.833-0.695-1.658-1.032-2.469-0.336-0.8115-0.672-1.5896-1-2.4063-0.142-0.3554-0.263-0.7338-0.406-1.0938-0.888-2.0849-1.759-4.1515-2.812-6.625v0.00002z" fill="url(#lg)"/>
    </svg>

    `;
}

const cambioMenu = (position) => {
    localStorage.setItem("erkPortalMenu", position);
}

const cambioTema = (color) => {
    localStorage.setItem("erkPortalTema", color);
}

cambioColorIcono(localStorage.getItem("erkPortalcolor"));

// end cambio de color Logo

//años de desarrollo

var dateDesarrollo = document.querySelector('#dateDesarrollo');
var anioActual = new Date;

dateDesarrollo.innerHTML = `${anioActual.getFullYear() - 2019} años trabajando`;

//end años de desarrollo

// Login

var log = document.querySelector('#log');

log.ondblclick = () => location.href = "login.html";

// end login

// color portal

const colorPortal = (color) => {
    const colores = {
        color_25ca7f: document.querySelector('#cambioColor1'),
        color_00a3e1: document.querySelector('#cambioColor2'),
        color_d94c48: document.querySelector('#cambioColor3'),
        color_bb68c8: document.querySelector('#cambioColor4'),
        color_0dcdbd: document.querySelector('#cambioColor5'),
        color_eae328: document.querySelector('#cambioColor6'),
    }
    let resColor = colores[color]
    resColor.addEventListener("click", function() {
        console.log("He cambiado el Fondo.");
    });
    setTimeout(function() {
        resColor.click();
    }, 500)   
}

colorPortal("color_"+localStorage.getItem("erkPortalcolor").slice(1))
//end color portal

// Menu portal
const positionMenuPortal = (position) => {
    const positions = {
        arriba: document.querySelector('#arriba'),
        izquierda: document.querySelector('#izquierda'),
        derecha: document.querySelector('#derecha'),
        abajo: document.querySelector('#abajo'),
    }
    let resPosition = positions[position]
    resPosition.addEventListener("click", function() {
        console.log("He cambiado el menu");
    });
    setTimeout(function() {
        resPosition.click();
    }, 500)   
}

positionMenuPortal(localStorage.getItem("erkPortalMenu"))
// end menu portal

// Menu portal
const temaPortal = (color) => {
    const temas = {
        oscuro: document.querySelector('#oscuro'),
        ligero: document.querySelector('#ligero'),
    }
    let rescolor = temas[color]
    rescolor.addEventListener("click", function() {
        console.log("He cambiado el Tema");
    });
    setTimeout(function() {
        rescolor.click();
    }, 500)   
}

temaPortal(localStorage.getItem("erkPortalTema"))
// end menu portal