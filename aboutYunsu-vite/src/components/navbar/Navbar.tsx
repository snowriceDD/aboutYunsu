import { useNavigate } from "react-router-dom";
import * as S from "./styled";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <S.NavList onClick={() => navigate('/about')} >About</S.NavList>
      <S.NavList onClick={() => navigate('/works')} >Works</S.NavList>
      <S.NavList onClick={() => navigate('/experience')} >Experience</S.NavList>
    </div>
  );
};
