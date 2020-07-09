document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

function getText(e){
    fetch('test.txt')
        .then(function(res){
            return res.text();
        })
        .then(function(data){
            console.log(data);
        })
        .catch(function(err){
            console.log(err)
        });

}

function getJson(e){
    fetch('posts.json')
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            // console.log(data);
            let output = '';
            data.forEach(function(post){
                output += `<li>${post.title}</li>`;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(function(err){
            console.log(err)
        });

}
function getExternal(e){
    fetch('https://api.github.com/users')
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            // console.log(data);
            let output = '';
            data.forEach(function(user){
                output += `<li>${user.login}</li>`;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(function(err){
            console.log(err)
        });

}