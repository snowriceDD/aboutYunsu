import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/Navbar";
import { Items } from "@/components/works/Items";
import * as S from '@/components/works/styled';

export const Works = () => {
    return (
      <S.Container>
        <Navbar/>
        <S.ItemContainer>
          <Items></Items>
          <Items></Items>
          <Items></Items>
          <Items></Items>
          <Items></Items>
        </S.ItemContainer>
        <Footer/>
      </S.Container>
    );
  };
  