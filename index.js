var Cat = require('./Cat');
var Mouse = require('./Mouse');
var Dog = require('./Dog');

var cat = new Cat('Tom');
var mouse = new Mouse('Mickey');
var dog = new Dog();
// để bắt lỗi ý dùng try
try{
	cat.eat (dog);
} catch (error) { // lỗi
	console.log('Error while cat eating a dog');
	// Lỗi khi mèo ăn thịt chó.
}

console.log(cat);