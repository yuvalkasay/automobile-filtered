import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import Main from "./Main";
import axios from "axios";
// 

function App() {
  const [cars, setCars] = useState([]);
  const [filteredCar, setFilteredCar] = useState(null);
  const [filteredYear, setFilteredYear] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:5000/api");
      setCars(data);
    };
    fetchData();
    return () => {
      //
    };
  }, []);

  const carNameArray = cars.map((car) => car.name);
  let carNameFilter = [...new Set(carNameArray)];

  const carYearArray = cars.map((car) => car.year);
  let carYearFilter = [...new Set(carYearArray)];

  const updateModelFilter = (model) => {
    if (model === "all") {
      // If its "all", don't update the state
      setFilteredCar(null);
    } else {
      setFilteredCar(
        cars.filter((car) => {
          return car.name === model;
        })
      );
    }
  };

  const updateYearFilter = (year) => {
    if (year === "all") {
      setFilteredYear(null);
    } else {
      setFilteredYear(
        cars.filter((car) => {
          return car.year === year;
        })
      );
    }
  };

  return (
    <div>
      <SearchBox
        carNameFilter={carNameFilter}
        updateModelFilter={(e) => updateModelFilter(e.target.value)}
        carYearFilter={carYearFilter}
        updateYearFilter={(e) => updateYearFilter(e.target.value)}
      />
      <Main
        filteredCar={filteredCar || cars}
        filteredYear={filteredYear || cars}
      />
      ;
    </div>
  );
}

export default App;
