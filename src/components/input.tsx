import React, {
  ChangeEvent,
  RefObject,
  KeyboardEvent,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import shell from '../utils/shell';
import { History } from '../config/type';

interface InputProps {
  inputRef: RefObject<HTMLInputElement>;
  setHistory: Dispatch<SetStateAction<History[]>>;
}

const Input = ({ inputRef, setHistory }: InputProps) => {
  const [command, setCommand] = useState<string>('');

  const onSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.code === 'Enter') {
      e.preventDefault();

      const output: string = shell(command);
      setHistory((prev: History[]) => [
        ...prev,
        { id: prev.length + 1, command: command, result: output },
      ]);

      setCommand('');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value);
  };

  return (
    <input
      className="ml-4 w-full focus:outline-none bg-transparent"
      type="text"
      ref={inputRef}
      onChange={handleChange}
      onKeyDown={onSubmit}
      value={command}
    />
  );
};

export default Input;
