import Link from 'next/link';
import * as S from './styles';

const Error = () => {
  return (
    <S.Error>
      <h1>404</h1>
      <p>A página não pode ser encontrada</p>
      <Link href="/">
        <a className="btn">Voltar para Home</a>
      </Link>
    </S.Error>
  );
};

export default Error;
