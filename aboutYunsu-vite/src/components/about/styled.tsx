import Style from 'styled-components';

export const Container = Style.div`
    width: 100vw;
    height: 100vh;
    background: #8FFF00;

    > h2 {
        font-weight: 700;
        text-align: center;
        font-size: 1.5rem;
        line-height: 1.3;
    }

    > h3 {
        font-weight: 350;
        margin-top: 35vh;
        text-align: center;
        font-size: 1.5rem;
        line-height: 1.3;
    }
`