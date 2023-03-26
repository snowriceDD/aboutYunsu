import { LandingSVG } from "@/assets/LandingSVG";
import { HomeSVG } from '@/assets/HomeSVG';
import * as S from "@/components/threeEyes/styled";
import { useState, useEffect, useRef } from "react";

export const Home = () => {
  return (
    <div>
      <S.그리드컨테이너>
            <S.백그라운드베이스 >
              <S.컨테이너>
                <HomeSVG />  
              </S.컨테이너>
            </S.백그라운드베이스>
        </S.그리드컨테이너>
    </div>
  );
};