document.getElementById('getJoke').addEventListener('click', fetchJoke);  
document.getElementById('clearJoke').addEventListener('click', clearJoke);  

function fetchJoke() {  
    fetch('https://v2.jokeapi.dev/joke/Any')  
        .then(response => {  
            if (!response.ok) {  
                throw new Error('Network response was not ok');  
            }  
            return response.json();  
        })  
        .then(data => {  
            let jokeText = data.joke || `${data.setup} ... ${data.delivery}`;  
            document.getElementById('joke').textContent = jokeText;  
            document.getElementById('charCount').textContent = jokeText.length;  
        })  
        .catch(error => {  
            document.getElementById('joke').textContent = 'Failed to fetch a joke. Please try again.';  
            document.getElementById('charCount').textContent = '0';  
            console.error('There was a problem with the fetch operation:', error);  
        });  
}  

function clearJoke() {  
    document.getElementById('joke').textContent = 'Press the button for a joke!';  
    document.getElementById('charCount').textContent = '0';  
}