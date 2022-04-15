export class Person {
  constructor(age, ethnicity, income) {
    this.earthYears = age;
    this.ethnicity = ethnicity;
    this.income = income
    this.lifeExpectancy();
  }
  lifeExpectancy()  {
    this.lifeExpect = 72
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
    if (this.earthYears < this.lifeExpect)  {
      this.yearsLeft =  this.lifeExpect - this.earthYears
    } else {
      this.yearsOver = this.earthYears - this.lifeExpect
    }
  }
  mercuryYears()  {
    this.mercuryAge = Math.round(this.earthYears / 0.24);
    if  (this.earthYears < this.lifeExpect) {
      this.mercuryYearsLeft = Math.round(this.yearsLeft / 0.24);
    } else {
      this.mercuryYearsOver = Math.round(this.yearsOver / 0.24);
    }
  }
  venusYears()  {
    this.venusAge = Math.round(this.earthYears / 0.62);
    if  (this.earthYears < this.lifeExpect) {
      this.venusYearsLeft = Math.round(this.yearsLeft / 0.62);
    } else {
      this.venusYearsOver = Math.round(this.yearsOver / 0.62);
    }
  }
  marsYears() {
    this.marsAge = Math.round(this.earthYears / 1.88);
    if  (this.earthYears < this.lifeExpect) {
      this.marsYearsLeft = Math.round(this.yearsLeft / 1.88);
    } else {
      this.marsYearsOver = Math.round(this.yearsOver / 1.88);
    }
  }
  jupiterYears()  {
    this.jupiterAge = Math.round(this.earthYears / 11.86);
  }
}