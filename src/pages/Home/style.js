import styled from 'styled-components';

export const HomeBox = styled.div`
  min-height: 80%;
  padding: 40px;
  position: relative;

  .home__description__box {
    margin-bottom: 60px;
    max-width: 80%;
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
    width: 26%;
    top: 35%;
    right: 0;
    z-index: 70;
    transform: rotate(10deg);
  }

  #mushroom-img3 {
    width: 25%;
    top: 70%;
    left: 25%;
    z-index: -1;
  }
`;

export const HomeTitleBox = styled.div`
  font-size: 35px;
  margin-bottom: 40px;

  span {
    margin-bottom: 8px;
    letter-spacing: 5px;
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
