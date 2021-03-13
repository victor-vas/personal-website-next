import styled from 'styled-components';

export const SocialLinksContainer = styled.ul`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SocialItem = styled.li`
  list-style: none;

  .social-icon {
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.texts};
    transition: color 0.4s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.highlight};
    }
  }
`;
