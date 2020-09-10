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
// const Singleton = (function() {
//     let instance;

//     function createInstance() {
//         const object = new Object('Brad');
//         return object;
//     }
    
//     return {
//         getInstance: function() {
//             if(!instance) {
//                 instance = createInstance();
//             }
//             return instance;
//         }
//     }
// })();
// const instanceA = Singleton.getInstance();
// const instanceB = Singleton.getInstance();
// console.log(instanceA === instanceB);


//Factory Pattern
// function MemberFactory() {
//     this.createMember = function(name, type) {
//         let member;

//         if(type === 'simple') {
//             member = new SimpleMembership(name);
//         } else if (type === 'standard') {
//             member = new StandardMembership(name);
//         } else if (type === 'super') {
//             member = new SuperMembership(name);
//         }

//         member.type = type;

//         member.define = function() {
//             console.log(`${this.name} (${this.type}): ${this.cost}`);
//         }

//         return member;
//     }
// }
// const SimpleMembership = function(name) {
//     this.name = name;
//     this.cost = '$5';
// }
// const StandardMembership = function(name) {
//     this.name = name;
//     this.cost = '$15';
// }
// const SuperMembership = function(name) {
//     this.name = name;
//     this.cost = '$20';
// }
// const members = [];
// const factory = new MemberFactory();
// members.push(factory.createMember('John Doe', 'simple'));
// members.push(factory.createMember('Chris Jackson', 'super'));
// members.push(factory.createMember('Janice Williams', 'simple'));
// members.push(factory.createMember('Tom Smith', 'standard'));
// console.log(members);
// members.forEach(function(member) {
//     member.define();
// })


// Observer Patttern
// function EventObserver() {
//     this.observers = [];
// }
// EventObserver.prototype = {
//     subscribe: function(fn) {
//         this.observers.push(fn);
//         console.log(`You are now subscribed to ${fn.name}`)
//     },
//     unsubscribe: function(fn) {
//         //If there is no match, the callback gets to stay on the list.
//         // The filter returns a new list and reassigns the list of observers.
//         this.observers = this.observers.filter(function(item) {
//             if (item != fn) {
//                 return item;
//             }
//         });
//         console.log(`You are now unsubscribed from ${fn.name}`);
//     },
//     fire: function() {
//         this.observers.forEach(function(item) {
//             item.call();
//         })
//     }
// }
// const click = new EventObserver();
// document.querySelector('.sub-ms').addEventListener('click',
// function() {
//     click.subscribe(getCurMilliseconds);
// });
// document.querySelector('.unsub-ms').addEventListener('click',
// function() {
//     click.unsubscribe(getCurMilliseconds);
// });
// document.querySelector('.fire').addEventListener('click',
// function() {
//     click.fire();
// });
// const getCurMilliseconds = function() {
//     console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
// }


//Mediator Pattern
const User = function(name) {
    this.name = name;
    this.chatroom = null;
}
User.prototype = {
    send: function(message, to) {
        this.chatroom.send(message, this, to);
    },
    receive: function(message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
}
const Chatroom = function() {
    let users = {};

    return {
        register: function(user) {
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function(message, from, to) {
            if (to) {
                // single user message
                to.receive(message, from);
            } else {
                // mass message
                for(key in users) {
                    if(users[key] != from) {
                        users[key].receive(message, from);
                    }
                }
            }
        }
    }
}
const brad = new User('Brad');
const jeff = new User('Jeff');
const sara = new User('Sara');
const chatroom = new Chatroom();
chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(sara);
brad.send('Hello Jeff', jeff);
sara.send('Hello brad, you are the best dev ever!', brad);
jeff.send('Hello every one');