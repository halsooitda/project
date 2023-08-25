document.getElementById("popup_btn").addEventListener("click", () => {
    const popup = document.querySelector(".popup");
    popup.classList.toggle("show");
});

document.getElementById("exit_pop").addEventListener("click", () => {
    const popup = document.querySelector(".popup");
    popup.classList.remove("show");
});

function main() {
    const mainScreen = document.querySelector(".content_container");
    const membershipSection = document.querySelector(".my_membership");

    mainScreen.classList.add("show_main");
    mainScreen.classList.remove("hide_main");
    membershipSection.classList.add("hide_main");
    membershipSection.classList.remove("show_main");
}

function sub() {
    const mainScreen = document.querySelector(".content_container");
    const membershipSection = document.querySelector(".my_membership");

    mainScreen.classList.add("hide_main");
    mainScreen.classList.remove("show_main");
    membershipSection.classList.add("show_main");
    membershipSection.classList.remove("hide_main");
}
