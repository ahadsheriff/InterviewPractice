var pet = {
	type: "dog",
	name: "Fido"
};

function petName (pet) {
	console.log("You have a " + pet.type + " whose name is " + pet.name);
}

petName(pet);