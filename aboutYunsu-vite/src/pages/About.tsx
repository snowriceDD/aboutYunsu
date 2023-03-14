import { NavbarForAbout } from "@/components/navbar/NavbarForAbout";
import * as S from '@/components/about/styled';
import { AboutSVG } from "@/assets/AboutSVG";

export const About = () => {
    return (
        <S.Container>
            <AboutSVG/>
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
        </S.Container> 
    );
  };
  