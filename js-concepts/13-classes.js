class Computer {
  constructor(towerCase, hdds, ssds, cpu, gpu, fans, powerSupply, motherboard) {
    this._tower = towerCase;
    this.hdds = hdds;
    this.ssds = ssds;
    this.cpu = cpu;
    this.gpu = gpu;
    this.fans = fans;
    this.psu = powerSupply;
    this.mobo = motherboard;
  }
  displayInfo() {
    console.log(
      `Tower: ${this.tower}\nHDD: ${this.hdds} \nSSD: ${this.ssds} \nCPU: ${this.cpu} \nGPU: ${this.gpu} \nFans: ${this.fans} \nPSU : ${this.psu} \nMobo: ${this.mobo}`
    );
  }
  get tower() {
    return this._tower;
  }
  set tower(tower) {
    this._tower = tower;
  }
}

let myComputer = new Computer(
  'NZXT S340',
  2,
  1,
  'i7 6700k 4.0 GHz Quad-Core',
  'GTX 1070',
  4,
  'Corsair 750W Gold',
  'Asus Z170'
);

// console.log(myComputer);
// myComputer.displayInfo();
console.log(myComputer.tower);
myComputer.tower = 'Corsair Carbon';
console.log(myComputer.tower);
