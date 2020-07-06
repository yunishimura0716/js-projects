const http = new easyHTTP();

//get posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, res){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(res);
//     }
// });
//get single post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, res){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(res);
//     }
// });

//post request
data = {
    title: 'Custom Post',
    body: 'This is a custom post'
}
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, res){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(res);
//     }
// });

//put request
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, res){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(res);
//     }
// })

//delete request
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, res){
    if(err){
        console.log(err);
    } else {
        console.log(res);
    }
});