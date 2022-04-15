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
    newPerson.mercuryYears()
    expect(newPerson.mercuryAge).toEqual(208)
  });
  test('it should calc mercuryYearsLeft based on yearsLeft', () =>  {
    const newPerson = new Person(50, "South Asian", 40000);
    newPerson.mercuryYears()
    expect(newPerson.mercuryYearsLeft).toEqual(88);
  });
  test('it should calc mercuryYearsOver based on yearsOver', () =>  {
    const newPerson = new Person(75, "South Asian", 40000);
    newPerson.mercuryYears()
    expect(newPerson.mercuryYearsOver).toEqual(17);
  });
});
describe('Person.venusYears', ()  =>  {
  test('it should calc venusAge based on earthYears', () =>  {
    const newPerson = new Person(50, "South Asian", 40000);
    newPerson.venusYears()
    expect(newPerson.venusAge).toEqual(81)
  });
  test('it should calc venusYearsLeft based on yearsLeft', () =>  {
    const newPerson = new Person(50, "South Asian", 40000);
    newPerson.venusYears()
    expect(newPerson.venusYearsLeft).toEqual(34);
  });
  test('it should calc venusYearsOver based on yearsOver', () =>  {
    const newPerson = new Person(75, "South Asian", 40000);
    newPerson.venusYears()
    expect(newPerson.venusYearsOver).toEqual(6);
  });
});