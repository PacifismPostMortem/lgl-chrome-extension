var redirectButton = document.createElement('button');
redirectButton.id = "redirect-button";
redirectButton.innerHTML = "Redirect to dmu.events";
redirectButton.className = "btn btn-primary btn-redirect";

var inputUrl = document.querySelector('input');

redirectButton.addEventListener('click', function () {
    const link = inputUrl.value;
    const formNameDiv = document.getElementById("sub_nav_bar");
    const formNameInnerHTML = formNameDiv.innerHTML;
    const name = formNameInnerHTML.slice(formNameInnerHTML.indexOf("a> ") + 6, formNameInnerHTML.lastIndexOf("\"") );
    const redirectBase = "https://dmu.events/portal";

    const finalUrl = `${redirectBase}?link=${link}&name=${name}`;
    location.href = finalUrl;
});

insertAfter(redirectButton, inputUrl);

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}


