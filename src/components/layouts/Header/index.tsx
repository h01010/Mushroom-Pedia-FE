import { HeaderBox } from './style';
import { Link } from 'react-router-dom';
import Logo from '../../shared/Logo';

const Header = () => {
  return (
    <HeaderBox>
      <Logo fill="whitesmoke" height="30px" />
      <Link to="/list">List</Link>
      <Link to="/ai-search">AI-Search</Link>
    </HeaderBox>
  );
};

export default Header;
