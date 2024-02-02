document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('sort').addEventListener("change", (e) => {
        const order = e.target.value;
        var container = document.getElementById('data');

        var items = container.querySelectorAll('#item');

        var sortedItems = Array.from(items).sort((a, b) => {
            var textA = a.querySelector('#item-name').textContent.toUpperCase();
            var textB = b.querySelector('#item-name').textContent.toUpperCase();

            if (order === 'asc') {
                return textA.localeCompare(textB);
            } else if (order === 'desc') {
                return textB.localeCompare(textA);
            }
        });

        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        sortedItems.forEach(item => {
            container.appendChild(item);
        });
    })

    document.getElementById('search-key').addEventListener("change", (e) => {

        var searchQuery = e.target.value.toLowerCase();

        var container = document.getElementById('data');

        var items = container.querySelectorAll('#item');

        items.forEach(item => {
            var nameText = item.querySelector('#item-name').textContent.toLowerCase();
            if (nameText.includes(searchQuery)) {
                console.log("found")
                item.classList.remove('hidden')
                item.classList.add('flex');
            } else {
                item.classList.remove('flex')
                item.classList.add('hidden');
            }
        });
    })

});


function toggleDropdown(current, target) {
    var dropdownContent = document.getElementById(`${target}`);
    dropdownContent.classList.contains('hidden') ? dropdownContent.classList.remove('hidden') : dropdownContent.classList.add('hidden');
}

function toggleDropdown2(span) {
    var dropdownContent = span.nextElementSibling;
    if (dropdownContent.classList.contains('dropdown-content')) {
        dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
    }
}

function toggleDropdownEdit(span) {
    console.log(span.parentNode)
    var dropdownContent = "";
    if (span.parentNode.id === "edit-close") {
        dropdownContent = span.parentNode.parentNode.nextElementSibling;
        span.parentNode.nextElementSibling.classList.remove('hidden')
        span.parentNode.classList.add('hidden')
        span.parentNode.classList.remove('flex')
        if (dropdownContent.classList.contains('dropdown-content')) {
            dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
        }
    }
    else {
        dropdownContent = span.parentNode.parentNode.nextElementSibling;
        span.parentNode.previousElementSibling.classList.remove('hidden')
        span.parentNode.classList.add('hidden')
        span.parentNode.classList.remove('flex')
        if (dropdownContent.classList.contains('dropdown-content')) {
            dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
        }
    }
}

function findParentDivWithId(element, id) {
    var parent = element.parentNode.parentNode;
    while (parent) {
        if (parent.tagName === 'DIV' && parent.id === id) {
            return parent;
        }
        console.log(parent)
        parent = parent.parentNode;
    }
    return null;
}

