var outside = "global";

function scopeStuff(){
	var inside = "local";
	// console.log("outside from inside the function", outside); //cat
	// console.log("inside from inside the function", inside);
}

// console.log("outside from outside the function", outside);
// console.log("inside from outside the function", inside);

// scopeStuff();

var global_base = 500;
!function throwAway(){
	global_base+=500;
	console.log(global_base);//1000
}();

var cats = (function(){
	var color = "black";
	var type = "tiger";
	var name = "fluffy";



	return {
		getColor : function(){
			var result = "your cat is " + color;
			return result;
		},
		getType : function(){
			return type;
		},
		setColor: function(newColor){
			color = newColor;
		}
	};
})();

console.log(cats);//
cats.setColor("pink");
console.log(cats.getColor());



// throwAway();

// document.getElementById('cat').addEventListener("click", throwAway)












