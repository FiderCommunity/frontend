import styled from 'styled-components';


export const Container = styled.div`
  margin: 2.5% 5%;
`;


export const InputList = styled.div`
  display: grid;
  max-width: 450px;
`


export const ProjectsList = styled.div`
  margin-bottom: 50px;
`

export const Card = styled.li`
  button {
    border: none;
    background-color: #e5e5e5;
  }

  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  
  display: inline-flex;
  list-style: none;

  padding: 15px 15px;
  margin-bottom: 3%;
  margin-right: 3%

`;

export const Name = styled.div`
    text-align: center;
    color: #312e38;
    text-decoration: none;
    margin-right: 15px
`;

export const CardContainer = styled.ul``