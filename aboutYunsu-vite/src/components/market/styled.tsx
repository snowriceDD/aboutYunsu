import Style from "styled-components";

export const Container = Style.div`
    display: grid; 
    grid-template-columns: 3fr 1.4fr 1fr 0.4fr; 
    grid-template-rows: 0.4fr 0.3fr 1fr 0.5fr 0.8fr 0.8fr 3.2fr; 
    gap: 10px 10px; 
    grid-template-areas: 
        "img title title share"
        "img subTitle subTitle subTitle"
        "img tagZone tagZone tagZone"
        "img recentPrice recentPrice recentPrice"
        "img button1 button2 button2"
        "img coffee coffee coffee"
        "details details details details"; 
    width: 60vw;
    height: 500px;
    background: #D9D9D9;
    border-radius: 15px;
    margin: 100px auto;
    padding: 10px;

    .imgTag {
        grid-area: img;
        max-width: 100%;
        max-height: 100%;
    }

    .title {
        grid-area: title;
        font-weight: 700;
        font-size: 1.5rem;
        text-decoration-line: underline;
    }

    .subTitle {
        grid-area: subTitle;
        font-weight: 300;
        font-size: 1rem;
    }

    .tagZone {
        grid-area: tagZone;
    }

    .recentPrice {
        grid-area: recentPrice;
    }

    .button1 {
        grid-area: button1;
    }

    .button2 {
        grid-area: button2;
    }

    .coffee {
        grid-area: coffee;
    }

    .details {
        grid-area: details;
    }
`;