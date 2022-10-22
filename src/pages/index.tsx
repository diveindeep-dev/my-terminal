import type { NextPage } from 'next';
import { useRef, useState } from 'react';
import HistoryList from '../components/HistoryList';
import Prompt from '../components/Prompt';
import Input from '../components/input';
import { History } from '../config/type';

const Home: NextPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [history, setHistory] = useState<History[]>([]);

  const onClickAnywhere = () => {
    inputRef.current?.focus();
  };

  return (
    <div onClick={onClickAnywhere} className="min-w-[800px]">
      <div className="h-9 px-1 bg-gray-100">
        <div className="flex items-center justify-items-center">
          <div className="px-1 text-2xl text-red-400">●</div>
          <div className="px-1 text-2xl text-yellow-400">●</div>
          <div className="px-1 text-2xl text-green-400">●</div>
        </div>
      </div>
      <div className="px-5 py-3 min-h-screen text-sm text-white bg-gray-800">
        <HistoryList history={history} />
        <Prompt>
          <Input
            inputRef={inputRef}
            setHistory={setHistory}
            history={history}
          />
        </Prompt>
      </div>
    </div>
  );
};

export default Home;
