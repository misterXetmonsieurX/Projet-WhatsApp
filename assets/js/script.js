
// *********    Affichage du Sous-menu paramètres*****************

const elipsisMenu = document.querySelector('.elipsis_submenu');
const elipsisSubmenuItems = document.querySelectorAll('.elipsis_submenu li');
const elipsisBtn = document.querySelector('.left_home_icons .fa-ellipsis-vertical');

elipsisBtn.addEventListener('click', () => {
    elipsisMenu.classList.toggle('showElipsis');
})

// **********   Masquer le sous menu au clic en dehors de lui *********
document.addEventListener('mouseup',(e) => {
    if(e.target !== elipsisMenu){
        elipsisMenu.classList.remove('showElipsis')
    };
})

// *********    Création d'une fonction pour coulissser  *****************
function coulisser(Ouverture, fermeture, fenetre){
    Ouverture.addEventListener("click", () =>{
        fenetre.style = "transform: translateX(0%)"
    })
    fermeture.addEventListener("click", () =>{
        fenetre.style = "transform: translateX(-100%)"
    })

}

// *********    Affichage Section profil de l'utilisateur *****************
const profilSection = document.querySelector('.user_profile_section');
const profilPicture = document.querySelector('.left_home_head .user_profile_pict');
const userSectionBackToHomeBtn = document.querySelector('.user_profile_section .fa-arrow-left');
coulisser(profilPicture, userSectionBackToHomeBtn, profilSection);

// *********    Affichage Paramètres *****************
const parametresSection = document.querySelector('.parametres');
const elipsisSubmenu = document.querySelector('.elipsis_submenu');
const parametreCommande = document.querySelector('.elipsis_submenu .parameters');
const parametreSectionBackToHomeBtn = document.querySelector('.parametres .fa-arrow-left');
coulisser(parametreCommande, parametreSectionBackToHomeBtn, parametresSection);

// *********    Affichage Section Nouvelle discussion *****************
const newDiscussionSection = document.querySelector('.new_discussion');
const newDiscussionIcon = document.querySelector('.left_home_icons .fa-message-lines');
const newDiscussionSectionBackToHomeBtn = document.querySelector('.new_discussion .fa-arrow-left');
coulisser(newDiscussionIcon, newDiscussionSectionBackToHomeBtn, newDiscussionSection);

// *********    Affichage de la section étiquettes *****************
const etiqbtn = document.querySelector('.left_home_icons .fa-circle-dashed');
const etiqSection = document.querySelector('.etiquettes');
const etiqBackToHomeBtn = document.querySelector('.etiquettes .section_head .fa-arrow-left');
coulisser(etiqbtn, etiqBackToHomeBtn, etiqSection);

// *********    Affichage du modal de déconnexion *****************
const deconnexion = document.querySelector('.elipsis_submenu .deconnexion');
const modalClose = document.querySelectorAll('.logout_modal .modal_bottons button');
const modalWindow = document.querySelector('.logout_modal');
deconnexion.addEventListener('click', () => {
    modalWindow.style.display = "flex"
})

modalClose.forEach((item) => {
    item.addEventListener("click", () => {
        modalWindow.style.display = "none"
    });
})

// *********    Ouverture d'une discussion *****************
const chat = document.querySelector('.right_home_container .right_home_chat');
const userChat = document.querySelectorAll('.discussion_list_wrapper li a')

userChat.forEach((item) => {
    item.addEventListener('click', () => {
        chat.style = "transform: translateX(0%)"
    });
})

// *********    Comportement responsive de la liste de discussion à partir de 768px  *****************
const leftSideWindow = document.querySelector('.content_left');
userChat.forEach((item) => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            leftSideWindow.style = "display: none"
        }
    });
})

// Responsive affichage du volet gauche

const showLeftSideBtn = document.querySelectorAll('.mobile_menu_icon .voletG');

showLeftSideBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        leftSideWindow.style.display = "block";
    })
})
