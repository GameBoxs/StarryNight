import styled from 'styled-components';

export const DictMainBox = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: red;
`;
export const DictItemBox = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: blue;
  flex-direction: column;
`;

export const DictSubBox = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: green;
`;

export const BjrBox = styled.div`
  width: 14%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: purple;
  flex-direction: column;
`;

export const BjrPhoto = styled.div`
  width: 160px;
  height: 160px;
  display: flex;
  font-size: 1.5rem;
  color: whitesmoke;
  align-items: center;
  justify-content: center;
  background: #016040;
  border-radius: 50%;
  border-color: pink;
  border-width: 3px;
  border-style: solid;
`;

export const BjrName = styled.div`
  width: 160px;
  height: 80px;
  display: flex;
  font-size: 1.3rem;
  color: whitesmoke;
  align-items: center;
  justify-content: center;
  background: #016040;
  border-radius: 10px;
  border-color: purple;
  border-width: 3px;
  border-style: solid;
`;
