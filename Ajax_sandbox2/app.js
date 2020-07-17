//mimic server
const posts = [
    {title: 'post one', body: 'This is post one'},
    {title: 'post two', body: 'This is post two'}
];

function createPost(post){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            posts.push(post);
            
            const error = false;

            if(!error){
                resolve();
            } else {
                reject("Error: something wrong");
            }
        }, 2000);
    });
}

function getPosts(){
    setTimeout(function(){
        let output = ``;
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

// console.log("Start");
createPost({title: 'post three', body: 'This is post three'})
.then(getPosts)
.catch(function(err){
    console.log(err);
});