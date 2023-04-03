import { NavLink } from "react-router-dom";
import * as S from "./styled";

export const Navbar = () => {

  const activeStyle = {
    color: 'white'
  }
  const nonActiveStyle = {
    color: 'rgba(255, 255, 255, 0.4)'
  }
  
  return (
    <S.Container>
      <S.NavList>
        <NavLink
            to='/about'
            style={({isActive}) => isActive ? activeStyle : nonActiveStyle}
          >
            About
        </NavLink>
      </S.NavList>
      <S.NavList>
        <NavLink
            to='/works'
            style={({isActive}) => isActive ? activeStyle : nonActiveStyle}
          >
            Works
        </NavLink>
      </S.NavList>
      <S.NavList>
        <NavLink
            to='/market'
            style={({isActive}) => isActive ? activeStyle : nonActiveStyle}
          >
            Market
        </NavLink>
      </S.NavList>
    </S.Container>
  );
};
