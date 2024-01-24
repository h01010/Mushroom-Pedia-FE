import { Link } from 'react-router-dom';
import { HomeBox, HomeTitleBox, HomeDescBox } from './style';
import {
  ShadowBox,
  H3Highlight,
  ShadowButton,
} from '../../components/shared/shared-styled';
import amanitamuscaria_img from '../../assets/images/amanitamuscaria_img.png';
import leucocybeconnata_img from '../../assets/images/leucocybeconnata_img.png';
import omphalotusolearius_img from '../../assets/images/omphalotusolearius_img.png';
import lactariusIndigo_img from '../../assets/images/lactariusIndigo_img.png';
import boletusEdulis_img from '../../assets/images/boletusEdulis_img.png';

const Home = () => {
  return (
    <HomeBox>
      <HomeTitleBox>
        <span>Welcome To </span>
        <br />
        <span>Mushroom-Pedia</span>
      </HomeTitleBox>
      <ShadowBox className="home__description__box" id="feature-1">
        <HomeDescBox>
          <H3Highlight>FEATURE #1</H3Highlight>
          <div id="home-description-feature1">
            <span>Mushroom List & Information</span>
            <span>from mushroom.world</span>
          </div>
          <Link to="/list">
            <ShadowButton>Explore Feature #2</ShadowButton>
          </Link>
        </HomeDescBox>
      </ShadowBox>
      <ShadowBox className="home__description__box" id="feature-2">
        <HomeDescBox>
          <H3Highlight>FEATURE #2</H3Highlight>
          <div id="home-description-feature2">
            <span>Find Out Your Mushrooms</span>
            <span>With Vision AI</span>
          </div>
          <Link to="/ai-search">
            <ShadowButton>Explore Feature #2</ShadowButton>
          </Link>
        </HomeDescBox>
      </ShadowBox>
      <img
        src={amanitamuscaria_img}
        id="mushroom-img1"
        alt="mushroom-img1"
        className="home__image--mushroom"
      />
      <img
        src={leucocybeconnata_img}
        id="mushroom-img2"
        alt="mushroom-img2"
        className="home__image--mushroom"
      />
      <img
        src={omphalotusolearius_img}
        id="mushroom-img3"
        alt="mushroom-img3"
        className="home__image--mushroom"
      />
      <img
        src={lactariusIndigo_img}
        id="mushroom-img4"
        alt="mushroom-img4"
        className="home__image--mushroom"
      />
      <img
        src={boletusEdulis_img}
        id="mushroom-img5"
        alt="mushroom-img5"
        className="home__image--mushroom"
      />
    </HomeBox>
  );
};

export default Home;
