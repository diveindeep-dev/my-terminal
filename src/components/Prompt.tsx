import React, { ReactNode } from 'react';
import config from '../config';

interface PromptProps {
  children: ReactNode;
}

const Prompt = ({ children }: PromptProps) => {
  return (
    <div className="my-1 flex items-center">
      <div className="arrow whitespace-nowrap text-gray-800 bg-pastelBlue after:border-l-pastelBlue">
        {config.name}@{config.title}
      </div>
      <div className="arrow text-gray-800 bg-pastelOrange after:border-l-pastelOrange">
        ~
      </div>
      {children}
    </div>
  );
};

export default Prompt;
