import React, { Fragment } from 'react';
import Prompt from './Prompt';
import { History } from '../config/type';

interface HistoryListProp {
  history: History[];
}

const HistoryList = ({ history }: HistoryListProp) => {
  return (
    <div>
      {history.map((item: History, i: number) => (
        <Fragment key={i}>
          <Prompt>
            <div className="ml-4">{item.command}</div>
          </Prompt>
          <div className="whitespace-pre-wrap">{item.result}</div>
        </Fragment>
      ))}
    </div>
  );
};

export default HistoryList;
