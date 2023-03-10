import 스타일 from 'styled-components';

export const 그리드컨테이너 = 스타일.div`
    width: 100vw;
    height: 100vh;
    // display: flex;

`;

export const 백그라운드베이스 = 스타일.div`
    width: 100vw;
    height: 100vh;
    background: 1E1E1E;
`;

export const 타원_형광 = 스타일.div`
    box-sizing: border-box;
    margin: auto;
    width: 50vh;
    height: 100vh;
    position: relative;

    border: 1px solid #8FFF00;
    border-radius:70% / 70%;
    transform: rotate(45deg);
`;

export const 메뉴_컨테이너 = 스타일.div`
    position: relative;
    display: flex;
    margin: auto;
    display: flex;
    width: 60%;
`;

export const 타원_형광_메뉴 = 스타일.div`
    box-sizing: border-box;
    margin: auto;
    width: 15vh;
    height: 30vh;
    
    background: #8FFF00;
    border: 0px solid #8FFF00;
    border-radius:70% / 70%;
    transform: rotate(45deg);
`;
