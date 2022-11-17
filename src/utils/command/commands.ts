import config from '../../config';
import * as commands from './index';

export const clear = () => {
  return 'clear';
};

export const repo = () => {
  window.open(`https://www.github.com/${config.github}/${config.repo}`);
  return 'my-terminal의 repository를 새탭으로 열었습니다.';
};

export const blog = () => {
  window.open(`${config.blog}`);
  return '블로그를 새탭으로 열었습니다!';
};

export const mail = () => {
  return `${config.email}`;
};

export const social = () => {
  return `twitter <u><a href="https://twitter.com/${config.social.twitter}">@${config.social.twitter}</a></u>`;
};

export const contact = () => {
  return `
mail:     <u><a href="mailto:${config.email}">${config.email}</a></u>
github:   <u><a href="https://github.com/${config.github}">github.com/${config.github}</a></u>
twitter:  <u><a href="https://twitter.com/${config.social.twitter}">@${config.social.twitter}</a></u>
  `;
};

export const whoami = () => {
  return `안녕하세요👋🏻 ${config.name}입니다.

저의 개발 이야기가 궁금하신가요?
그럼 blog나 github 명령어를 입력해보세요.

저에게 연락을 하고 싶으신가요?
그렇다면 contact 명령어를 실행해보세요.

만나서 반갑습니다!
  `;
};

export const banner = () => {
  return `
𓂃𓂃𓂃𓂃𓂃𓂃𓊝 𓄹𓄺𓂃𓂃𓂃𓂃𓂃𓂃𓊝 𓄹𓄺𓂃𓂃𓂃𓂃𓂃𓂃𓂃𓂃𓂃𓊝 𓄹𓄺𓂃𓂃𓂃𓂃𓂃𓂃𓊝 𓄹𓄺𓂃𓂃𓂃𓂃
                                                                                    
██████╗ ██╗██╗   ██╗███████╗    ██╗███╗   ██╗    ██████╗ ███████╗███████╗██████╗    
██╔══██╗██║██║   ██║██╔════╝    ██║████╗  ██║    ██╔══██╗██╔════╝██╔════╝██╔══██╗   
██║  ██║██║██║   ██║█████╗      ██║██╔██╗ ██║    ██║  ██║█████╗  █████╗  ██████╔╝   
██║  ██║██║╚██╗ ██╔╝██╔══╝      ██║██║╚██╗██║    ██║  ██║██╔══╝  ██╔══╝  ██╔═══╝    
██████╔╝██║ ╚████╔╝ ███████╗    ██║██║ ╚████║    ██████╔╝███████╗███████╗██║        
╚═════╝ ╚═╝  ╚═══╝  ╚══════╝    ╚═╝╚═╝  ╚═══╝    ╚═════╝ ╚══════╝╚══════╝╚═╝        
                                                                                    
𓆉𓆝𓆟𓆜𓆞𓆡𓆜𓇼𓈒𓆉𓆝𓆟𓆜𓆞𓆡𓆜𓇼𓈒𓆉𓆝𓆟𓆜𓆞𓆡𓆜𓇼𓈒𓆉𓆝𓆟𓆜𓆞𓆡𓆜𓇼𓈒𓆉𓆝𓆟𓆜𓆞
                                                                                    
`;
};

export const github = () => {
  window.open(`https://www.github.com/${config.github}`);
  return `Github 페이지를 새탭으로 열었습니다.`;
};

export const help = () => {
  const commandKey = Object.keys(commands).join(' ');

  return `
사용 가능한 모든 명령어입니다.
                       
  ${commandKey}
  `;
};

export const start = () => {
  return `${banner()}
  * help 명령어를 입력하시면 모든 명령어를 볼 수 있습니다.
  * 방향키를 이용하면 이전에 작성된 명령어를 볼 수 있습니다.
  `;
};

export const restart = () => {
  return `restart`;
};
