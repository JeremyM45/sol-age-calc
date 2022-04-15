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
    const newPerson = new Person(0, "", 0);
    newPerson.lifeExpectancy();
    expect(newPerson.lifeExpect).toEqual(72);
  });
  test('it should increase lifeExpect to 77 with "West Asian" ethnicity', ()  =>  {
    const newPerson = new Person(0, "West Asian", 40000);
    newPerson.lifeExpectancy();
    expect(newPerson.lifeExpect).toEqual(77);
  });
  test('it should decrease lifeExpect to 71 with "South Asian" ethnicity', ()  =>  {
    const newPerson = new Person(0, "South Asian", 40000);
    newPerson.lifeExpectancy();
    expect(newPerson.lifeExpect).toEqual(71);
  });
  test('it should increase lifeExpect to 80 with "East Asian" ethnicity', ()  =>  {
    const newPerson = new Person(0, "East Asian", 40000);
    newPerson.lifeExpectancy();
    expect(newPerson.lifeExpect).toEqual(80);
  });
  test('it should increase lifeExpect to 75 with "North African" ethnicity', ()  =>  {
    const newPerson = new Person(0, "North African", 40000);
    newPerson.lifeExpectancy();
    expect(newPerson.lifeExpect).toEqual(75);
  });
  test('it should decrease lifeExpect to 64 with "Sub-Saharan African" ethnicity',  ()  =>  {
    const newPerson = new Person(0, "Sub-Saharan African", 40000);
    newPerson.lifeExpectancy();
    expect(newPerson.lifeExpect).toEqual(64);
  });
  test('it should increase lifeExpect to 79 with "Western European" ethnicity',  ()  =>  {
    const newPerson = new Person(0, "Western European", 40000);
    newPerson.lifeExpectancy();
    expect(newPerson.lifeExpect).toEqual(79);
  });
  test('it should decrease lifeExpect to 69 with "Eastern European" ethnicity',  ()  =>  {
    const newPerson = new Person(0, "Eastern European", 40000);
    newPerson.lifeExpectancy();
    expect(newPerson.lifeExpect).toEqual(69);
  });
  test('it should increase lifeExpect to 78 with "North American" ethnicity',  ()  =>  {
    const newPerson = new Person(0, "North American", 40000);
    newPerson.lifeExpectancy();
    expect(newPerson.lifeExpect).toEqual(78);
  });
  test('it should increase lifeExpect to 76 with "South American" ethnicity',  ()  =>  {
    const newPerson = new Person(0, "South American", 40000);
    newPerson.lifeExpectancy();
    expect(newPerson.lifeExpect).toEqual(76);
  });
  test('it should increase lifeExpect by 4 years if income over 60000', ()  =>  {
    const newPerson = new Person(0, "", 60001)
    newPerson.lifeExpectancy();
    expect(newPerson.lifeExpect).toEqual(76);
  });
  test('it should decrease lifeExpect by 4 years if income under 30000', ()  =>  {
    const newPerson = new Person(0, "", 29999)
    newPerson.lifeExpectancy();
    expect(newPerson.lifeExpect).toEqual(68);
  });
});