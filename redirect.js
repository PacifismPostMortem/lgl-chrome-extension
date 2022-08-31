var redirectButton = document.createElement('button');
redirectButton.id = "redirect-button";
redirectButton.innerHTML = "Redirect";

var urlInput = document.getElementById('input_text');

redirectButton.addEventListener('click', function () {
    const tagUrl = urlInput.value;
    // "https://google.com?tagId=<tagId>&<tagUrl>"
    // Get Tag Id here with 
    // const tagId = document.getElementById('tag_id').value;
    const tagId = 3;
    const finalUrl = `https://google.com?tagId=${tagId}&tagUrl=${tagUrl}`;
    location.href = finalUrl;
});

document.querySelector('body').appendChild(redirectButton);