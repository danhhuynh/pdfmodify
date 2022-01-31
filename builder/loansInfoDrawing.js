import Builder from "./Builder.js";

export default class LoansInfoDrawing extends Builder {
  constructor(config) {
    const { page, font, fontSize, color } = config;
    super(page, font, fontSize, color);
  }

  loanPurposePos() {
    return {
      x: 165,
      y: 272,
    };
  }

  drawLoanPurpose() {
    let { x, y } = this.loanPurposePos();
    this.draw("X", x, y);
    this.draw("X", x +94, y);
    this.draw("X", x + 91 * 2, y);
    this.draw("X", x + 92 * 3, y);

    this.draw("27", x +80, y - 26, 14);
  }
  
  spVayPos() {
    return {
      x: 50,
      y: 200,
    };
  }

  drawSpVay() {
    let { x, y } = this.spVayPos();
    this.draw("X", x, y);
    this.draw("X", x +232, y);
    this.draw("X", x + 446, y);

    this.draw("X", x, y - 24);
    this.draw("X", x +232, y-24);
    this.draw("X", x + 446, y-24);

    y -= 24;
    
    this.draw("X", x, y -24);
    this.draw("X", x +232, y -24);
    this.draw("X", x + 446, y -24);
    
    y -= 24;
    this.draw("X", x, y -24);
    
    y -= 24;
    this.draw("X", x, y -24);
    this.draw("X", x + 232, y -24);
  }

  moneyLoanPos(){
    return {
      x: 178,
      y: this.height-76
    }
  }

  drawMoneyLoan(){
    let {x, y} = this.moneyLoanPos();
    this.draw("1000000", x, y, 14);
    this.draw("Một Tỷ đồng", x + 173, y);
    this.draw("24", x + 294 + 173, y);

    this.draw("turruishdfhsd gfdkjshg fdhgk ersfdg ff", x -74, y - 46);
    this.draw("100000000", x + 185, y - 72, 14);
  }
  

}
