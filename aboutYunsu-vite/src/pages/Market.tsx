import { ShareSVG } from "@/assets/ShareSVG";
import { Container } from "@/components/market/styled";
import { Navbar } from "@/components/navbar/Navbar";
import { NavLink } from "react-router-dom";
import profile from '@/assets/profile.png';
import resume from '@/assets/resume.png';


export const Market = () => {
    const handleCopyClick = () => {
      navigator.clipboard.writeText(window.location.href);
      alert('클립보드에 복사되었습니다! \n원하는 곳에 붙여넣기(ctrl + V) 해주세요.')
    };

    return (
      <div>
        <Navbar/>
        <Container className="market">
          <img className="imgTag" src={profile} alt="프로필 이미지"/>
          <ShareSVG onClick={handleCopyClick}/>
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
          <div className="details">제품 설명
            <img src={resume} alt="웹 프론트엔드 개발자 김윤수 이력서"/>
          </div>
        </Container>
      </div>
    );
  };
  