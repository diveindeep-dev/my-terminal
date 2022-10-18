import type { NextPage } from 'next';
import { useRef, useState, ChangeEvent } from 'react';
import Input from '../components/input';

const Home: NextPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [command, setCommand] = useState<string>('');

  const onClickAnywhere = () => {
    inputRef.current?.focus();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value);
  };

  return (
    <div>
      <div onClick={onClickAnywhere} className="h-screen">
        <Input
          inputRef={inputRef}
          handleChange={handleChange}
          value={command}
        />
      </div>
    </div>
  );
};

export default Home;
