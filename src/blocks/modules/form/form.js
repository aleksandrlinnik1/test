let sectionForm = document.querySelector(".section-form");
let formSub = document.querySelector("#sub");

formSub.addEventListener("click", function() {
    let div = document.createElement('div');
    div.className = "alert";
    div.innerHTML = "<strong>Сообщение отправленно";
    sectionForm.prepend(div);
    setTimeout(() => div.remove(), 1000);
})






