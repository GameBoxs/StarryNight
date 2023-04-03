import styled from 'styled-components';
import Slider from 'react-slick';

export const StarInfoContainer = styled.div`
  width: 200vw;
  height: 200vh;
  display: flex;
  align-items: center;
  justify-content: middle;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const StarInfoBox = styled.dialog`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 600px;
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
`;

export const StarInfoTitle = styled.div`
  width: 100%;
  height: 10%;
  background-color: #330033;
  align-items: center;
  justify-content: center;
  align-content: center;
  color: floralwhite;
`;
export const StarInfoPhoto = styled.div`
  width: 100%;
  height: 40%;
  background-color: blue;
`;

export const WrapImg = styled(Slider)`
  margin: 0 5px;
`;

export const StarInfoDescription = styled.div`
  width: 100%;
  height: 20%;
  background-color: green;
`;
export const StarInfoManual = styled.div`
  width: 100%;
  height: 20%;
  background-color: skyblue;
`;
export const StarInfoEtc = styled.div`
  width: 100%;
  height: 10%;
  background-color: red;
`;

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 9999;
`;
