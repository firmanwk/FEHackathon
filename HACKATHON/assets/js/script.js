document.addEventListener("DOMContentLoaded", () => {
    var body = document.getElementsByTagName("body")[0];
    var modalTerm = document.getElementById("modal-term");
    var modalPolicy = document.getElementById("modal-policy");
    var modals = document.getElementById("modals");

    const PopUp = `<div class="pop-up" id="pop-up">
                        <div class="pop-up-title">
                            <h1 class="text-3xl flex justify-center align-center gap-2">
                                <ion-icon name="paper-plane-outline" class="text-3xl"></ion-icon>
                                Message Sent
                            </h1>
                        </div>
                        <div class="pop-up-content">
                            <h4>Messages are successfully sent to Technoscape's Email</h4>
                            <p class="mb-5">Thanks for your concern !</p>
                            <h4>Be free to ask us if you have any question</h4>
                        </div>
                        <div class="pop-up-footer">
                            <div class="flex justify-center gap-2">
                                <button class="btn-primary-outline" id="close-pop-up" onclick="closePopUp()">OK</button>
                            </div>
                        </div>
                    </div>`

    body.classList.add("overflow-hidden");

    modalPolicy.classList.remove('hidden');

    var declineBtnPolicy = document.getElementById('declineBtnPolicy');
    var acceptBtnPolicy = document.getElementById('acceptBtnPolicy');

    declineBtnPolicy.addEventListener('click', function () {
        var parentModalId = this.closest('.modal').id;
        document.getElementById(`${parentModalId}`).classList.add('hidden');
        modalTerm.classList.remove('hidden');
    });

    acceptBtnPolicy.addEventListener('click', function () {
        var parentModalId = this.closest('.modal').id;
        document.getElementById(`${parentModalId}`).classList.add('hidden');
        modalTerm.classList.remove('hidden');
    });

    var declineBtnTerm = document.getElementById('declineBtnTerm');
    var acceptBtnTerm = document.getElementById('acceptBtnTerm');

    declineBtnTerm.addEventListener('click', function () {
        var parentModalId = this.closest('.modal').id;
        document.getElementById(`${parentModalId}`).classList.add('hidden');
        modals.classList.add("hidden");
        body.classList.remove("overflow-hidden");
    });

    acceptBtnTerm.addEventListener('click', function () {
        var parentModalId = this.closest('.modal').id;
        document.getElementById(`${parentModalId}`).classList.add('hidden');
        modals.classList.add("hidden");
        body.classList.remove("overflow-hidden");
    });



    var submitContact = document.getElementById("submit-contact");

    submitContact.addEventListener('click', function () {
        modals.classList.remove("hidden");
        modals.innerHTML += PopUp;
    });
});


function closePopUp(){
    document.getElementById("pop-up").remove();
    modals.classList.add("hidden");
}