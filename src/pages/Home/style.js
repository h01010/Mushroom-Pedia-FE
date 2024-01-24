import styled from 'styled-components';

export const HomeBox = styled.div`
  min-height: 80%;
  padding: 40px;
  position: relative;

  .home__description__box {
    margin-bottom: 60px;
    max-width: 80%;

    &:hover {
      transform: scale(1.1) !important;
      background-color: rgb(35, 35, 35, 0.6);
    }
  }

  #feature-1 {
    opacity: 0;
    animation: 1s ease-in-out 0.5s 1 normal both running easeinout;
  }

  #feature-2 {
    opacity: 0;
    animation: 1s ease-in-out 1s 1 normal both running easeinout;
  }

  .home__image--mushroom {
    position: absolute;
  }

  #mushroom-img1 {
    width: 29%;
    top: 5%;
    left: 0;
    z-index: -1;
    transform: rotate(-10deg);
  }

  #mushroom-img2 {
    width: 30%;
    top: 50%;
    right: 0;
    z-index: 70;
    transform: rotate(10deg);
  }

  #mushroom-img3 {
    width: 25%;
    top: 50%;
    left: 35%;
    z-index: -1;
  }

  #mushroom-img4 {
    width: 15%;
    top: 10%;
    right: 15%;
    z-index: -1;
    transform: rotate(10deg);
  }

  #mushroom-img5 {
    width: 15%;
    bottom: 2%;
    left: 5%;
    transform: rotate(-20deg);
  }
`;

export const HomeTitleBox = styled.div`
  font-size: 35px;
  margin-bottom: 40px;

  span {
    margin-bottom: 8px;
    letter-spacing: 5px;
    opacity: 0;
    animation: 1s ease-in-out 0.5s 1 normal forwards running easeinout;
  }
`;

export const HomeDescBox = styled.div`
  background-color: rgb(35, 35, 35, 0.5);
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  span {
    letter-spacing: 1.5px;
    display: block;
    margin-bottom: 6px;
  }
`;
