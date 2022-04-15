export class Person {
  constructor(age, ethnicity, income) {
    this.earthYears = age;
    this.ethnicity = ethnicity;
    this.income = income
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
  }
}