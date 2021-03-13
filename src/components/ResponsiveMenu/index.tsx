import { useState } from 'react';
import * as S from './styles';
import Nav from '../Nav';
import Avatar from '../Avatar';
import ThemeButton from '../ThemeButton';
import SocialLinks from '../SocialLinks';
import { MenuProps } from 'components/Menu';
import { Menu } from '@styled-icons/boxicons-regular';

const ResponsiveMenu = ({ theme, themeToggler }: MenuProps) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <S.ResponsiveMenuContainer>
        <div className="profile">
          <Avatar width="5rem" height="5rem" />

          <h1>
            Victor Vasconcelos
            <small>Desenvolvedor Front-End</small>
          </h1>
        </div>

        <div className="right-menu">
          <ThemeButton theme={theme} themeToggler={themeToggler} />

          <Menu className="menu-icon" onClick={handleMenu} />
        </div>
      </S.ResponsiveMenuContainer>
      <S.Menu className={openMenu ? 'active-menu' : ''}>
        <Nav handleMenu={handleMenu} />

        <SocialLinks />
      </S.Menu>
    </>
  );
};

export default ResponsiveMenu;
