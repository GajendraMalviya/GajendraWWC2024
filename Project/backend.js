function suggestPlaces() 
{
    const numberOfDays = document.getElementById("days").value;
    const placesToVisit = [...document.getElementById("places").selectedOptions].map(option => option.value);
    const location = document.getElementById("location").value;
}

    const suggestions = [];

  if (numberOfDays >= 1 && numberOfDays <= 3) {
    suggestions.push("You can visit local landmarks and nearby attractions.");
  } else if (numberOfDays > 3 && numberOfDays <= 5) {
    suggestions.push("You can explore a mix of historic and modern sites.");
  } else if (numberOfDays > 5) {
    suggestions.push("You have plenty of time to explore various places, including religious sites.");
  } else {
    suggestions.push("Please enter a valid number of days.");
  }
  if (placesToVisit.includes("religious")) {
    suggestions.push("Consider visiting religious places in the area.");
  }
  if (placesToVisit.includes("historic")) {
    suggestions.push("Explore historic landmarks and museums.");
  }
  if (placesToVisit.includes("modern")) {
    suggestions.push("Visit modern and contemporary attractions.");

  switch (location) {
    case 'A':
      suggestions.push("You are in a bustling city. Explore the city center and nearby attractions.");
      break;
    case 'B':
      suggestions.push("Enjoy the scenic beauty and nature in the surrounding area.");
      break;
    case 'C':
      suggestions.push("Visit historical sites and museums in this location.");
      break;
    case 'D':
      suggestions.push("Explore the local culture and cuisine in this area.");
      break;
    case 'E':
      suggestions.push("Visit modern and shopping districts in the vicinity.");
      break;
    case 'F':
      suggestions.push("Discover unique cultural and artistic experiences here.");
      break;
    default:
      suggestions.push("Please enter a valid location.");
  }
  alert("Here are some suggestions for your trip:\n\n" + suggestions.join("\n"));
}
suggestPlaces();

    const suggestionsDiv = document.getElementById("suggestions");
    suggestionsDiv.innerHTML = suggestions.join("<br>");