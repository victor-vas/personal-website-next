import Link from 'next/link';
import * as S from './styles';
import { Github, LinkedinSquare } from '@styled-icons/boxicons-logos';

const SocialLinks = () => {
  return (
    <S.SocialLinksContainer>
      <S.SocialItem>
        <Link href="https://github.com/victor-vas">
          <a target="_blank" rel="noopener noreferrer">
            <Github className="social-icon" />
          </a>
        </Link>
      </S.SocialItem>

      <S.SocialItem>
        <Link href="https://www.linkedin.com/in/victor-vasconcelos-599b941a5/">
          <a target="_blank" rel="noopener noreferrer">
            <LinkedinSquare className="social-icon" />
          </a>
        </Link>
      </S.SocialItem>
    </S.SocialLinksContainer>
  );
};

export default SocialLinks;
