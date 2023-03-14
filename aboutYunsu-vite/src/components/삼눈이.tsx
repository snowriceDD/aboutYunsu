import { EyeSVG } from "@/assets/EyeSVG";
import { LandingSVG } from "@/assets/LandingSVG";
import { useEffect, useRef, useState } from "react";
import { 컨테이너 } from "./styled";

export const 삼눈이 = (props : any) => {

    return (
        <컨테이너>
        <LandingSVG ></LandingSVG>
        <EyeSVG className="eye-styled" style={{ transform: `translate(${props.props.x}px, ${props.props.y}px)` }}/>
        </컨테이너>
    )
}