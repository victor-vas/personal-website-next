import * as S from './styles';
import { MenuProps } from 'components/Menu';

const ThemeButton = ({ theme, themeToggler }: MenuProps) => {
  return theme === 'light' ? (
    <S.ThemeButtonStyled onClick={themeToggler}>
      <img
        src="https://res.cloudinary.com/dg4rnkej8/image/upload/v1605553355/icons/moon_eaelz1.svg"
        alt="Ícone da Lua"
        height="20px"
      />
    </S.ThemeButtonStyled>
  ) : (
    <S.ThemeButtonStyled onClick={themeToggler}>
      <img
        src="https://res.cloudinary.com/dg4rnkej8/image/upload/v1605553355/icons/sun_jcv0s7.svg"
        alt="Ícone do Sol"
        height="20px"
      />
    </S.ThemeButtonStyled>
  );
};

export default ThemeButton;
