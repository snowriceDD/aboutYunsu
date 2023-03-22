import { EyeSVG } from '@/assets/EyeSVG';
import 스타일 from 'styled-components';

export interface 컨테이너프룹 {
    x: number;
    y: number;
  }

export const 그리드컨테이너 = 스타일.div`
    width: 100vw;
    height: 100vh;
    // display: flex;

`;

export const 백그라운드베이스 = 스타일.div`
    width: 100vw;
    height: 100vh;
    background: 1E1E1E;

    .landing_text {
        position: relative;
        top: 25%;
        text-align: center;
        margin: auto;
        color: white;
        font-family: 'Kulim Park';
        font-style: normal;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 0;
    }
    .landing_text2 {
        position: fixed;
        bottom: 5%;
        right: 3%;
        margin: auto;
        color: white;
        font-family: 'Kulim Park';
        font-style: normal;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 0;
    }
    .landing_text3 {
        position: relative;
        text-align: center;
        top: 30%;
        margin: 0 auto;
        color: white;
        font-family: 'Kulim Park';
        font-style: normal;
        font-weight: 200;
        font-size: 1rem;
        line-height: 0;
    }
`;

export const 컨테이너 = 스타일.div`
    display: flex;
    margin: auto;
    width: 60vw;
    height: 100vh;

    .eye-styled {
        transition: transform 0.1s ease-in-out;
        position: absolute;
        margin: auto;
        width: 60%;
    }
`;

export const 타원_형광 = 스타일.div`
    box-sizing: border-box;
    margin: auto;
    width: 60%;
    height: 100%;
    position: relative;

    border: 1px solid #8FFF00;
    border-radius:70% / 70%;
    transform: rotate(45deg);
`;

export const 메뉴_베이스 = 스타일.div`
    position: absolute;
    padding: 0 20%;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    // overflow-x: hidden;
    // overflow-y: hidden;
`;

export const 메뉴_컨테이너 = 스타일.div`
    position: absolute;
    display: flex;
    margin: 0 auto;
    width: 60%;
    height: 100%;
`;

export const 타원_형광_메뉴 = 스타일.div`
    box-sizing: border-box;
    margin: auto;
    width: 15%;
    height: 30%;
    
    background: #8FFF00;
    border: 0px solid #8FFF00;
    border-radius:70% / 70%;
    transform: rotate(45deg);
`;


