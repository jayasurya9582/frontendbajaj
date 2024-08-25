import React from 'react';

const FilterDropdown = ({ options, selectedOptions, onSelect }) => {
    const handleChange = (event) => {
        const { options } = event.target;
        const selected = Array.from(options)
                              .filter(option => option.selected)
                              .map(option => option.value);
        onSelect(selected);
    };

    return (
        <select multiple={true} value={selectedOptions} onChange={handleChange}>
            {options.map(option => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default FilterDropdown;
