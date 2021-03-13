import styled from 'styled-components';

export const TimelineItemContainer = styled.article`
  border-top: 2px dashed ${({ theme }) => theme.borders};
  margin: 0;
  padding: 4rem 2rem;
  position: relative;

  h4 {
    font-size: 2rem;
    color: ${({ theme }) => theme.texts};
  }

  p {
    font-size: 2rem;
    color: ${({ theme }) => theme.texts};
  }

  .text {
    font-size: 3rem;
  }

  &:nth-child(even) {
    border-left: 2px dashed ${({ theme }) => theme.borders};
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;

    margin-right: 2rem;
    padding-right: 0;
  }

  &:nth-child(odd) {
    border-right: 2px dashed ${({ theme }) => theme.borders};
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
    margin-left: 2rem;
    padding-left: 0;
  }

  &:first-child {
    border-top: 0;
    border-top-right-radius: 0;
  }

  &:last-child {
    border-bottom-left-radius: 0;
  }

  .number {
    font-size: 2rem;
    position: absolute;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    margin-bottom: 0;
    background: ${({ theme }) => theme.borders};
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    color: ${({ theme }) => theme.texts};
    font-weight: bold;

    img {
      width: 4rem;
      height: 4rem;
    }
  }

  &:nth-child(even) .number {
    left: 0;
  }

  &:nth-child(odd) .number {
    right: 0;
    -webkit-transform: translate(50%, -50%);
    transform: translate(50%, -50%);
  }
`;
