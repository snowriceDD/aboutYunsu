import Style from 'styled-components';

export const Container = Style.div`
    width: 100vw;
    height: auto;
    background: #8FFF00;

    .child-h2 {
        font-weight: 700;
        text-align: center;
        font-size: 1.5rem;
        line-height: 1.3;
        position: relative;
        z-index: 10;
    }

    .child-h3 {
        font-weight: 350;
        // padding-top: 35vh;
        text-align: center;
        font-size: 1.5rem;
        line-height: 1.3;
        position: relative;
        z-index: 10;
    }

    .secend-child-h2 {
        font-weight: 700;
        text-align: center;
        font-size: 1.5rem;
        line-height: 1.3;
        position: relative;
        z-index: 10;
    }
    
    .first-child-div {
        font-weight: 350;
        text-align: center;
        font-size: 1.1rem;
        line-height: 1.3;
        position: relative;
        z-index: 10;
    }

    .second-child-div {
        font-weight: 400;
        text-align: center;
        font-size: 1.3rem;
        line-height: 2.5;
        position: relative;
        z-index: 10;

        .strong {
            font-weight: 700;
        }
    }

    .img_block {
        position: relative;
        display: flex;
        width: 40%;
        margin: 0 auto;
        justify-content: space-evenly;
        z-index: 5;
    }
`

export const ViewPortBlock = Style.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`