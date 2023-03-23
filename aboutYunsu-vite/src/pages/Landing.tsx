// import { 그리드컨테이너, 백그라운드베이스, 타원_형광, 메뉴_베이스, 메뉴_컨테이너, 타원_형광_메뉴, 컨테이너 } from "@/components/styled";
import * as S from "@/components/threeEyes/styled";
import { useState, useEffect } from "react";
import { 삼눈이 } from "@/components/threeEyes/삼눈이";
import { NavLink, useNavigate } from "react-router-dom";

export const Landing = () => {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [eyeballPos, setEyeballPos] = useState({ x: 0, y: 0 }); 
    const [seconds, setSeconds] = useState(10);
    let navigate = useNavigate();

      const handleMouseMove = (e : any) => {
        setCursorPos({
          x: e.clientX - window.innerWidth/2,
          y: e.clientY - window.innerHeight/2,
        })
        setEyeballPos({
          x: cursorPos.x / 13,
          y: cursorPos.y / 13,
        })
      }

      useEffect(() => {
        if (seconds === 0) {
          navigate('/home');
        }
        const intervalId = setInterval(() => {
            setSeconds((seconds) => seconds - 1);
          }, 1000)
          return () => clearInterval(intervalId);
      }, [seconds]);

    return (
        <S.그리드컨테이너>
            <S.백그라운드베이스 onMouseMove={handleMouseMove}>
                <div className="landing_text">Develop + Design</div>
                <div className="landing_text3">{seconds}초 후 home으로 이동합니다.</div>
                <삼눈이 props={eyeballPos}/>
                <NavLink to='/home'>
                <div className="landing_text2" >START ↩</div>
                </NavLink> 
            </S.백그라운드베이스>
        </S.그리드컨테이너>
    );
}