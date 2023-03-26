import Style from 'styled-components';

export const Container = Style.div`
    width: 100vw;
    height: auto;
    `

export const ItemContainer = Style.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: space-between;
    gap: 10px;
    width: 60vw;
    min-width: 360px;
    height: auto;
    margin: 100px auto;
`

export const ItemsCard = Style.div`
    width: 100%;
    height: 300px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.1);
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr; 
    grid-template-rows: 0.5fr 5fr 0.5fr repeat(2, 1fr); 
    gap: 10px 10px; 
    grid-template-areas: 
    "cardHeader cardHeader cardHeader cardHeader cardHeader"
    "imgPlace imgPlace imgPlace imgPlace imgPlace"
    "tag tag tag tag tag"
    "mainTitle mainTitle mainTitle mainTitle mainTitle"
    "subTitle subTitle subTitle subTitle subTitle"; 
    color: #ffffff;

    .cardHeader {
        grid-area: cardHeader;
        color: #8FFF00;
      }
    .imgPlace {
        grid-area: imgPlace;
    }
    .tag {
        grid-area: tag;
    }
    .mainTitle {
        grid-area: mainTitle;
    }
    .subTitle {
        grid-area: subTitle
    }
`
