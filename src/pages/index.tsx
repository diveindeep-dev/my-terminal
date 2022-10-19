import type { NextPage } from 'next';
import { useRef, useState } from 'react';
import HistoryList from '../components/HistoryList';
import Input from '../components/input';
import { History } from '../config/type';

const Home: NextPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [history, setHistory] = useState<History[]>([]);

  const onClickAnywhere = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="text-sm">
      <div onClick={onClickAnywhere} className="h-screen">
        <HistoryList history={history} />
        <Input inputRef={inputRef} setHistory={setHistory} />
      </div>
    </div>
  );
};

export default Home;
