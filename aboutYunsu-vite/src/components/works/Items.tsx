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
            {(data.data.link !== "string") ? <a className='inlink' href={data.data.link}><img src='src/assets/inlink.png' alt='해당 작품의 배포 주소'></img></a>: <a/>}
            {(data.data.github !== "string") ? <a className='github' href={data.data.github}><img src='src/assets/github.png' alt='해당 작품의 github 주소'></img></a> : <a/>}
            <img className='imgPlace' src={data.data.imgSrc}/>
            <div className='tag'>
                {data.data.tagName}
            </div>
            <div className='mainTitle'>{data.data.mainTitle}</div>
            <div className='subTitle'>{data.data.subTitle}</div>
        </S.ItemsCard>
    )
};