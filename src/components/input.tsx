import React, { ChangeEvent, RefObject } from 'react';

interface InputProps {
  inputRef: RefObject<HTMLInputElement>;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Input = ({ inputRef, handleChange, value }: InputProps) => {
  return (
    <input
      className=""
      type="text"
      ref={inputRef}
      onChange={handleChange}
      value={value}
    />
  );
};

export default Input;
