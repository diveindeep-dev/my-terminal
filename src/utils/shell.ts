import * as commands from './commands';

const allCommands: { [key in string]: any } = commands;

const shell = (input: string) => {
  const splitCommand = input.split(' ');
  const firstCommand = splitCommand[0].toLowerCase();
  const output = allCommands[firstCommand]();

  return output;
};

export default shell;
