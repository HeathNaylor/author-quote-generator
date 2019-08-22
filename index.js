let randomizer = function(array) {
   let total = array.results.length;
   let randNumber = Math.floor(Math.random() * Math.floor(total))
   return randNumber;
}
let returnAll = function(inputQuote, inputAuthor) {
   const totalQuotes = data.results.length;
   for (i = 0; i < totalQuotes; i++) {
       inputQuote.insertAfter(document.createElement('p'));
       // inputQuote.innerHTML = data.results[rand].content;
       // inputAuthor.innerHTML = datad = randomizer(data);
           // quote.innerHTML = data.results[rand].content;
           // author.innerHTML = data.results[rand].author;
   }
}
const loginForm = document.getElementById('login-form')
loginForm.addEventListener('submit', evt => {
   evt.preventDefault();
   const authorSearch = loginForm.querySelector('input[type="text"]').value;
   const quote = document.getElementById('random-quote');
   const author = document.getElementById('author');
   const checkedForAll = document.getElementById("allQuotes").checked;
   console.log(checkedForAll);
   fetch(`https://api.quotable.io/quotes?author=${authorSearch}`)
       .then(response => response.json())
       .then(data => {
           if (checkedForAll == true) {
               // returnAll(quote, author);
               console.log(data.results);
               const newElem = document.createElement('div');
               newElem.innerHTML = '<p>testo!</p>';
               const ref = document.querySelector('p.before');
               insertAfter(newElem, ref);
           }
           // const rand = randomizer(data);
           // quote.innerHTML = data.results[rand].content;
           // author.innerHTML = data.results[rand].author;
       })
       .catch(error => { quote.innerHTML = "Please try a different search query."; } );
});
