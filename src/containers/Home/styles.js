import { BsCart } from "react-icons/bs";
import { FiCode } from "react-icons/fi";
import { GrSystem } from "react-icons/gr";
import { TfiEmail } from "react-icons/tfi";
import { SocialIcon } from "react-social-icons";
import styled from "styled-components";
import { theme } from "../../themes/styles";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  /* padding: 0.5rem; */
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 1rem; */
  gap: 4rem;

  img {
    height: 8rem;  // 128px
    width: auto;
  }
`;

export const TitleGroup = styled.div`
  display: flex;
  align-items: center;
  max-width: 37.5rem;  // 600px
  margin: 0 10rem;
  gap: 2.25rem; // 36px
`;

export const Title = styled.h1`
  display: inline-block;
  font-size: 1.1rem;
  font-weight: bold;
  color: ${theme.colors.neutral};
  cursor: pointer;
  position: relative;
  margin: 0 1.5rem;
  transition: all 200ms ease-in-out;

  &:hover {
    transform: scale(1.1);
    color: ${theme.colors.info};
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -0.4rem;
    left: 0;
    width: 0;
    height: 0.16rem;
    background-color: ${theme.colors.neutral};
    transition: all 300ms ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const Contato = styled.div`
  margin-left: 2rem;
  padding: 0.25rem;
`;

// Estilos da Interface

export const Interface = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10rem;  // 80px

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    padding: 1rem;
  }

  .text-content {
    max-width: 37.5rem;  // 600px
    text-align: left;
  }

  h1 {
    font-size: 2.5rem;
    color: ${theme.colors.neutral};
    text-align: left;
    margin: 0 0 1rem 0;
  }

  span {
    color: ${theme.colors.info};
  }

  p {
    font-size: 1.2rem;
    color: ${theme.colors.neutral};
    text-align: justify;
    max-width: 31.25rem;  // 500px
    line-height: 1.5;
    margin: 2.5rem 0;
  }

  .image-container {
    margin-left: 13rem;  // 208px
    /* margin-right: 0.1rem;  // 16px */
    flex-shrink: 0;
    animation: flutuar 2s ease-in-out infinite alternate;

    @keyframes flutuar {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-10px);
      }
    }
  }

  img {
    max-width: 25rem;  // 200px
    height: auto;
    vertical-align: middle;
    padding: 0.625rem;  // 10px 
  }
`;

export const ButtonContact = styled.button`
  background-color: ${theme.colors.light};
  color: ${theme.colors.black};
  font-weight: 700;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  border-radius: 1.3rem;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  margin-top: 1rem;  // 16px
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

// Estilos da seção de Especialidades

export const Especialidades = styled.div`
  padding: 2.5rem 4%;  // 40px
  margin: 12rem 0;
`;

export const ContainerEspecialidades = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Context = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  h2 {
    font-size: 2.5rem;
    color: ${theme.colors.neutral};
    text-align: center;
  }

  span {
    color: ${theme.colors.info};
  }
`;

export const EspecialidadesGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;  // 32px

  .especialidades-box {
    max-width: 23.75rem;  // 380px
    max-height: 24.375rem;  // 390px
    color: ${theme.colors.white};
    padding: 2.5rem;  // 40px
    border-radius: 1.25rem;  // 20px
    margin-top: 4rem;  // 64px
    transition: .2s;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 0 10px ${theme.colors.primary};
    }

    h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;  // 16px
    }
  }
`;

export const Website = styled.div`
  .icon {
    margin-bottom: 2rem;
    font-size: 10rem;
  }
`;

export const WebIcon = styled(FiCode)`
  font-size: 4rem;  // 56px
  color: ${theme.colors.info};
  margin-bottom: 1rem;  // 16px
`;

export const StoreIcon = styled(BsCart)`
  font-size: 4rem;  // 56px
  color: ${theme.colors.info};
  margin-bottom: 1rem;  // 16px
`;

export const ConfigIcon = styled(GrSystem)`
  font-size: 4rem; // 56px
  color: ${theme.colors.info};
  margin-bottom: 1rem;  // 16px
`;

export const Store = styled.div``;

export const Softwares = styled.div``;

// Estilos da sessão de sobre

export const ContainerSobre = styled.div`
  padding: 2.5rem 4%;  // 90px
  margin: 12rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gap: 2rem;  // 32px */
  text-align: left;
  color: ${theme.colors.white};

  @media (max-width: 768px) {
    flex-direction: column; // Empilha no mobile
    text-align: center;
  }
`;

export const ImagemContainer = styled.div`
  padding: 1rem;
  border-radius: 1.25rem;  // 20px
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 25rem;  // 200px
    height: auto;
    vertical-align: middle;
    padding: 0.625rem;  // 10px 
  }
`;

