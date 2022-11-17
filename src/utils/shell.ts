import * as commands from './command';

const allCommands: { [key in string]: any } = commands;

const shell = (input: string) => {
  const splitCommand = input.split(' ');
  const firstCommand = splitCommand[0].toLowerCase();
  let output;

  if (!allCommands.hasOwnProperty(firstCommand)) {
    output = `command not fount: ${input}. Try 'help' to get started. `;
  } else {
    output = allCommands[firstCommand]();
  }

  return output;
};

export default shell;
