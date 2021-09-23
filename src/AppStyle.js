import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow-y: scroll;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: url('https://images.unsplash.com/photo-1548123378-bde4eca81d2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGRhbmNlfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Card = styled.div`
  max-width: 280px;
  width: 70%;
  height: 60%;
  max-height: 400px;
  border-radius: 20px;
  position: relative;
  display: flex;
  padding: 0 20px;
  cursor: pointer;
  margin: 30px;
  color: rgba(255, 255, 255, 0.9);
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  transform-style: preserve-3d;
  backdrop-filter: blur(4px);
  transition: 300ms all ease-in-out;
  background-color: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  border-left: 1.5px solid rgba(255, 255, 255, 0.4);
  box-shadow: 15px 15px 40px 5px rgba(0, 0, 0, 0.6);

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
    transform: scale(1.01) translateY(-10px);
  }

  h1 {
    position: absolute;
    pointer-events: none;
    font-size: 13rem;
    top: -65px;
    right: -20px;
    font-style: italic;
    font-family: perpetua;
    color: rgba(255, 202, 202, 0.4);
    line-height: 0px;
  }
  h3 {
    line-height: 1px;
    font-size: 1.6rem;
    letter-spacing: 3px;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
  }
  p {
    font-family: cambria;
  }
  a {
    background-color: rgba(255, 255, 255, 0.7);
    padding: 5px 43px;
    color: black;
    border-radius: 10px;
    font-weight: 600;
    margin-top: 40px;
    transition: 300ms all ease-in-out;

    &:hover {
      color: rgba(255, 255, 255, 0.95);
      background-color: rgba(0, 0, 0, 0.95);
    }
  }
`;
