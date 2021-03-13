import styled from 'styled-components';

export const NavLink = styled.nav`
  .nav-item {
    display: block;
    margin: 2rem;
    text-decoration: none;
    font: 400 1.8rem 'Oxygen';
    color: ${({ theme }) => theme.texts};
    transition: color 0.4s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.highlight};
    }
  }

  .active {
    color: ${({ theme }) => theme.highlight};
  }
`;
