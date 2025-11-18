import { OrderCommand } from "./orderCommand";
import { Chef } from "./chef";

export class PreparePastaCommand implements OrderCommand {
  private chef: Chef;

  constructor(chef: Chef) {
    this.chef = chef;
  }

  execute(): void {
    this.chef.preparePasta();
  }
}