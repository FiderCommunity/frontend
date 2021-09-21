import styled from 'styled-components';


export const Container = styled.div`
    margin: 5% 5%;

    ul {
        display: flex;
        flex-wrap: wrap;
        padding-left: 0;
    }

`;

export const Card = styled.li`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

    list-style: none;
    flex: 0 0 18%;

    padding: 15px 15px;
    margin-bottom: 3%;

    & {
        margin-right: 5%;
    }
    
    &:nth-child(4n) {
        margin-right: 0;
    }

    a {
        text-decoration: none;
    }

`;

export const Image = styled.img`
    display: block;
    margin: auto auto;
`;

export const Name = styled.div`
    margin-top: 8%;
    text-align: center;
    color: #312e38;
    text-decoration: none;
`;