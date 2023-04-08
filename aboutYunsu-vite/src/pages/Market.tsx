import { ShareSVG } from "@/assets/ShareSVG";
import { Container } from "@/components/market/styled";
import { Navbar } from "@/components/navbar/Navbar";
import { NavLink } from "react-router-dom";

export const Market = () => {
    return (
      <div>
        <Navbar/>
        <Container className="market">
          <img className="imgTag" src="src/assets/profile.png" />
          <ShareSVG/>
          <div className="title">Kim Yunsu</div>
          <div className="subTitle">Web Front-end Dev YS.Kim 2022</div>
          <div className="tagZone">
            <a>Typescript</a>
            <a>React.js</a>
            <a>Redux</a>
            <a>Javascript</a>
            <a>Styled-Components</a>
            <a>Git</a>
            <a>Figma</a>
          </div>
          <div className="recentPrice">최근 거래가 : </div>
          <NavLink to='/sendoffer' className="button1">
            고용 입찰
          </NavLink>
          <NavLink to='/sendoffer' className="button2">
            즉시 고용
          </NavLink>
          <NavLink to='/sendoffer' className="coffee">
            커피챗 하기
          </NavLink>
          <div className="details">제품 설명</div>
        </Container>
      </div>
    );
  };
  