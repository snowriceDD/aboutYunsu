// import { 그리드컨테이너, 백그라운드베이스, 타원_형광, 메뉴_베이스, 메뉴_컨테이너, 타원_형광_메뉴, 컨테이너 } from "@/components/styled";
import * as S from "@/components/styled";
import { useState, useEffect, useRef } from "react";
import { LandingSVG } from "@/assets/LandingSVG";
import { EyeSVG } from "@/assets/EyeSVG";
import { 삼눈이 } from "@/components/삼눈이";

export const Landing = () => {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [eyeballPos, setEyeballPos] = useState({ x: 0, y: 0 }); 
    const eyeballRef = useRef(null);
    
      const handleMouseMove = (e : any) => {
        setCursorPos({
          x: e.clientX - window.innerWidth/2,
          y: e.clientY - window.innerHeight/2,
        })
        // const {x, y} = cursorPos;
        setEyeballPos({
          x: cursorPos.x / 13,
          y: cursorPos.y / 13,
        })
        // console.log('props:',cursorPos.x, cursorPos.y, cursorPos, typeof(cursorPos));  
      }

    return (
        <S.그리드컨테이너>
            <S.백그라운드베이스 onMouseMove={handleMouseMove}>
                <div className="landing_text">Develop + Design</div>
                <삼눈이 props={eyeballPos}/>
                <div className="landing_text2">START ↩</div>
            </S.백그라운드베이스>
        </S.그리드컨테이너>
    );
}