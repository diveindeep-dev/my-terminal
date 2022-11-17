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
  history: History[];
}

const Input = ({ inputRef, setHistory, history }: InputProps) => {
  const [command, setCommand] = useState<string>('');
  const [indexFromLast, setIndexFromLast] = useState<number>(0);

  const typedCommand: string[] = history
    .filter((item) => item.command.length > 0)
    .map((item) => item.command);

  const onSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.code === 'Enter') {
      e.preventDefault();

      if (command === '') {
        return setHistory((prev: History[]) => [
          ...prev,
          { id: prev.length + 1, command: '', result: '' },
        ]);
      }

      const output: string = shell(command);

      if (output === 'clear') {
        setHistory([]);
      } else if (output === 'restart') {
        setHistory([]);
        setHistory([{ id: 0, command: '', result: shell('start') }]);
      } else {
        setHistory((prev: History[]) => [
          ...prev,
          { id: prev.length + 1, command: command, result: output },
        ]);
      }

      setIndexFromLast(0);
      setCommand('');
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!typedCommand.length) return;

      const newIndex = indexFromLast + 1;
      if (newIndex <= typedCommand.length) {
        setIndexFromLast(newIndex);
        setCommand(typedCommand[typedCommand.length - newIndex]);
      }
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!typedCommand.length) return;

      const newIndex = indexFromLast - 1;
      if (newIndex > 0) {
        setIndexFromLast(newIndex);
        setCommand(typedCommand[typedCommand.length - newIndex]);
      } else {
        setIndexFromLast(0);
        setCommand('');
      }
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
