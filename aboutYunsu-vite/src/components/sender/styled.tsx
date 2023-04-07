import Style from "styled-components";

export const Container = Style.div`
    .form { 
    display: flex;
    flex-direction: column;
    width: auto;
    max-width: 720px;
    height: 500px;
    background: rgba(217, 217, 217, 0.1);
    border-radius: 15px;
    margin: 100px auto;
    padding: 10px;
    color: #ffffff;

}
.title { 
    display: block;
 }

 .grid1 {
    display: grid;
    grid-auto-columns: 1fr; 
    grid-template-columns: repeat(2, 1fr); 
    grid-template-rows: 1fr; 
    gap: 10px 10px; 
    grid-template-areas: 
        "name1 name2";
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
    display: grid;
    grid-auto-columns: 1fr; 
    grid-template-columns: repeat(2, 1fr); 
    grid-template-rows: 1fr; 
    gap: 10px 10px; 
    grid-template-areas: 
        "name1 name2";
    .name3 { 
        display: grid;
        grid-area: name1; 
    }
    .name4 { 
        display: grid;
        grid-area: name2;
    }
 }

.name3 { display: contents; }
.name4 { display: contents; }
.position { grid-area: position; }
.howmoney { display: contents; }
.moneyCount { 
    display: block; 
    align-self: center;
}
.contentsTitle { 
    display: contents; 
    input {
        width: auto;
        height: 20%;
    }
}
.submit { 
    align-self: end;
    width: 100px;
    height: 40px;
    
}

`;