export const TextSobre = styled.div`
  max-width: 37.5rem;  // 600px
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    color: ${theme.colors.neutral};
    font-size: 2.5rem;  // 40px
    margin-bottom: 1rem;  // 16px
    margin-left: 0.75rem;  // 10px
  }

  span {
    color: ${theme.colors.info};
    display: block;
  }

  p {
    margin: 1rem;
    line-height: 1.5; // 24px
    text-align: justify;
    overflow-wrap: break-word; // Quebra de palavras que ultrapassam o limite de largura
  }
`;

export const ContainerLinks = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  gap: 1rem;  // 16px
  margin-top: 1rem;  // 16px
  margin-left: 0.75rem;  // 10px

  a button {
    width: 3.75rem;  // 60px
    height: 3.75rem;  // 60px
    border-radius: 50%;
    border: none;
    background-color: ${theme.colors.info};
    font-size: 1.375rem;  // 22px
    cursor: pointer;
    transition: 0.2s;
  }

  a button:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px ${theme.colors.primary};
  }
`;

export const IconSocial = styled(SocialIcon)`
  width: 3.75rem;  // 60px
  height: 3.75rem;  // 60px
  border-radius: 50%;
  border: none;
  background-color: ${theme.colors.info};
  font-size: 1.375rem;  // 22px
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px ${theme.colors.primary};
  }
`;

// Estilos da sessão de Portfolio

export const SectionPortfolio = styled.div`
  padding: 2.5rem 4%;  // 40px
  box-shadow: 0 0 40px 5px ${theme.colors.primary};
  justify-content: space-between;
  margin-top: 70px;
  display: flex;
`;

export const InterfacePortfolio = styled.div`
  h2 {
    font-size: 2.5rem;
    color: ${theme.colors.neutral};
    margin-bottom: 4rem;  // 16px
    text-align: center;

    span {
      color: ${theme.colors.info};
    }
  }
`;

export const Projects = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 4rem; // 64px
  justify-items: center;
  margin: 0 auto;

  .box {
    width: 22.5rem;  // 360px
    height: 28.75rem; // 460px
    background-size: cover;
    background-position: 100% 0%;
    transition: 8s;
    cursor: pointer;
    border-radius: 2.5rem;  // 40px
    position: relative;

    &:hover {
      background-position: 100% 100%;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #000000B8;
      border-radius: 2.5rem;  // 40px
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;  // 24px
      font-weight: 600;
      color: ${theme.colors.white};
      opacity: 0;
      transition: 1s;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

export const SectionFormulario = styled.div`
  padding: 2.5rem 4%;  // 40px

  h2 {
    font-size: 2.5rem;
    color: ${theme.colors.neutral};
    margin: 4rem;  // 64px
    margin-top: 6rem; // 96px
    text-align: center;
  }

  span {
    color: ${theme.colors.info};
  }
`;

export const InterfaceForm = styled.div`
  form {
    max-width: 31.25rem;  // 500px
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 0.625rem;  // 10px
    margin-top: 2.5rem;  // 40px
  }

  form input, form textarea {
    width: 100%;
    background-color: #242424;
    border: none;
    outline: none;
    padding: 1.25rem 0.9375rem;  // 20px 15px
    border-radius: 0.9375rem; // 15px
    color: ${theme.colors.white};
    font-size: 1.125rem;  // 18px
  }

  form textarea {
    resize: none;
    max-height: 12.5rem;  // 200px
  }

  form .btn-enviar {
    margin-top: 1.25rem;  // 20px
    text-align: center;
  }

  form .btn-enviar input {
    width: 7.5rem;  // 120px
    background-color: ${theme.colors.info};
    color: ${theme.colors.white};
    font-weight: 700;
    cursor: pointer;
    transition: 0.2s;

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
  }
`;

export const Footer = styled.footer`
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
  padding: 2rem 1rem;
  margin-top: 4rem;
  /* box-shadow: 0px -10px 40px 5px rgba(0, 102, 255, 0.4); */

  .interface {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem; // 24pxs

    .logo img {
      max-width: 180px;
      height: auto;
    }
  }

  .borda {
    border-top: 1px solid ${theme.colors.info};
    /* margin-top: 1rem; */
    padding-top: 1rem;
    /* text-align: center; */

    p {
      font-size: 0.9rem;
      display: flex;

      a {
        color: ${theme.colors.neutral};
        text-decoration: none;
        transition: color 0.3s;
        font-weight: 600;
        cursor: pointer;
        font-size: 1rem; // 16px
        margin-left: 0.5rem; // 8px
        display: inline-block;
        margin-bottom: 0.4rem; // 8px
        margin-top: 0.4rem; // 8px

        &:hover {
          color: ${theme.colors.primary};
        }
      }
    }
  }

  .social-icons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .icon {
    font-size: 2rem;  // 32px
    color: ${theme.colors.info};
  }
`;

export const Email = styled(TfiEmail)``;
