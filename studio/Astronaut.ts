import { Payload } from "./Payload";
import { Cargo } from './Cargo';
import { Rocket } from './Rocket';

export class Astronaut implements Payload {
    massKg: number;
    name: string;
    constructor (massKg: number, name: string) {
        this.massKg = massKg;
        this.name = name;
    }
}




// Defined in Astronaut.ts
// Implements the Payload interface
// Properties
// massKg should be a number.
// name should be a string.
// Constructor
// Parameter massKg should be a number.
// Parameter name should be string.
// Sets value of this.massKg and this.name.





 