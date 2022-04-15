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
    }
  }
}