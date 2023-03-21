import Style from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = Style.div`
    display: flex;
    width: 100vw;
    height: 5vh;
    justify-content: center;
    position: fixed;
`


export const NavList = Style.li`
    list-style: none;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 10px 20px;
    z-index: 100000000;
`