import Link from 'next/link';
import * as S from './styles';

interface CardProps {
  href: string;
  imgSrc: string;
  title: string;
}

const Card = ({ href = '/', imgSrc, title }: CardProps) => {
  return (
    <S.CardContainer>
      <Link href={href}>
        <a target="_blank" rel="noopener noreferrer">
          <img src={imgSrc} alt="Cover" width="100%" />
          <h3>{title}</h3>
        </a>
      </Link>
    </S.CardContainer>
  );
};

export default Card;
