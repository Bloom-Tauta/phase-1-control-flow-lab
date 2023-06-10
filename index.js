let feet = 199
function scuberGreetingForFeet(feet) {
    if (feet <= 2500) {
        if (feet <= 400) {
            return "This one is on me!"
        } else if (feet >= 2000) {
            return "I will gladly take your thirty bucks."
        }
    } else {
        return "No can do."
    }
    
    
}
scuberGreetingForFeet();

let city = "NYC"
function ternaryCheckCity(city) {
    return city === "NYC" ? "Ok, sounds good." : "No go.";
}
ternaryCheckCity();

function switchOnCharmFromTip(tip) {
    switch (tip) {
        case 'generous': return 'Thank you so much.';
        break;
        case 'not as generous' : return 'Thank you.';
        break;
        default:
            return 'Bye.' 
    }
}
switchOnCharmFromTip();
