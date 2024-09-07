// login
let login_flag = false;
let loginBtn = document.querySelector('#loginBtn');
let memberBtn = document.querySelector('#memberBtn');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log(loginBtn);
    loginBtn.classList.add('d-none');
    memberBtn.classList.remove('d-none');
    memberBtn.classList.add('d-block');
})

// hover Menu

const programMenu = document.querySelector(".dropdown-exploreMenu .firstLayer .open");
const codeFEMenu = document.querySelector(".dropdown-exploreMenu .secondLayer .open");
const programItem = document.querySelector(".codeMenu");
const FEItem = document.querySelector(".frontEndMenu");



programMenu.addEventListener("mouseenter", () => {
    programItem.classList.toggle("d-none");
});

programMenu.addEventListener("mouseleave", () => {
    programItem.classList.toggle("d-none");
});

programItem.addEventListener("mouseenter", () => {
    programItem.classList.toggle("d-none");
})

programItem.addEventListener("mouseleave", () => {
    programItem.classList.toggle("d-none");
});


codeFEMenu.addEventListener("mouseenter", () => {
    FEItem.classList.toggle("d-none");
});

codeFEMenu.addEventListener("mouseleave", () => {
    FEItem.classList.toggle("d-none");
});

// FEItem.addEventListener("mouseenter", () => {
//     FEItem.classList.toggle("d-none");
// })

// FEItem.addEventListener("mouseleave", () => {
//     FEItem.classList.toggle("d-none");
// });