import { TestScheduler } from "jest";
import { Person } from "../src/js/person";

describe('Person',  ()  =>  {

  test('it should create a person object with age in Earth years', () =>  {
    const newPerson = new Person(50, "", 0);
    expect(newPerson.earthYears).toEqual(50);
  });
  test('it should create a person object with ethnicity', ()  =>  {
    const newPerson = new Person(0, "East Asian", 0);
    expect(newPerson.ethnicity).toEqual("East Asian");
  });
  test('it should create a person object with average income',  ()  =>  {
    const newPerson = new Person(0, "", 50000);
    expect(newPerson.income).toEqual(50000);
  })
  test('it should create a person object with age, ethnicity, and income',  ()  =>  {
    const newPerson = new Person(50, "East Asian", 50000);
    expect(newPerson.earthYears).toEqual(50);
    expect(newPerson.ethnicity).toEqual("East Asian");
    expect(newPerson.income).toEqual(50000);
  });
})
describe('Person.lifeExpectancy', ()  =>  {
  test('it should create lifeExpect starting at 72 for Person object', ()  =>  {
    const newPerson = new Person(0, "", 40000);
    expect(newPerson.lifeExpect).toEqual(72);
  });
  test('it should increase lifeExpect to 77 with "West Asian" ethnicity', ()  =>  {
    const newPerson = new Person(0, "West Asian", 40000);
    expect(newPerson.lifeExpect).toEqual(77);
  });
  test('it should decrease lifeExpect to 71 with "South Asian" ethnicity', ()  =>  {
    const newPerson = new Person(0, "South Asian", 40000);
    expect(newPerson.lifeExpect).toEqual(71);
  });
  test('it should increase lifeExpect to 80 with "East Asian" ethnicity', ()  =>  {
    const newPerson = new Person(0, "East Asian", 40000);
    expect(newPerson.lifeExpect).toEqual(80);
  });
  test('it should increase lifeExpect to 75 with "North African" ethnicity', ()  =>  {
    const newPerson = new Person(0, "North African", 40000);
    expect(newPerson.lifeExpect).toEqual(75);
  });
  test('it should decrease lifeExpect to 64 with "Sub-Saharan African" ethnicity',  ()  =>  {
    const newPerson = new Person(0, "Sub-Saharan African", 40000);
    expect(newPerson.lifeExpect).toEqual(64);
  });
  test('it should increase lifeExpect to 79 with "Western European" ethnicity',  ()  =>  {
    const newPerson = new Person(0, "Western European", 40000);
    expect(newPerson.lifeExpect).toEqual(79);
  });
  test('it should decrease lifeExpect to 69 with "Eastern European" ethnicity',  ()  =>  {
    const newPerson = new Person(0, "Eastern European", 40000);
    expect(newPerson.lifeExpect).toEqual(69);
  });
  test('it should increase lifeExpect to 78 with "North American" ethnicity',  ()  =>  {
    const newPerson = new Person(0, "North American", 40000);
    expect(newPerson.lifeExpect).toEqual(78);
  });
  test('it should increase lifeExpect to 76 with "South American" ethnicity',  ()  =>  {
    const newPerson = new Person(0, "South American", 40000);
    expect(newPerson.lifeExpect).toEqual(76);
  });
  test('it should increase lifeExpect by 4 years if income over 60000', ()  =>  {
    const newPerson = new Person(0, "", 80001)
    expect(newPerson.lifeExpect).toEqual(76);
  });
  test('it should decrease lifeExpect by 4 years if income under 30000', ()  =>  {
    const newPerson = new Person(0, "", 29999)
    expect(newPerson.lifeExpect).toEqual(68);
  });
});
describe('Person.yearsLeftOrOver',  ()  =>  {
  test('it should calc the how many years left a Person has based on their earthYears and lifeExpect', () =>  {
    const newPerson = new Person(50, "South Asian", 40000);
    expect(newPerson.yearsLeft).toEqual(21);
  });
  
  test('it should calc the how many years a Person is over based on their earthYears and lifeExpect', () =>  {
    const newPerson = new Person(75, "South Asian", 40000);
    expect(newPerson.yearsOver).toEqual(4);
  });
});
describe('Person.mercuryYears', ()  =>  {
  test('it should calc mercuryAge based on earthYears', () =>  {
    const newPerson = new Person(50, "South Asian", 40000);
    newPerson.mercuryYears();
    expect(newPerson.mercuryAge).toEqual(208)
  });
  test('it should calc mercuryYearsLeft based on yearsLeft', () =>  {
    const newPerson = new Person(50, "South Asian", 40000);
    newPerson.mercuryYears();
    expect(newPerson.mercuryYearsLeft).toEqual(88);
  });
  test('it should calc mercuryYearsOver based on yearsOver', () =>  {
    const newPerson = new Person(75, "South Asian", 40000);
    newPerson.mercuryYears();
    expect(newPerson.mercuryYearsOver).toEqual(17);
  });
});
describe('Person.venusYears', ()  =>  {
  test('it should calc venusAge based on earthYears', () =>  {
    const newPerson = new Person(50, "South Asian", 40000);
    newPerson.venusYears();
    expect(newPerson.venusAge).toEqual(81);
  });
  test('it should calc venusYearsLeft based on yearsLeft', () =>  {
    const newPerson = new Person(50, "South Asian", 40000);
    newPerson.venusYears();
    expect(newPerson.venusYearsLeft).toEqual(34);
  });
  test('it should calc venusYearsOver based on yearsOver', () =>  {
    const newPerson = new Person(75, "South Asian", 40000);
    newPerson.venusYears();
    expect(newPerson.venusYearsOver).toEqual(6);
  });
});
describe('Person.marsYears', ()  =>  {
  test('it should calc marsAge based on earthYears', () =>  {
    const newPerson = new Person(50, "South Asian", 40000);
    newPerson.marsYears();
    expect(newPerson.marsAge).toEqual(27);
  });
  test('it should calc marsYearsLeft based on yearsLeft', () =>  {
    const newPerson = new Person(50, "South Asian", 40000);
    newPerson.marsYears();
    expect(newPerson.marsYearsLeft).toEqual(11);
  });
  test('it should calc marsYearsOver based on yearsOver', () =>  {
    const newPerson = new Person(75, "South Asian", 40000);
    newPerson.marsYears();
    expect(newPerson.marsYearsOver).toEqual(2);
  });
});
describe('Person.jupiterYears', ()  =>  {
  test('it should calc jupiterAge based on earthYears', () =>  {
    const newPerson = new Person(50, "South Asian", 40000);
    newPerson.jupiterYears();
    expect(newPerson.jupiterAge).toEqual(4);
  });
  test('it should calc jupiterYearsLeft based on yearsLeft', () =>  {
    const newPerson = new Person(50, "South Asian", 40000);
    newPerson.jupiterYears();
    expect(newPerson.jupiterYearsLeft).toEqual(2);
  });
  test('it should calc jupiterYearsOver based on yearsOver', () =>  {
    const newPerson = new Person(75, "South Asian", 40000);
    newPerson.jupiterYears();
    expect(newPerson.jupiterYearsOver).toEqual(0.34);
  });
});
describe('Person.saturnYears', ()  =>  {
  test('it should calc saturnAge based on earthYears', () =>  {
    const newPerson = new Person(50, "South Asian", 40000);
    newPerson.saturnYears();
    expect(newPerson.saturnAge).toEqual(1.69);
  });
  test('it should calc saturnYearsLeft based on yearsLeft', () =>  {
    const newPerson = new Person(50, "South Asian", 40000);
    newPerson.saturnYears();
    expect(newPerson.saturnYearsLeft).toEqual(0.71);
  });
  test('it should calc saturnYearsOver based on yearsOver', () =>  {
    const newPerson = new Person(75, "South Asian", 40000);
    newPerson.saturnYears();
    expect(newPerson.saturnYearsOver).toEqual(0.14);
  });
});
describe('Person.uranusYears', ()  =>  {
  test('it should calc uranusAge based on earthYears', () =>  {
    const newPerson = new Person(50, "South Asian", 40000);
    newPerson.uranusYears();
    expect(newPerson.uranusAge).toEqual(0.59);
  });
  test('it should calc uranusYearsLeft based on yearsLeft', () =>  {
    const newPerson = new Person(50, "South Asian", 40000);
    newPerson.uranusYears();
    expect(newPerson.uranusYearsLeft).toEqual(0.25);
  });
  test('it should calc uranusYearsOver based on yearsOver', () =>  {
    const newPerson = new Person(75, "South Asian", 40000);
    newPerson.uranusYears();
    expect(newPerson.uranusYearsOver).toEqual(0.05);
  });
});
describe('Person.neptuneYears', ()  =>  {
  test('it should calc neptuneAge based on earthYears', () =>  {
    const newPerson = new Person(50, "South Asian", 40000);
    newPerson.neptuneYears();
    expect(newPerson.neptuneAge).toEqual(0.3);
  });
  test('it should calc neptuneYearsLeft based on yearsLeft', () =>  {
    const newPerson = new Person(50, "South Asian", 40000);
    newPerson.neptuneYears();
    expect(newPerson.neptuneYearsLeft).toEqual(0.126);
  });
  test('it should calc neptuneYearsOver based on yearsOver', () =>  {
    const newPerson = new Person(75, "South Asian", 40000);
    newPerson.neptuneYears();
    expect(newPerson.neptuneYearsOver).toEqual(0.024);
  });
});