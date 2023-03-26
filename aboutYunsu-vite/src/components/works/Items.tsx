import * as S from '@/components/works/styled';

export const Items = () => {

    return (
        <S.ItemsCard>
            <div className='cardHeader'> &gt; [ WEB SITE ]</div>
            <img className='imgPlace'/>
            <div className='tag'>tag</div>
            <div className='mainTitle'>Main Title</div>
            <div className='subTitle'>sub Title</div>
        </S.ItemsCard>
    )
};