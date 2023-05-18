import "./App.css";
import {
  getAllPeople,
  sortPeopleByAge,
  sortPeopleByLastName,
  filterListByMinors,
} from "./dummy-data.js";
import { useState } from "react";

function App() {
  const people = getAllPeople();
  const [list, setList] = useState(people);
  const [minorList, setMinorList] = useState();
  const [disabled, setDisabled] = useState(false);

  const resetButton = () => {
    const unsortedList = getAllPeople();
    setList(unsortedList);
    setMinorList(unsortedList);
    setDisabled(false);
  };

  const handleSortByAge = () => {
    if (minorList) {
      const sortedList = sortPeopleByAge(minorList);
      setList(sortedList);
    } else {
      const sortedList = sortPeopleByAge();
      setList(sortedList);
    }
  };

  const handleSortByLastName = () => {
    if (minorList) {
      const sortedList = sortPeopleByLastName(minorList);
      setList(sortedList);
    } else {
      const sortedList = sortPeopleByLastName();
      setList(sortedList);
    }
  };

  const filterMinors = () => {
    const filteredMinorList = filterListByMinors();
    setList(filteredMinorList);
    setMinorList(filteredMinorList);
    setDisabled(true);
  };

  return (
    <div className="App">
      <br></br>
      <button onClick={resetButton}>reset button</button>
      <button onClick={handleSortByAge}>sort by age</button>
      <button onClick={handleSortByLastName}>sort by name</button>
      <button disabled={disabled} onClick={filterMinors}>
        filter minors
      </button>
      <div>
        {list.map((person) => {
          return (
            <div key={person.firstName}>
              <p>
                {person.firstName} {person.lastName}
              </p>
              <p>{person.age}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
