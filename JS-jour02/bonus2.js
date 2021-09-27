// BONUS 2

var month = "August"

switch (month) {
    case "December":
    case "January": 
    case "February":
        console.log("Winter");
        break;
    case "March":
    case "April":
    case "May":
        console.log("Spring");
        break;
    case "June":
    case "July": 
    case "August":
        console.log("Summer")
        break;
    case "September":
    case "October":
    case "November":
        console.log("Fall")
        break;
    default:
        console.log("That's not a season...")
}