import style from './dropdown.module.css'
import React, { useState } from 'react';

    interface DropdownProps {
    options: string[];
    onSelect: (selectedOption: any) => void;
    flag: string;
    }

export const Dropdown: React.FC<DropdownProps> = ({ options, onSelect, flag }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        onSelect((prev: Record<string, any>) => ({...prev, [flag]: option}));
        setIsOpen(false);
    };

    return (
        <div className={style.dropdownContainer}>
        <button className={style.dropdownToggle} onClick={toggleDropdown}>
            {selectedOption || flag}
        </button>
        {isOpen && (
            <ul className={style.dropdownMenu}>
            {options.map((option, index) => (
                <li key={index} onClick={() => handleOptionClick(option)}>
                {option}
                </li>
            ))}
            </ul>
        )}
        </div>
    );
};
