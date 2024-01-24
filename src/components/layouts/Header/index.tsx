import { HeaderBox } from './style';
import { useLocation } from 'react-router-dom';
import { StyledLink } from './style';
import Logo from '../../shared/Logo';

const Header = () => {
  const location = useLocation();

  const isActive = (to: string) => {
    return location.pathname === to;
  };

  return (
    <HeaderBox>
      <Logo fill="whitesmoke" height="30px" />
      <StyledLink to="/list" isActive={isActive('/list')}>
        List
      </StyledLink>
      <StyledLink to="/ai-search" isActive={isActive('/ai-search')}>
        AI-Search
      </StyledLink>
    </HeaderBox>
  );
};

export default Header;
