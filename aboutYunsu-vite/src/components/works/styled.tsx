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
    display: grid; 
    padding: 5px;
    grid-template-columns: auto 1fr 1fr 15px 15px; 
    grid-template-rows: auto 150px 1rem auto auto; 
    gap: 7px 7px; 
    grid-template-areas: 
    "cardHeader cardHeader cardHeader inlink github"
    "imgPlace imgPlace imgPlace imgPlace imgPlace"
    "tag null null null null"
    "mainTitle mainTitle mainTitle mainTitle mainTitle"
    "subTitle subTitle subTitle subTitle subTitle"; 

    color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 2px;

    .cardHeader {
        grid-area: cardHeader;
        color: #599e00;
        letter-spacing: 0.1em;
        font-size: 0.8rem;
        font-weight: 400;
      }
    .github {
        grid-area: github;
        img {
            width: 13px;
            height: 13px;
            opacity: 0.5;
        }
    }
    .inlink {
        grid-area: inlink;
        img {
            width: 13px;
            height: 13px;
            opacity: 0.5;
        }
    }
    .imgPlace {
        width: 100%;
        // max-width: 360px;
        height: 100%;
        max-height: 150px;
        grid-area: imgPlace;
        overflow: hidden;
        position: relative;
        object-fit: scale-down;
    }
    .tag {
        grid-area: tag;
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
