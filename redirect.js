var redirectButton = document.createElement('button');
redirectButton.id = "redirect-button";
redirectButton.innerHTML = "Redirect to dmu/events";
redirectButton.className = "btn btn-primary btn-redirect";

var inputUrl = document.querySelector('input');

redirectButton.addEventListener('click', function () {
    const tagUrl = inputUrl.value;
    // const tagId = document.getElementById('tag_id').value;
    const tagId = 3;

    const redirectBase = "https://google.com";
    const finalUrl = `${redirectBase}?tagId=${tagId}&tagUrl=${tagUrl}`;
    location.href = finalUrl;
});

insertAfter(redirectButton, inputUrl);

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
