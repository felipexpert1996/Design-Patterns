import { Employee } from "./Employee";

export class Programmer implements Employee {
   work(): void {
       console.log("Programming...");
   }
}
