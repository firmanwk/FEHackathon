function closeCV() {
    var cv = document.getElementById("cv");
    cv.classList.add("slide-out");

    setTimeout(function () {
        cv.classList.add("hidden");
        cv.classList.remove("slide-out");
    }, 500);
}

function openCV() {
    document.getElementById("card").classList.add("hidden");
    var cv = document.getElementById("cv");
    cv.classList.remove("hidden");
    cv.classList.add("slide-in");
}

function closeCard() {
    var card = document.getElementById("card");
    card.classList.add("slide-out");

    setTimeout(function () {
        card.classList.add("hidden");
        card.classList.remove("slide-out");
    }, 500);
}


function openCard() {
    document.getElementById("cv").classList.add("hidden");
    var card = document.getElementById("card");
    card.classList.remove("hidden");
    card.classList.add("slide-in");
}


function showAlert(button) {
    const modal = `
    <div class="modal-sm rounded-xl" id="modal">
        <div class="modal-title flex justify-end align-center p-1">
            <button type="button" onclick="closeModal()" class="btn-none flex align-center text-dark"><ion-icon name="close" class="text-2xl"></ion-icon></button>
        </div>
        <div class="modal-content p-1">
            <h2 class="text-center mb-5">Are you sure want to sign out?</h2>
            <div class="flex justify-center align-center gap-5">
            <a href="/">
                <button class="btn-primary-outline">Sign Out</button>
            </a>
                <button class="btn-primary">Cancel</button>
            </div>
        </div>
    </div>
    `
    document.querySelector('body').innerHTML += modal
}

function closeModal() {
    document.getElementById('modal').remove()
}