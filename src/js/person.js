export class Person {
  constructor(age, ethnicity, income) {
    this.earthAge = age;
    this.ethnicity = ethnicity;
    this.income = income;
    this.lifeExpectancy();
    this.mercuryYears();
    this.venusYears();
    this.marsYears();
    this.jupiterYears();
    this.saturnYears();
    this.uranusYears();
    this.neptuneYears();
  }
  lifeExpectancy()  {
    this.lifeExpect = 72;
    switch(this.ethnicity)  {
    case "West Asian":
      this.lifeExpect = 77;
      break;
    case "South Asian":
      this.lifeExpect = 71;
      break;
    case "East Asian":
      this.lifeExpect = 80;
      break;
    case "North African":
      this.lifeExpect = 75;
      break;
    case "Sub-Saharan African":
      this.lifeExpect = 64;
      break;
    case "Western European":
      this.lifeExpect = 79;
      break;
    case "Eastern European":
      this.lifeExpect = 69;
      break;
    case "North American":
      this.lifeExpect = 78;
      break;
    case "South American":
      this.lifeExpect = 76;
      break;
    }
    if  (this.income > 80000) {
      this.lifeExpect += 4;
    } else if (this.income < 30000) {
      this.lifeExpect -= 4;
    }
    this.yearsLeftOrOver();
  }
  yearsLeftOrOver() {
    if (this.earthAge < this.lifeExpect)  {
      this.earthYearsLeft =  this.lifeExpect - this.earthAge;
    } else {
      this.earthYearsOver = this.earthAge - this.lifeExpect;
    }
  }
  mercuryYears()  {
    this.mercuryAge = Math.round(this.earthAge / 0.24);
    if  (this.earthAge < this.lifeExpect) {
      this.mercuryYearsLeft = Math.round(this.earthYearsLeft / 0.24);
    } else {
      this.mercuryYearsOver = Math.round(this.earthYearsOver / 0.24);
    }
  }
  venusYears()  {
    this.venusAge = Math.round(this.earthAge / 0.62);
    if  (this.earthAge < this.lifeExpect) {
      this.venusYearsLeft = Math.round(this.earthYearsLeft / 0.62);
    } else {
      this.venusYearsOver = Math.round(this.earthYearsOver / 0.62);
    }
  }
  marsYears() {
    this.marsAge = Math.round(this.earthAge / 1.88);
    if  (this.earthAge < this.lifeExpect) {
      this.marsYearsLeft = Math.round(this.earthYearsLeft / 1.88);
    } else {
      this.marsYearsOver = Math.round(this.earthYearsOver / 1.88);
    }
  }
  jupiterYears()  {
    this.jupiterAge = parseFloat((this.earthAge / 11.86).toFixed(2));
    if  (this.earthAge < this.lifeExpect) {
      this.jupiterYearsLeft = parseFloat((this.earthYearsLeft / 11.86).toFixed(2));
    } else  {
      this.jupiterYearsOver = parseFloat((this.earthYearsOver / 11.86).toFixed(2));
    }
  }
  saturnYears() {
    this.saturnAge = parseFloat((this.earthAge / 29.5).toFixed(2));
    if  (this.earthAge < this.lifeExpect) {
      this.saturnYearsLeft = parseFloat((this.earthYearsLeft / 29.5).toFixed(2));
    } else  {
      this.saturnYearsOver = parseFloat((this.earthYearsOver / 29.5).toFixed(2));
    }
  }
  uranusYears() {
    this.uranusAge = parseFloat((this.earthAge / 84.75).toFixed(2));
    if  (this.earthAge < this.lifeExpect) {
      this.uranusYearsLeft = parseFloat((this.earthYearsLeft / 84.75).toFixed(3));
    } else  {
      this.uranusYearsOver = parseFloat((this.earthYearsOver / 84.75).toFixed(3));
    }
  }
  neptuneYears()  {
    this.neptuneAge = parseFloat((this.earthAge / 166.67).toFixed(2));
    if  (this.earthAge < this.lifeExpect) {
      this.neptuneYearsLeft = parseFloat((this.earthYearsLeft / 166.67).toFixed(3));
    } else  {
      this.neptuneYearsOver = parseFloat((this.earthYearsOver / 166.67).toFixed(3));
    }
  }
}