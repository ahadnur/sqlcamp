window.addEventListener("scroll", function(){
    const header = this.document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

function toggle() {
    const header = this.document.querySelector('header');
    header.classList.toggle('active');

}

// navbar toggler
const toggleShow = document.querySelector('.navUl');
function toggleActive(){
    toggleShow.classList.toggle('show');
}

// Admission FAQ section
const accordianItemHeaders = document.querySelectorAll('.accordian-item-header');

accordianItemHeaders.forEach(accordianItemHeader => {
    accordianItemHeader.addEventListener('click', event => {
        const currentlyActiveAccordianItemHeader = document.querySelector('.accordian-item-header.active');

        if( currentlyActiveAccordianItemHeader && currentlyActiveAccordianItemHeader !== accordianItemHeader ) {
          currentlyActiveAccordianItemHeader.classList.toggle('active');
          currentlyActiveAccordianItemHeader.nextElementSibling.style.maxHeight = 0; 
        }

        accordianItemHeader.classList.toggle('active');
        const accordianItemBody = accordianItemHeader.nextElementSibling;
        if(accordianItemHeader.classList.contains('active')){
            accordianItemBody.style.maxHeight = accordianItemBody.scrollHeight + "px"
        } else {
            accordianItemBody.style.maxHeight = 0;
        }
    })
});