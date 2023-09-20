function scrollToElement(elementSelector, instance = 0){
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if(elements.length > instance){
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoviews({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("Link1");
const link2 = document.getElementById("Link2");
const link3 = document.getElementById("Link3");

Link1.addEventListener('click', () =>{
    scrollToElement('.header');
});

Link2.addEventListener('click', () =>{
    // Scroll to the second element with "header" class
    scrollToElement('.header', 1);
});

Link3.addEventListener('click', () =>{
    scrollToElement('.column');
});