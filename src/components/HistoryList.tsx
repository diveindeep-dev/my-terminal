import React, { Fragment } from 'react';
import { History } from '../config/type';

interface HistoryListProp {
  history: History[];
}

const HistoryList = ({ history }: HistoryListProp) => {
  return (
    <div>
      {history.map((item: History, i: number) => (
        <Fragment key={i}>
          <div>{item.command}</div>
          <div className="whitespace-pre-wrap">{item.result}</div>
        </Fragment>
      ))}
    </div>
  );
};

export default HistoryList;
