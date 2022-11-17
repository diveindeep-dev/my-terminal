import type { NextPage } from 'next';
import { useRef, useState, useEffect } from 'react';
import HistoryList from '../components/HistoryList';
import Prompt from '../components/Prompt';
import Input from '../components/input';
import { History } from '../config/type';
import shell from '../utils/shell';

const Home: NextPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [history, setHistory] = useState<History[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHistory([]);
    setHistory([{ id: 0, command: '', result: shell('start') }]);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView(false);
    }
  }, [history]);

  const onClickAnywhere = () => {
    inputRef.current?.focus();
  };

  return (
    <div onClick={onClickAnywhere} className="min-w-[800px]">
      <div className="fixed top-0 w-full h-9 px-1 bg-gray-100 z-50">
        <div className="flex items-center justify-items-center">
          <div className="px-1 text-2xl text-red-400">●</div>
          <div className="px-1 text-2xl text-yellow-400">●</div>
          <div className="px-1 text-2xl text-green-400">●</div>
        </div>
      </div>
      <div
        className="px-5 pt-16 pb-4 min-h-screen text-sm text-white bg-gray-800"
        ref={scrollRef}
      >
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
