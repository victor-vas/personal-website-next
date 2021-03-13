import Lottie from 'react-lottie';
import animationData from '../../../public/programming.json';
import { Loading } from './styled';

const NoPost = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Loading>
      <Lottie options={defaultOptions} width={350} height={400} />
      <div className="message">
        <p>
          Estudando, para algum dia, poder compartilhar meus conhecimentos com a
          comunidade.
        </p>
      </div>
    </Loading>
  );
};

export default NoPost;
