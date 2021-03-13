import TimelineItem from 'components/TimelineItem';
import * as S from './styles';

const Timeline = () => {
  return (
    <S.Education>
      <h2>Educação</h2>
      <S.TimelineContainer className="section">
        <S.TimelineCenter className="section-center">
          <TimelineItem
            timelineYear="Em progresso"
            timelineText="Engenharia de Software"
            timelineSubtext="Cruzeiro do Sul Virtual"
            timelineImage="img/cruzeiro.svg"
          />
        </S.TimelineCenter>
      </S.TimelineContainer>
    </S.Education>
  );
};

export default Timeline;
