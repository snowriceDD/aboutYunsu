import { Container } from "@/components/market/styled";
import { Navbar } from "@/components/navbar/Navbar";

export const Market = () => {
    return (
      <div>
        <Navbar/>
        <Container>
          <img className="imgTag" src="src/assets/profile.png" />
          <div className="title">Kim Yunsu</div>
          <div className="subTitle">Web Front-end Dev YS.Kim 2022</div>
          <div className="tagZone">tag1 tag2</div>
          <div className="recentPrice">최근 거래가 : </div>
          <button className="button1"></button>
          <button className="button2"></button>
          <button className="coffee"></button>
          <div className="details"></div>
        </Container>
      </div>
    );
  };
  