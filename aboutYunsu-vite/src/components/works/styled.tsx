import Style from 'styled-components';

export const Container = Style.div`
    width: 100vw;
    height: auto;
    `

export const ItemContainer = Style.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    gap: 10px;
    width: 60vw;
    min-width: 360px;
    height: auto;
    margin: 100px auto;
`

export const Block = Style.div`
    width: 100%;
    height: 300px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.1);
`
