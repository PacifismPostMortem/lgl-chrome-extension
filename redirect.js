var redirectButton = document.createElement('button');
redirectButton.id = "redirect-button";
redirectButton.innerHTML = "Configure on dmu.events";
redirectButton.className = "btn btn-primary btn-redirect";

var eventDropdown = document.getElementsByName("form[args][lgl_event_id]")[0];

redirectButton.addEventListener("click", function () {
    // Get the URL that contains the form ID
    const dataUrl = eventDropdown.getAttribute("data-url");

    // Extract the form ID from the URL
    const formId = dataUrl.slice(dataUrl.indexOf("forms/") + 6, dataUrl.indexOf("/update"));
    
    // Base for the redirect URL
    const redirectBase = "https://dmu.events/portal";

    // Event name is extracted from the dropdown selected option's text
    const eventName = eventDropdown.options[eventDropdown.selectedIndex].text;
    
    // Final URL to redirect to
    const finalUrl = `${redirectBase}?link=https://secure.lglforms.com/form_engine/s/${formId}&name=${eventName}`;
    
    // Redirect to final URL
    location.href = finalUrl;  
});

// Text underneath the dropdown
var textAfterDropdown = document.getElementsByClassName("lgld-input-sublabel")[0];

// Inserting the button after the explanatory text under the dropdown
insertAfter(redirectButton, textAfterDropdown);

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}