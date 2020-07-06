document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){
    const number = document.getElementById('number').value;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
    
    xhr.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(xhr.responseText);
            // console.log(response);
            let output = '';

            if(response.type === 'success'){
                response.value.forEach(function(val){
                    output += `<li>${val.joke}</li>`;
                });
            } else {
                output = '<li>Something wrong inputs</li>';
            }

            document.querySelector('.jokes').innerHTML = output;
        }
    }

    xhr.send();

    e.preventDefault();
}