// login
let login_flag = false;
let loginBtn = document.querySelector('#loginBtn');
let memberBtn = document.querySelector('#memberBtn');

// hover Menu
let firstLayer_flag = false;
let secondLayer_flag = false;
let thirdLayer_flag = false;

const exploreDropdown = document.querySelector('.exploreDropdown');
const programMenu = document.querySelector(".dropdown-exploreMenu .firstLayer .open");
const codeFEMenu = document.querySelector(".dropdown-exploreMenu .secondLayer .open");
const programItem = document.querySelector(".codeMenu");
const FEItem = document.querySelector(".frontEndMenu");



programMenu.addEventListener("mouseenter", () => {
    programItem.classList.remove("d-none");
    firstLayer_flag = true;

});

programItem.addEventListener("mouseenter", () => {
    programItem.classList.remove("d-none");
    programMenu.classList.add("text-bg-primary");
    secondLayer_flag = true
})

codeFEMenu.addEventListener("mouseenter", () => {
    FEItem.classList.remove("d-none");
    secondLayer_flag = true
})

FEItem.addEventListener("mouseenter", () => {
    FEItem.classList.remove("d-none");
    codeFEMenu.classList.add("text-bg-primary");
    thirdLayer_flag = true
});

programMenu.addEventListener("mouseleave", () => {
    setTimeout(() => {
        if (!secondLayer_flag) {
            programItem.classList.add("d-none")
            programMenu.classList.remove("text-bg-primary");
        }
    }, 300)
    if (secondLayer_flag) programItem.classList.remove("d-none");
});

codeFEMenu.addEventListener("mouseleave", () => {
    setTimeout(() => {
        if (!thirdLayer_flag) {
            FEItem.classList.add("d-none")
            codeFEMenu.classList.remove("text-bg-primary");
            thirdLayer_flag = false
        }
    }, 300)
    if (thirdLayer_flag) FEItem.classList.remove("d-none");
});


FEItem.addEventListener("mouseleave", () => {
    thirdLayer_flag = false
    FEItem.classList.add("d-none")
    codeFEMenu.classList.remove("text-bg-primary");
});


exploreDropdown.addEventListener("hide.bs.dropdown", () => {
    // console.log(1);
    firstLayer_flag = false;
    secondLayer_flag = false;
    thirdLayer_flag = false;
    programItem.classList.add("d-none");
    FEItem.classList.add("d-none");
    programMenu.classList.remove("text-bg-primary");
    codeFEMenu.classList.remove("text-bg-primary");
});
