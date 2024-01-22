// JS 문법을 강화 시키는 문법
'user-strict'

// vanilla js
// document.querySelectorAll('.category-button').forEach(button => {
//   button.addEventListener("click", event => {
//     document.querySelector('#active-category-button').removeAttribute('id');
//     button.setAttribute('id', 'active-category-button');
//   })
// })

// jquery js
$('.category-button').each(function(index, value){
  value.addEventListener("click", event => {
    $('#active-category-button').removeAttribute('id');
    document.setAttribute('id', 'active-category-button');
  })
});