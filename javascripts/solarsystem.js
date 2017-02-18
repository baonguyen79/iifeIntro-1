var SolarSystem = (function(){
	var dwarfPlanets = ["pluto"];

	return {
		getDwarfPlanets : function(){
			return "they are rejects";
		},
		setDwarfPlanets : function(lumpOfRock){
			dwarfPlanets.push(lumpOfRock);
		}
	}
})();