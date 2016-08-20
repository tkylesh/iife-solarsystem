//1. public property for holding the last modified date.


//2. getter/setter for planets
//3. getter/setter for activeSpacecraft
//4. getter/setter for planetsLandedOn


var SolarSystem = (function(){
	var planets = [];
	var activeSpacecraft = [];
	var planetsLandedOn = 0;

	return{
		last_modified_date: new Date(),
		getPlanet: function(){
			return planets;
		},
		setPlanet: function(newPlanet){
			planets.push(newPlanet);

		},
		getActiveSpaceCraft: function(){
			return activeSpacecraft;
		},
		setActiveSpaceCraft: function(newSpaceCraft){
			activeSpacecraft.push(newSpaceCraft);
		},
		getPlanetsLandedOn: function(){
			return planetsLandedOn;
		},
		setPlanetsLandedOn: function(newNumber){
			planetsLandedOn = newNumber;
		}
	
	}
})();