var Mouse = require('./Mouse');

function Cat(){
	this.stomach = [];
}
Cat.prototype.eat = function(animal){
	if (animal instanceof Mouse){
	    this.stomach.push(animal);
	}else{
		throw new Error('Cat can only eat mouse!')
		//ngược lại nếu nó ko phải con chuột thì báo lỗi là
	}
	


};
module.exports = Cat;