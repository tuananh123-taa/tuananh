var chalk = require('chalk');
// dùng modules chalk 
function Dog(name){
	this.name = name;
	this.stomach =[];
	
}
Dog.prototype.eat = function(cat) {
	this.stomach.push(cat);
};
Dog.prototype.sayHi = function() {
	console.log('Hi! I am a dog. My name is' + chalk.rep(this.name));
	//gọi modules chalk này ra, màu sắc đỏ
};

module.exports = Dog;
//exports thằng này ra