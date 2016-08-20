//1. getter/setter for closest stars to the sun
//2. getter/setter for age of solarsystem
//3. getter/setter for known dwarf planets




var SolarSystem = (function(newSolarsystem){
	var closestStars = ["Alpha Centauri"];
	var ageOfSolarSystem = 0;
	var dwarfPlanets = ["Pluto"];

	newSolarsystem.getClosestStars = function(){
		return closestStars;
	};
	newSolarsystem.setClosestStars = function(Star){
		closestStars.push(Star);
	};
	newSolarsystem.getAgeOfSolarsystem = function(){
		return ageOfSolarSystem;;
	};
	newSolarsystem.setAgeOfSolarsystem = function(Age){
		ageOfSolarSystem = Age;
	};
	newSolarsystem.getDwarfPlanets = function(){
		return dwarfPlanets;
	};
	newSolarsystem.setDwarfPlanets = function(Planet){
		dwarfPlanets.push(Planet);
	};


	

	newSolarsystem.greeting = "bite me";
	return newSolarsystem;


})(SolarSystem || {});