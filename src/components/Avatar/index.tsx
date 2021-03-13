import * as S from './styles';

interface AvatarProps {
  width: string;
  height: string;
}

const Avatar = ({ width, height }: AvatarProps) => {
  return <S.AvatarStyled style={{ width, height }}></S.AvatarStyled>;
};

export default Avatar;
