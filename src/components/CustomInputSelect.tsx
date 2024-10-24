import React, { useState } from 'react';
import { getInputClassNameForTable } from '../utils/Actions';

interface CustomInputSelectProps {
  item: { item: string };
  index: number;
  handleInputSelectChange: (
    index: number,
    field: string,
    value: string,
  ) => void;
  options: string[];
}

const CustomInputSelect: React.FC<CustomInputSelectProps> = ({
  item,
  index,
  handleInputSelectChange,
  options,
}) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [filteredOptions, setFilteredOptions] = useState<string[]>(options);

  const handleInputClick = () => {
    setShowDropdown(true);
    setFilteredOptions(options); // Reset to all options on click
  };

  const handleOptionClick = (value: string) => {
    handleInputSelectChange(index, 'item', value);
    setShowDropdown(false); // Hide dropdown after selection
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={item.item}
        onChange={(e) => handleInputSelectChange(index, 'item', e.target.value)}
        onClick={handleInputClick}
        placeholder="Product"
        className={getInputClassNameForTable(index)}
      />
      {showDropdown && (
        <div className="absolute z-10 bg-white border border-gray-300 rounded shadow-lg mt-1">
          {filteredOptions.map((option, idx) => (
            <div
              key={idx}
              onClick={() => handleOptionClick(option)}
              className="cursor-pointer p-2 hover:bg-gray-200"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomInputSelect;
