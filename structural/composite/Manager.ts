import { Employee } from "./Employee";


export class Manager implements Employee {
   private team: Employee[] = [];

   addTeamMember(member: Employee): void {
       this.team.push(member);
   }

   work(): void {
       console.log("Managing team...");
       this.team.forEach(member => member.work());
   }
}
