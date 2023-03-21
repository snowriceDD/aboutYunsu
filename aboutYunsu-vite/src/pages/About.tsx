import { NavbarForAbout } from "@/components/navbar/NavbarForAbout";
import * as S from '@/components/about/styled';
import { AboutSVG } from "@/assets/AboutSVG";

export const About = () => {
    return (
        <S.Container>
            <AboutSVG />
            <NavbarForAbout/>
            <h3>
                세상에 있는 불편함을 해결하고자 산업디자인을 전공했습니다.<br/>
                사용자 시점에서 고민하는 것을 좋아합니다.<br/>
            </h3>
            <h2>
                <br/>
                저는 손에 닿는 서비스를<br/>
                그리고 손에 닿는 그 어떤 부분도<br/>
                모나지 않은 서비스를 만드는 것이 목표입니다.
            </h2>
            <h2 className="secend-child-h2">
                "나만의 도구를 만들어 보자"<br/>
            </h2>
            <div className="first-child-div">
                개발을 시작하기 전, 특허업에 종사했었습니다. <br/><br/>
                업무 상, 시장 조사 또는 관련 기술 조사를 위해 구글 검색을 굉장히 많이 사용해야 했으며, <br/>
                목적에 맞는 정보를 얻기 위해서 구글 검색 명령어를 잘 활용하는 것이 중요했습니다. <br/>
                <br/>구글 명령어를 전부 외워서 사용하기는 불편했고,<br/> 명령어 표를 보며 어느정도 조합만 잘 해주면 되겠다는 생각이 들었습니다. <br/>
                <br/>계산기처럼요! <br/>
                <br/>
                그래서 얉게 알고있던 HTML, CSS, Js를 사용하여<br/>
                계산기 만들듯 "Google SearcHero"라는 구글 확장프로그램을 만들었습니다.<br/>
                그리고 팀원들에게 크롬에 설치하고 써보라고 권유도 했습니다!<br/>
                <br/>
                이렇게... 웹 개발에 흥미가 생겼고, 시작하게 되었습니다.
            </div>
            <h2 className="secend-child-h2">
                Skill
            </h2>
            <div className="second-child-div">
            <strong className="strong">TypeScript, React 등을 활용</strong>한 <strong className="strong">JavaScript 기반 웹 개발</strong>을 하고 있습니다.
                <br/>
                <strong className="strong">디자인 방법론을 활용한 문제 접근</strong>으로 효과적인 솔루션을 찾습니다.
                <br/>
                <strong className="strong">사용자 경험을 중시</strong>하며, <strong className="strong">사용자의 눈으로 바라보기</strong> 위해 노력합니다.
                <br/>
                디자이너, 마케터 직무 경험으로 <strong className="strong">타 직무와 커뮤니케이션 이해관계가 높습니다.</strong>
            </div>
            
        </S.Container> 
    );
  };
  