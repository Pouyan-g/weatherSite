import React from "react";
import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { options, url } from "../../API";

function Search({ onSearchChange }) {
  const [_search, setSearch] = useState(null);

  const ChangeHandler = (data) => {
    setSearch(data);
    onSearchChange(data);
  };

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `${url}/cities?namePrefix=${inputValue}`,
        options
      );
      //   console.log(response);
      const result = await response.json();
      //   console.log(result);
      return {
        options: result.data.map((option) => ({
          value: `${option.latitude} ${option.longitude}`,
          label: `${option.name} , ${option.countryCode}`,
          data: `${option.city} ${option.country}`,
        })),
      };
    } catch (error) {
      console.error(error);
      return {
        options: [],
      };
    }
  };
  return (
    <AsyncPaginate
      placeholder="Enter the city:"
      debounceTimeout={1000}
      value={_search}
      onChange={ChangeHandler}
      loadOptions={loadOptions}
    />
  );
}

export default Search;
