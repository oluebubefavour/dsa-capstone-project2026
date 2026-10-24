import {greet} from './greeting.js';
import booking from './bookings.js';
import Counter from './class.js';
import { students } from "./student.js";
import { favoritefood } from './product.js';



const name = 'OFN';
console.log(greet(name));

for (let i = 0; i < favoritefood.length; i++) {
    console.log(favoritefood[i]);
}

 const bookingDetails = booking.get('G5SLN75');
console.log(`Booking Details: Owner - ${bookingDetails.Owner}, Seats - ${bookingDetails.Seats}, Level - ${bookingDetails.Level}`);

const counter = new Counter();
console.log(counter.value);
counter.increment();
console.log(counter.value);

// console.log(favoritefood);
 
for (let student of students) {
    let result = student.score >= 50 ? "Pass" : "Fail";
    console.log(
        `Name: ${student.name}, Age: ${student.age}, Department: ${student.department}, Score: ${student.score}, Result: ${result}`
    );
}
