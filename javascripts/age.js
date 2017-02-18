var SolarSystem = (function(oldSolarSystem){
	var age = 0;

	oldSolarSystem.getSolarSystemAge = function(){
		return age;
	};

	oldSolarSystem.setSolarSystemAge = function(){
		age++;
	};

	return oldSolarSystem;
})(SolarSystem || {});