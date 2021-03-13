import * as S from './styles';
import ThemeButton from '../../components/ThemeButton';
import Nav from '../Nav';
import Avatar from '../../components/Avatar';
import SocialLinks from '../../components/SocialLinks';

export type MenuProps = {
  theme: string;
  themeToggler: () => void;
};

const Menu = ({ theme, themeToggler }: MenuProps) => {
  return (
    <S.AsideContainer>
      <S.AsideContent>
        <Avatar width="10rem" height="10rem" />

        <div className="bio-container">
          <h1>
            Victor Vasconcelos
            <small>Desenvolvedor Front-End</small>
          </h1>

          <p>
            Estudante de Engenharia de Software, sempre buscando conhecimento.
          </p>
        </div>

        <SocialLinks />

        <Nav />
      </S.AsideContent>

      <ThemeButton theme={theme} themeToggler={themeToggler} />
    </S.AsideContainer>
  );
};

export default Menu;
