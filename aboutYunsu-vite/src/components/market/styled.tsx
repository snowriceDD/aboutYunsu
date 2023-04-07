import Style from "styled-components";

export const Container = Style.div`
    display: grid; 
    grid-template-columns: 3fr 1.4fr 1fr 0.4fr; 
    grid-template-rows: 0.4fr 0.3fr 1fr auto 0.8fr 0.8fr 3.2fr; 
    gap: 10px 10px; 
    grid-template-areas: 
        "img title title share"
        "img subTitle subTitle subTitle"
        "img tagZone tagZone tagZone"
        "img recentPrice recentPrice recentPrice"
        "img button1 button2 button2"
        "img coffee coffee coffee"
        "details details details details"; 
    width: auto;
    max-width: 720px;
    height: 500px;
    background: rgba(217, 217, 217, 0.1);
    border-radius: 15px;
    margin: 100px auto;
    padding: 10px;
    color: #ffffff;

    .imgTag {
        grid-area: img;
        max-width: 100%;
        max-height: 100%;
        justify-self: center;
    }

    .title {
        grid-area: title;
        font-weight: 700;
        font-size: 1.3rem;
        text-decoration-line: underline;
    }

    .share {
        grid-area: share;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }

    .subTitle {
        grid-area: subTitle;
        font-weight: 300;
        font-size: 1rem;
    }

    .tagZone {
        grid-area: tagZone;
        word-wrap: break-word;
        line-height: 1.6;
        a {
            color: #1e1e1e;
            font-size: 0.8rem;
            font-weight: 400;
            margin-right: 5px;
            padding: 1px 10px;
            border-radius: 15px;
            background: rgb(217 217 217 / 50%);
        }
    }

    .recentPrice {
        grid-area: recentPrice;
        font-size: 0.9rem;
    }

    .button1 {
        grid-area: button1;
        color: #ffffff;
        background: #000000;
        border-radius: 5px;
        text-align: center;
        :hover {
            background: rgb(0 0 0 / 70%)
        }
    }

    .button2 {
        grid-area: button2;
        color: #ffffff;
        background: #000000;
        border-radius: 5px;
        text-align: center;
        :hover {
            background: rgb(0 0 0 / 70%)
        }
    }

    .coffee {
        grid-area: coffee;
        background: none;
        border: 1px solid black;
        border-radius: 5px;
        text-align: center;
        :hover {
            background: rgb(0 0 0 / 10%)
        }
    }

    .details {
        grid-area: details;
    }
`;