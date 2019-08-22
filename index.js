let randomizer = function(array) {
   let total = array.results.length;
   let randNumber = Math.floor(Math.random() * Math.floor(total))
   return randNumber;
}

let returnAll = function(inputQuote, inputAuthor) {
   const totalQuotes = data.results.length;
   for (i = 0; i < totalQuotes; i++) {
       inputQuote.insertAfter(document.createElement('p'));
   }
}

const loginForm = document.getElementById('login-form')
loginForm.addEventListener('submit', e => {
   e.preventDefault();
   const authorSearch = loginForm.querySelector('input[type="text"]').value;
   const quote = document.getElementById('random-quote');
   const author = document.getElementById('author');
   const checkedForAll = document.getElementById("allQuotes").checked;
   fetch(`https://api.quotable.io/quotes?author=${authorSearch}`)
       .then(response => response.json())
       .then(data => {
           if (checkedForAll) {
               data.results.forEach(result => {
                   const newElem = document.createElement('div');
                   newElem.innerHTML = result.content;
                   const ref = document.querySelector('p');
                   ref.parentNode.insertBefore(newElem, ref.nextSibling);
               })
           }
       })
       .catch(error => { quote.innerHTML = "Please try a different search query."; } );
});
