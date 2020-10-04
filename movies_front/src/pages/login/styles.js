import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 4px double black;
  width: 35%;
  height: 25%;
  text-align: center;
  padding: 2%;
  background-color: whitesmoke;
  margin: auto;
`;

export const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 35%;
  justify-content: space-between;
  margin: auto;
`;

export const Button = styled.button`
  height: 30px;
  width: 60%;
  align-self: center;
  margin: 0;
`;
