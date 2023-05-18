const people = [
  { firstName: "anthony", lastName: "jones", age: 34 },
  { firstName: "bob", lastName: "james", age: 32 },
  { firstName: "jill", lastName: "smith", age: 15 },
  { firstName: "sarah", lastName: "jameson", age: 55 },
];

export function getAllPeople() {
  return people;
}

export function sortPeopleByAge(list) {
  if (list) {
    const newList = [...list].sort(function (a, b) {
      return a.age - b.age;
    });
    return newList;
  } else {
    const newList = [...people].sort(function (a, b) {
      return a.age - b.age;
    });
    return newList;
  }
}

export function sortPeopleByLastName(list) {
  if (list) {
    const newList = [...list].sort(function (a, b) {
      if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) return -1;
      if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) return 1;
      return 0;
    });
    return newList;
  } else {
    const newList = [...people].sort(function (a, b) {
      if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) return -1;
      if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) return 1;
      return 0;
    });
    return newList;
  }
}

export function filterListByMinors() {
  const newList = [...people].filter((person) => {
    if (person.age > 18) return person;
  });
  return newList;
}
