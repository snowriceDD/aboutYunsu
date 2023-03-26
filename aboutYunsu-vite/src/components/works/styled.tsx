import Style from 'styled-components';

export const Container = Style.div`
    width: 100vw;
    height: auto;
    `

export const ItemContainer = Style.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    gap: 20px;
    width: 40vw;
    min-width: 360px;
    height: auto;
    margin: 100px auto;
`

export const ItemsCard = Style.div`
    width: 100%;
    height: 300px;
    display: grid; 
    grid-template-columns: auto; 
    grid-template-rows: 0.5fr 5fr 0.5fr 0.5fr 1fr; 
    gap: 7px 10px; 
    grid-template-areas: 
    "cardHeader cardHeader cardHeader cardHeader cardHeader"
    "imgPlace imgPlace imgPlace imgPlace imgPlace"
    "tag tag tag tag tag"
    "mainTitle mainTitle mainTitle mainTitle mainTitle"
    "subTitle subTitle subTitle subTitle subTitle"; 
    color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 2px;

    .cardHeader {
        grid-area: cardHeader;
        color: #599e00;
        margin: 5px 5px;
        letter-spacing: 0.1em;
        font-size: 0.8rem;
        font-weight: 400;
      }
    .imgPlace {
        width: 100%;
        height: auto;
        grid-area: imgPlace;
        overflow: hidden;
    }
    .tag {
        // grid-area: tag;
        display: inline-block;
        border: 1px solid #599e00;
        box-sizing: border-box;
        border-radius: 10px;
        padding: 3px 5px 1px 5px;
        font-size: 0.7rem;
        margin: 0 5px;
        color: #599e00;
    }
    .mainTitle {
        grid-area: mainTitle;
        font-weight: 700;
        margin: 0 5px;
    }
    .subTitle {
        grid-area: subTitle;
        margin: 0 5px;
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.5);
    }
`
