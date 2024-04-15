import React, { useEffect } from 'react';
import axios from 'axios';

const Checkbox = ({ id, name, checked, onChange }) => (
  <div className="flex items-center mb-2">
    <input
      id={id}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 mr-2"
    />
    <label htmlFor={id} className="text-gray-700 cursor-pointer">
      {name}
    </label>
  </div>
);

const SelectorFilters = ({ type, options, setOptions }) => {
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/products/${type}s`)
      .then((response) => {
        setOptions(response.data.map((option) => ({ name: option, selected: false })));
      })
      .catch((error) => {
        console.error(`Error fetching ${type}s:`, error);
      });
  }, [type, setOptions]);

  const toggleOption = (index) => {
    setOptions((prevOptions) =>
      prevOptions.map((option, i) =>
        i === index ? { ...option, selected: !option.selected } : option
      )
    );
  };

  return (
    <div className="p-4 border rounded shadow">
      <h1 className="text-lg font-semibold mb-4">{type}</h1>
      <hr className="mb-4" />
      {options.map((option, index) => (
        <Checkbox
          key={`${type}-${index}`}
          id={`${type}-${index}`}
          name={option.name}
          checked={option.selected}
          onChange={() => toggleOption(index)}
        />
      ))}
    </div>
  );
};

export default SelectorFilters;
