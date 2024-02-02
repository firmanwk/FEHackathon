document.addEventListener("DOMContentLoaded", () => {

    function validatePassword(password) {

        let status1 = document.getElementById('status-1');
        let status2 = document.getElementById('status-2');
        let status3 = document.getElementById('status-3');
        let status4 = document.getElementById('status-4');
        let status5 = document.getElementById('status-5');

        // Check if the password length is at least 8 characters
        if (password.length >= 8) {
            status1.classList.add("text-primary")
            const icon = status1.getElementsByTagName("ion-icon")
            icon[0].setAttribute("name", "checkmark")
        }
        else {
            status1.classList.remove("text-primary")
            const icon = status1.getElementsByTagName("ion-icon")
            icon[0].setAttribute("name", "close")
        }

        // Check if the password contains at least one uppercase letter
        if (/[A-Z]/.test(password)) {
            status2.classList.add("text-primary")
            const icon = status2.getElementsByTagName("ion-icon")
            icon[0].setAttribute("name", "checkmark")
        }
        else {
            status2.classList.remove("text-primary")
            const icon = status2.getElementsByTagName("ion-icon")
            icon[0].setAttribute("name", "close")
        }

        // Check if the password contains at least one lowercase letter
        if (/[a-z]/.test(password)) {
            status3.classList.add("text-primary")
            const icon = status3.getElementsByTagName("ion-icon")
            icon[0].setAttribute("name", "checkmark")
        }
        else {
            status3.classList.remove("text-primary")
            const icon = status3.getElementsByTagName("ion-icon")
            icon[0].setAttribute("name", "close")
        }

        // Check if the password contains at least one number
        if (/\d/.test(password)) {
            status4.classList.add("text-primary")
            const icon = status4.getElementsByTagName("ion-icon")
            icon[0].setAttribute("name", "checkmark")
        }
        else {
            status4.classList.remove("text-primary")
            const icon = status4.getElementsByTagName("ion-icon")
            icon[0].setAttribute("name", "close")
        }

        // Check if the password contains at least one symbol
        if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
            status5.classList.add("text-primary")
            const icon = status5.getElementsByTagName("ion-icon")
            icon[0].setAttribute("name", "checkmark")
        }
        else {
            status5.classList.remove("text-primary")
            const icon = status5.getElementsByTagName("ion-icon")
            icon[0].setAttribute("name", "close")
        }

        // If all conditions pass, return true
        return true;
    }

    function matchPassword(password1, password2) {
        document.getElementById("confirm-password-error").innerText = (password1 != password2 ? "Password doesn`t match!" : "")
    }

    document.getElementById("check-password").addEventListener("keyup", (e) => {
        const val = e.target.value;
        validatePassword(val);
    });

    document.getElementById("match-password").addEventListener("keyup", (e) => {
        const password1 = document.getElementById("check-password").value;
        const password2 = e.target.value;
        matchPassword(password1, password2);
    });

    // ================================================================


});

function showAlert(button) {
    const modal = `
    <div class="modal" id="modal">
        <div class="modal-title flex justify-between align-center">
            <div></div>
            <h1 class="text-4xl">Upload File</h1>
            <button type="button" onclick="closeModal('${button.getAttribute("id")}')" class="btn-none flex align-center text-dark"><ion-icon name="close" class="text-4xl"></ion-icon></button>
        </div>
        <div class="modal-content">
            <div class="p-20 border border-primary border-dashed bg-primary/15">
                <label class="flex flex-col align-center justify-center">
                    <ion-icon name="cloud-upload-outline" class="text-primary text-7xl"></ion-icon>
                    <h2 class="text-xl">Drag & drop file or <span class="text-primary font-bold underline">Browse</span></h2>
                    <p class="text-xs">Supported formates : PDF, JPG, JPEG, PNG</p>
                    <input type="file" class="w-full h-full hidden">
                </label>
            </div>
        </div>
        <div class="modal-footer">
            <div class="flex justify-center">
                <button class="btn-primary w-full" id="acceptBtnPolicy" onclick="closeModal('${button.getAttribute("id")}')">Upload File</button>
            </div>
        </div>
    </div>
    `
    document.querySelector('body').innerHTML += modal
}

function closeModal(button) {
    const btn = document.getElementById(button);
    var imageElement = btn.querySelector('img');

    if (imageElement) {
        imageElement.parentNode.removeChild(imageElement);

        const iconFile = `<ion-icon name="document-outline" class="text-2xl"></ion-icon>`

        btn.innerHTML = (iconFile) + " Uploaded";
    }

    document.getElementById('modal').remove()
}