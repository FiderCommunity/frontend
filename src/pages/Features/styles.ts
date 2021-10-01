import styled from 'styled-components';

export const Container = styled.div`
    margin: 2.5% 5%;

    ul {
        display: flex;
        flex-wrap: wrap;
        padding-left: 0;
    }

`;

export const Card = styled.li`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

    list-style: none;
    flex: 0 0 25%;

    padding: 15px 15px;
    margin-bottom: 3%;

    & {
        margin-right: 5%;
    }
    
    &:nth-child(3n) {
        margin-right: 0;
    }

    a {
        text-decoration: none;
        color: #312e38;
    }

`;

export const TitleSection = styled.div`
    display: flex;
    margin-bottom: 20px;
`;

export const UserPic = styled.img`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-right: 20px;
`;

export const Title = styled.div`
    color: #312e38;
    text-decoration: none;
    height: 50px;
`;

export const Description = styled.div`
    display: block;
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
    display: -webkit-box; -webkit-line-clamp: 5; 
    -webkit-box-orient: vertical;
`


export const TagContainer = styled.ul`
    margin-top: 20px;
`

export const Tag = styled.li`
    flex: 0 0 auto;
    padding: 5px;
    

    border-radius: 7%;
    list-style: none;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

    & {
        margin-right: 5%;
    }
`


export const SearchContainer = styled.div`
    margin-bottom: 2%;
    display: flow-root;
`

export const Input = styled.input`
    width: 250px;
    font-size: 16px;
    padding: 10px;
    background-color: #e5e5e5;
    border: #cfcfcf 0.1px solid;
    float: right;
    margin-right: 10px;
    `
    
export const Select = styled.select`
    width: 250px;
    font-size: 16px;
    padding: 10px;
    background-color: #e5e5e5;
    border: #cfcfcf 0.1px solid;
    float: right;
    margin-right: 10px;

    color: #6a6a6a;
`