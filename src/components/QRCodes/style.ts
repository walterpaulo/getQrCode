import styled from "styled-components";

export const Container = styled.div`
  color: white;
  width: 400px;
  min-height: 200px;
  margin-top: 40px;
  margin-bottom: 50px;
  background-color: var(--bg-color-secondary);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  `
  export const Image = styled.div`
    margin-top: 13px;
    margin-bottom: 22px;
    background-color: var(--text-color-primary);
    svg{
      width: 150px;
      height: 150px;
      margin-bottom: 20px;
    }
  `

export const TextUrl = styled.div`
  width: 90%;
    display: inline-block;
    background-color: var(--bg-color-secondary);
    /* white-space: wrap; */
    overflow: hidden;
    text-overflow: ellipsis;
    direction: ltr;
    margin-bottom: 10px;
`