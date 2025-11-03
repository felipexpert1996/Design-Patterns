import { Manager } from './Manager';
import { Programmer } from './Programmer';

const dev1 = new Programmer();
const dev2 = new Programmer();
const dev3 = new Programmer();

const teamLead = new Manager();
teamLead.addTeamMember(dev1);
teamLead.addTeamMember(dev2);

const seniorManager = new Manager();
seniorManager.addTeamMember(teamLead);
seniorManager.addTeamMember(dev3);

console.log('Starting work (calling work() on the root composite):');
seniorManager.work();

console.log('\nTreating members uniformly:');
const members = [dev1, teamLead, seniorManager];
members.forEach((m, i) => {
  console.log(`Member ${i + 1} starts working:`);
  m.work();
});
