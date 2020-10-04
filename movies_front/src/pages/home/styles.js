import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  border: 4px double black;
  width: 80%;
  min-height: 20vh;
  text-align: center;
  padding: 2%;
  background-color: whitesmoke;
  margin-bottom: 2%;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  margin-bottom: 2%;
`;

export const Button = styled.button`
  height: 30px;
  width: 120px;
  align-self: center;
  margin: 0;
`;

export const Table = styled.table`
  width: 80%;
  border: 4px double black;
  margin: auto;
  background-color: white;
`;
