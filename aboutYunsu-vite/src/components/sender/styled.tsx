import Style from "styled-components";

export const Container = Style.div`
font-size: 1rem;
font-weight: 400;

.form2 {
    display: flex;
    flex-direction: column;
    width: auto;
    max-width: 720px;
    height: 300px;
    background: rgba(217, 217, 217, 0.1);
    border-radius: 15px;
    margin: 100px auto;
    padding: 10px;
    color: #ffffff;
    justify-content: center;
}

.form { 
    display: flex;
    flex-direction: column;
    width: auto;
    max-width: 720px;
    height: 550px;
    background: rgba(217, 217, 217, 0.1);
    border-radius: 15px;
    margin: 100px auto;
    padding: 10px;
    color: #ffffff;
}

.title { 
    display: block;
    font-size: 1.3rem;
    font-weight: 600;
 }
input {
    background: #D9D9D9;
    border-radius: 5px;
    border-color: rgb(0, 0, 0, 0);
}

 .grid1 {
    margin-top: 15px;
    display: grid;
    grid-auto-columns: 1fr; 
    grid-template-columns: 0.6fr 0.4fr; 
    grid-template-rows: 1fr; 
    gap: 10px 10px; 
    grid-template-areas: 
        "name1 name2";

    input {
        margin-top: 5px;
        height: 35px;
    }
    .name { 
        display: grid;
        grid-area: name1;
    }
    .name2 {
        display: grid;
        grid-area: name2;
    }
 }
 .grid2 {
    margin-top: 15px;
    display: grid;
    grid-auto-columns: 1fr; 
    grid-template-columns: 0.6fr 0.4fr;
    grid-template-rows: 1fr; 
    gap: 10px 10px; 
    grid-template-areas: 
        "name1 name2";

    input {
        margin-top: 5px;
        height: 35px;
    }
    .name3 { 
        display: grid;
        grid-area: name1; 
    }
    .name4 { 
        display: grid;
        grid-area: name2;
    }
 }

.position { 
    display: grid;
    margin-top: 15px;
    form {
        margin-top: 5px;
    }
}
.howmoney { 
    display: grid;
    margin-top: 15px;

}
.moneyCount { 
    display: block; 
    align-self: center;
    margin-top: 5px;
    font-weight: 700;
    font-size: 1.2rem;

}
.contentsTitle { 
    display: contents; 
    input {
        width: auto;
        height: 30%;
        margin-top: 5px;
    }
    margin-top: 15px;
}
.submit {
    margin-top: 15px;
    align-self: end;
    width: 200px;
    height: 60px;
    background: #000000;
    border-radius: 10px;
    color: #ffffff;
    cursor: pointer;

    :hover {
        border: 1px solid rgb(100 100 100);
    }
}
.afterSubmit {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
}
`;
