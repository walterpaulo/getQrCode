import styled from "styled-components";

export const Container = styled.div`
  color: white;
  width: 400px;
  min-height: 200px;
  margin-top: 40px;
  margin-bottom: 40px;
  background-color: var(--bg-color-secondary);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 420px) {
    margin-top: 95px;
    width: 100vw;
    }
  `
  export const Image = styled.div`
    width: 150px;
    height: 150px;
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
    text-align: center;
    background-color: var(--bg-color-secondary);
    /* white-space: wrap; */
    overflow: hidden;
    text-overflow: ellipsis;
    direction: ltr;
    margin-bottom: 20px;
`