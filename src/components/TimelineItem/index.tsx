import * as S from './styles';

interface TimelineItemProps {
  timelineYear: string;
  timelineText: string;
  timelineSubtext: string;
  timelineNumber?: string;
  timelineImage?: string;
}

const TimelineItem = ({
  timelineYear,
  timelineText,
  timelineSubtext,
  timelineNumber,
  timelineImage,
}: TimelineItemProps) => {
  return (
    <S.TimelineItemContainer>
      <h4>{timelineYear}</h4>
      <p className="text">{timelineText}</p>
      <p>{timelineSubtext}</p>
      <span className="number">
        {timelineNumber ? (
          timelineNumber
        ) : (
          <img src={timelineImage} alt="Cruzeiro" />
        )}
      </span>
    </S.TimelineItemContainer>
  );
};

export default TimelineItem;
