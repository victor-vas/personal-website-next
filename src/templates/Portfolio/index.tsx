import Card from '../../components/Card';
import * as S from './styles';

const Portfolio = () => {
  return (
    <S.Portfolio>
      <h2>Portfólio</h2>
      <S.PortfolioList>
        <Card
          href="https://my-calculator-react-app.netlify.app/"
          imgSrc="https://res.cloudinary.com/dg4rnkej8/image/upload/v1605569436/portfolio/calculator_b4gbru.jpg"
          title="Calculadora"
        />
        <Card
          href="https://restaurantfinderapp.vercel.app/"
          imgSrc="https://res.cloudinary.com/dg4rnkej8/image/upload/v1605569445/portfolio/restaurant-finder_vmrj7m.jpg"
          title="Restaurant Finder"
        />
        <Card
          href="https://informativo-covid-19.netlify.app/"
          imgSrc="https://res.cloudinary.com/dg4rnkej8/image/upload/v1605569199/portfolio/covid-19_byoxfb.jpg"
          title="Informativo Covid-19"
        />
        <Card
          href="https://victor-face-recognition-app.netlify.app/"
          imgSrc="https://res.cloudinary.com/dg4rnkej8/image/upload/v1612296553/portfolio/image_1_chxijw.png"
          title="Reconhecimento Facial"
        />
        <Card
          href="https://search-github-users-react-app.netlify.app/"
          imgSrc="https://res.cloudinary.com/dg4rnkej8/image/upload/v1613490793/portfolio/search-github-users_bmg48h.png"
          title="Github Users"
        />
        <Card
          href="https://my-trips-victor-vas.vercel.app/"
          imgSrc="https://res.cloudinary.com/dg4rnkej8/image/upload/v1615669898/portfolio/cover_hiwwkk.png"
          title="My Trips"
        />
      </S.PortfolioList>
    </S.Portfolio>
  );
};

export default Portfolio;
