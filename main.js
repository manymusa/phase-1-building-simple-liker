// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.querySelector('#modal');
const likeGlyph = document.getElementsByClassName('like-glyph');
errorModal.setAttribute('class', 'hidden');

Array.from(likeGlyph, (ele) => {
  ele.addEventListener('click', (e) => {
    mimicServerCall()
    .then(res => {
      if(ele.classList.contains('activated-heart')){
        ele.removeAttribute('class', 'activated-heart')
      }else{
        ele.setAttribute('class', 'activated-heart')
      }
    })
    .catch(err => {
        setTimeout(function (){
          errorModal.setAttribute('class', 'hidden')
        },3000)
        errorModal.removeAttribute('class', 'hidden');
        document.querySelector('#modal-message').textContent = err;
    })
  })
})




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
