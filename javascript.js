// const admission = document.getElementById("admission");
// // adding event listener
// admission.addEventListener('click', function(){
//     window.location.href = "admission-form.html";
// });

const buttonsAdmin = document.querySelectorAll(".button-admin");
buttonsAdmin.forEach(button => {
    button.addEventListener('click', function(){
        window.location.href = "admission-form.html";
    })

});