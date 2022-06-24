import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  min-width: 200px;
  min-height: 467px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p{
    margin: 40px 0;
  }
`
export const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  margin:30px 0 40px 0;
  font-weight: 800;
`
export const Form = styled.form`
  text-align: center;

`
export const Box = styled.div`
  position: relative;
  width: 400px;
  height: 20px;
  `
export const Input = styled.input`
  &[type=text]{
    width: 65%;
    height: 100%;
    padding: 10px 130px 10px 10px;
    background-color: var(--bg-color-secondary);
    border-style: none;
    border-radius: 5px;
  }
  &[type=submit]{
    width: 113px;
    height: 30px;
    padding: 10px 10px;
    background-color: var(--accent-color-primary);
    color: var(--accent-color-secundary);
    text-transform: uppercase;
    font-weight: bold;
    padding: 8px 20px;
    font-size: 12px;
    border-radius: 5px;
    border-style: none;
    position: absolute;
    top:5px;
    right: 7px;
    cursor: pointer;
  }
  
`