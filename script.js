let unit = Number(prompt("Enter your units consumed:"));
let amount = 0;

if (unit > 300) {
    amount += (unit - 300) * 11;
    unit = 300;
}

if (unit > 150 && unit <= 300) {
    amount += (unit - 150) * 7;
    unit = 150;
}

if (unit > 60 && unit <= 150) {
    amount += (unit - 60) * 4.5;
    unit = 60;
}

if (unit > 0 && unit <= 60) {
    amount += unit * 2;
}

console.log("Total Bill: ₹" + amount);
