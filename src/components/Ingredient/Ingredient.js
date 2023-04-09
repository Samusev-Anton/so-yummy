import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import IconButton from '@mui/material/IconButton';

export const Ingredient = ({ id, name, weight }) => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdownOptions, setDropdownOptions] = useState([]);

  function handleSearch(event) {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    const options = fetch('ingerdients.title');

    const filteredOptions = options.filter(option =>
      option.toLowerCase().includes(newSearchTerm.toLowerCase())
    );
    setDropdownOptions(filteredOptions);
  }

  return (
    <>
      <input type="text" value={searchTerm} onChange={handleSearch} />
      <select>
        {dropdownOptions.map((option, index) => (
          <option key={index} value={option}>
            {option.title}
          </option>
        ))}
      </select>
      <select id="weight" name="weight" value={weight}>
        <option value="tbs">tbs</option>
        <option value="tsp">tsp</option>
        <option value="kg">kg</option>
        <option value="g">g</option>
      </select>
      <IconButton onClick={() => dispatch()}>
        <svg
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.0625 4.4375L3.9375 14.5625"
            stroke="#333333"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.0625 14.5625L3.9375 4.4375"
            stroke="#333333"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </IconButton>
    </>
  );
};
