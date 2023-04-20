import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/Navbar";
import { Items } from "@/components/works/Items";
import * as S from '@/components/works/styled';
import {ItemsParams} from '@/components/works/Items';
import propsData from '@/assets/data.json';
import { useEffect } from "react";

// interface Props extends ItemsParams {
//   map(arg0: (data: any) => any): import("react").ReactNode;
//   data: {
//     categories: string;
//     imgSrc: string;
//     tagName: string;
//     mainTitle: string;
//     subTitle: string;
//   }[];
// }

export const Works = () => {
  
    return (
      <S.Container>
        <Navbar/>
        <S.ItemContainer>
          {propsData.map((data) => (
            <Items data={data}></Items>
          ))}
        </S.ItemContainer>
        <Footer/>
      </S.Container>
    );
  };
  