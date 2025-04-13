import styled from "styled-components";
import { theme } from "../../themes/styles";

export const ContainerButton = styled.button`
  background-color: ${theme.colors.light};
  color: ${theme.colors.black};
  font-weight: 700;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  border-radius: 1.3rem;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  margin: 0.1rem 0;
  height: 2.8rem;  // 45px

  &:hover {
    background-color: ${theme.colors.primary};
    box-shadow: 0 0 10px ${theme.colors.primary};
    color: ${theme.colors.white};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
    background-color: ${theme.colors.primaryDark};
  }
`;
