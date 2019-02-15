export class Rocket {
  isInSpace = false;
  boostersLanded = true;

  launch() {
    this.isInSpace = true;
    this.boostersLanded = true;
  }
}
