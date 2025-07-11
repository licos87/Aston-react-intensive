import {
  type ChangeEvent, type DetailedHTMLProps, type SelectHTMLAttributes
} from 'react';
import clsx from 'clsx';

import cls from './Select.module.css'

interface SelectProps extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  options: {
    value: string;
    label: string;
  }[];
  selected: string;
  onSelected: (selectValue: string) => void;
}

const Select = ({
  options,
  selected,
  onSelected,
  className,
  ...props
}: SelectProps) => {

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onSelected(event.target.value);
  }

  return (
    <select className={clsx(cls.select, className)}
            value={selected}
            onChange={handleChange} {...props}>
      {
        options.map(option => (
          <option value={option.value}
                  key={option.value}
          >{option.label}</option>
        ))
      }
    </select>
  );
};

export { Select, type SelectProps }
