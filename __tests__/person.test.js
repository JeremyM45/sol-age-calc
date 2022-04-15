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