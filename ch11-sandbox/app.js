//Basic Structure of Module Pattern
// const UICtrl = (function() {
//     // private vars and functions
//     let text = "Hello world";
//     const changeText = function() {
//         const element = document.querySelector('h1');
//         element.textContent = text;
//     }

//     return {
//         // public var and functions
//         callChangeText: function() {
//             changeText();
//             console.log(text);
//         }
//     }
// }());
// UICtrl.callChangeText();

// const ItemCtrl = (function(){
//     let data = [];
//     function add(item) {
//         data.push(item);
//         console.log('Item Added...');
//     }

//     function get(id) {
//         return data.find(item => {
//             return item.id == id;
//         });
//     }

//     return {
//         add: add,
//         get: get
//     }
// }());
// ItemCtrl.add({id: 1, name:'John'});
// ItemCtrl.add({id: 2, name:'Mark'});
// console.log(ItemCtrl.get(1));

// Singleton Pattern