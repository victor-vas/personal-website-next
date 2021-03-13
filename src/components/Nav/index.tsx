import Link from 'next/link';
import { useRouter } from 'next/router';
import * as S from './styles';

interface NavProps {
  handleMenu?: () => void;
}

const Nav = ({ handleMenu }: NavProps) => {
  const router = useRouter();

  return (
    <S.NavLink className="nav-container">
      <Link href="/">
        <a
          className={`nav-item ${router.pathname == '/' ? 'active' : ''}`}
          onClick={handleMenu}
        >
          Sobre Mim
        </a>
      </Link>
      <Link href="/education">
        <a
          className={`nav-item ${
            router.pathname == '/education' ? 'active' : ''
          }`}
          onClick={handleMenu}
        >
          Educação
        </a>
      </Link>
      <Link href="/portfolio">
        <a
          className={`nav-item ${
            router.pathname == '/portfolio' ? 'active' : ''
          }`}
          onClick={handleMenu}
        >
          Portfólio
        </a>
      </Link>
      <Link href="/blog">
        <a
          className={`nav-item ${router.pathname == '/blog' ? 'active' : ''}`}
          onClick={handleMenu}
        >
          Blog
        </a>
      </Link>
    </S.NavLink>
  );
};

export default Nav;
