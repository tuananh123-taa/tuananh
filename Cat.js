function Cat(){
	this.stomach = [];
}
cat.prototype.eat = function(muose){
	this.stomach.push(muose);

};
module.exports = Cat;