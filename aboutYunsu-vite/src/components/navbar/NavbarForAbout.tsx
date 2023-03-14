import { NavLink } from "react-router-dom";
import * as S from "./styled";

export const NavbarForAbout = () => {

  const activeStyleInAbout = {
    color: '1e1e1e'
  }
  const nonActiveStyleInAbout = {
    color: 'rgba(30, 30, 30, 0.41)'
  }

  return (
    <S.Container>
      <S.NavList>
        <NavLink
            to='/about'
            style={({isActive}) => isActive ? activeStyleInAbout : nonActiveStyleInAbout}
          >
            About
        </NavLink>
      </S.NavList>
      <S.NavList>
        <NavLink
            to='/works'
            style={({isActive}) => isActive ? activeStyleInAbout : nonActiveStyleInAbout}
          >
            Works
        </NavLink>
      </S.NavList>
      <S.NavList>
        <NavLink
            to='/experience'
            style={({isActive}) => isActive ? activeStyleInAbout : nonActiveStyleInAbout}
          >
            Experience
        </NavLink>
      </S.NavList>
    </S.Container>
  );
};
