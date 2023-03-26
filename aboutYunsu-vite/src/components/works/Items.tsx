import * as S from '@/components/works/styled';

export interface ItemsParams {
    categories: string;
    imgSrc: string;
    tagName: string;
    mainTitle: string;
    subTitle: string;
}

export const Items = (data:any) => {

    return (
        <S.ItemsCard>
            <div className='cardHeader'> &gt; [ {data.data.categories} ]</div>
            <img className='imgPlace' src='https://velog.velcdn.com/images/syoung125/post/812fac7c-fd39-4617-90e7-5b750ac51d23/Untitled.gif'/>
            <div className='tag'>
                {data.data.tagName}
            </div>
            <div className='mainTitle'>{data.data.mainTitle}</div>
            <div className='subTitle'>{data.data.subTitle}</div>
        </S.ItemsCard>
    )
};