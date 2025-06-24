const setupEl = document.getElementById('setup');
const punchlineEl = document.getElementById('punchline');
const button = document.getElementById('new-joke');

function getJoke() {
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(data => {
      console.log(data); 
      setupEl.textContent = data.setup;
      punchlineEl.textContent = data.punchline;
    })
    .catch(error => {
      setupEl.textContent = 'An error occurred.';
      punchlineEl.textContent = '';
      console.error('Error:', error);
    });
}

getJoke();

button.addEventListener('click', getJoke);