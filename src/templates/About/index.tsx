import * as S from './styles';

const About = () => {
  return (
    <S.About>
      <S.AboutMeTextContainer>
        <h2>Sobre Mim</h2>
        <p>
          Oi, meu nome é Victor Luis Vasconcelos da Silva, nasci em
          Maranguape/CE, já fui dono junto com um amigo de uma empresa onde
          tinhamos uma horta hidropônica e faziamos entregas de hortaliças.
          Adoro aprender coisas novas por isso no meu tempo livre costumo
          assistir vídeos de cursos variados e documentários, depois de assistir
          um curso sobre HTML5, resolvi focar mais em conteúdos de tecnologia.
        </p>
        <p>
          Hoje estou cursando Engenharia de Software na Cruzeiro do Sul vou
          terminar em 2023, mas também, já cursei por dois semestres Ciências
          Econômicas na Ufc. Agora espero sempre adquiri mais conhecimento, para
          poder construir aplicações que possam ajudar as pessoas a se
          desenvolverem.
        </p>
      </S.AboutMeTextContainer>

      <S.TechnologiesContainer>
        <h3>Tecnologias</h3>
        <div className="techs-bg">
          <img src="img/javascript.svg" alt="Logo JavaScript" height="80px" />
          <img src="img/reactjs.svg" alt="Logo React.js" height="80px" />
          <img
            src="img/reactnative.svg"
            alt="Logo React Native"
            height="80px"
          />
          <img src="img/typescript.svg" alt="Logo TypeScript" height="80px" />
        </div>
      </S.TechnologiesContainer>
    </S.About>
  );
};

export default About;
