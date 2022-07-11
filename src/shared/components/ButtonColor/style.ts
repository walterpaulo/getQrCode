import styled from "styled-components";

export const Container = styled.div`
  margin: 30px auto;
  width: 200px;
  position: absolute;
  bottom: 0;
  left: 20px;
  display: flex;
  flex-direction: row;
  gap: 1.3em;
  align-items: center;
`;
export const InputFlat = styled.input`
  appearance: none;
  width: 50px;
  height: 30px;
  background-color: #dae2df;
  border-radius: 25px;
  box-shadow: inset 0px 0px 16px 1px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: 0.4s;
  position: relative;
  :before {
    content: "";
    width: 30px;
    height: 30px;
    background-color: #e8eaff;
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 50px;
    transform: scale(1.1);
    transition: 0.4s;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
  }
  :checked {
    background-color: #3decb1;
    :before {
      width: 30px;
      height: 30px;
      content: "";
      /* background-color: #DF963D; */
      border-radius: 50px;
      position: absolute;
      box-shadow: 0px 0px 2px 1px rgba(255, 255, 255, 0.4);
      transform: scale(1.1);
      top: 0;
      left: 25px;
      transition: 0.4s;
    }
  }
`;

export const LabaleFlat = styled.label``;
