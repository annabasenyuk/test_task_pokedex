import React, { useState, useEffect } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import cn from 'classnames';
import iconDown from '../../static/icons/down-arrow-grey.svg';
import iconUp from '../../static/icons/up-arrow-grey.svg';
import './Dropdown.scss';

interface Props {
  options: { label: string; value: string }[];
  value?: string | null;
  onChange?: (value: string) => void;
  filterByType?: boolean;
  onTypeChange?: (type: string) => void;
}

export const Dropdown: React.FC<Props> = ({
  options,
  value,
  onChange,
  filterByType,
  onTypeChange,
}) => {
  const [selectedOption, setSelectedOption] = useState(value);

  useEffect(() => {
    if (value !== undefined) {
      setSelectedOption(value);
    }
  }, [value]);

  const handleChange = (selectedValue: string) => {
    setSelectedOption(selectedValue);
    if (onChange) {
      onChange(selectedValue);
    }

    if (filterByType && onTypeChange) {
      onTypeChange(selectedValue);
    }
  };

  const allOption = { label: 'all', value: null };
  const updatedOptions = [allOption, ...options];

  return (
    <div className="base-container">
      <Listbox
        value={selectedOption}
        onChange={handleChange}
      >
        {({ open }) => (
          <>
            <Listbox.Button
              className={cn('base-select', { 'base-select-open': open })}
            >
              {options.find((opt) => opt.value === selectedOption)?.label
              || 'Select options'}
              <span className="icon">
                {open ? (
                  <img src={iconUp} alt="icon-up" />
                ) : (
                  <img src={iconDown} alt="icon-up" />
                )}
              </span>
            </Listbox.Button>

            {open && (
              <Transition
                show={open}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="options">
                  {updatedOptions.map(({ label, value: optionValue }) => (
                    <Listbox.Option
                      key={optionValue}
                      value={optionValue}
                    >
                      {({ active }) => (
                        <div
                          className={cn('list',
                            { 'base-select-hover': active })}
                        >
                          {label}
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            )}
          </>
        )}
      </Listbox>
    </div>
  );
};
