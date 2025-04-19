import { useState } from "react";
import header from "../../assets/felix-name.png";
import logo from "../../assets/logo.png";
import project1 from "../../assets/projeto1.png";
import project2 from "../../assets/projeto2.png";
import project3 from "../../assets/projeto3.png";
import Button from "../../components/button";

import curriculo from "../../assets/Gabriel Currículo.pdf";

import AOS from "aos";
import { theme } from "../../themes/styles";
import {
  ButtonContact,
  ConfigIcon,
  Container,
  ContainerEspecialidades,
  ContainerLinks,
  ContainerSobre,
  Contato,
  Context,
  Email,
  Especialidades,
  EspecialidadesGroup,
  Footer,
  Header,
  IconSocial,
  ImagemContainer,
  Interface,
  InterfaceForm,
  InterfacePortfolio,
  Projects,
  SectionFormulario,
  SectionPortfolio,
  Softwares,
  Store,
  StoreIcon,
  TextSobre,
  Title,
  TitleGroup,
  WebIcon,
  Website,
} from "./styles";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { MenuIcon, Sidebar, SidebarHeader, SidebarOverlay } from "./styles";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração da animação em milissegundos
      once: true, // A animação ocorre apenas uma vez ao rolar
    });
  }, []);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleDownloadPDF = () => {
    const link = document.createElement("a");
    link.href = curriculo; // URL do arquivo PDF
    link.download = "curriculo.pdf"; // Nome do arquivo PDF
    document.body.appendChild(link); // Adiciona o link ao DOM
    link.click();
    document.body.removeChild(link); // Remove o link do DOM
  };

  return (
    <Container>
      <MenuIcon onClick={toggleSidebar}>
        <FaBars />
      </MenuIcon>

      <SidebarOverlay isOpen={isSidebarOpen} onClick={toggleSidebar} />

      <Sidebar isOpen={isSidebarOpen}>
        <SidebarHeader>
          <img
            src={header}
            alt="logo name"
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
            draggable={false}
          />
        </SidebarHeader>
        <TitleGroup>
          <Title onClick={toggleSidebar}>Home</Title>
          <Title onClick={toggleSidebar}>Especialidades</Title>
          <Title onClick={toggleSidebar}>Sobre</Title>
          <Title onClick={toggleSidebar}>Projetos</Title>
        </TitleGroup>
        <Contato>
          <Button onClick={toggleSidebar}>Contato</Button>
        </Contato>
      </Sidebar>

      <Header data-aos-delay="100" data-aos="zoom-in">
        <img
          src={header}
          alt="logo name"
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
          draggable={false}
        />
        <TitleGroup>
          <Title>Home</Title>
          <Title>Especialidades</Title>
          <Title>Sobre</Title>
          <Title>Projetos</Title>
        </TitleGroup>
        <Contato>
          <Button onClick={handleDownloadPDF}>Currículo</Button>
        </Contato>
      </Header>
      <Interface data-aos-delay="100" data-aos="zoom-in">
        <div className="text-content">
          <h1>
            TRANSFORMANDO IDEIAS EM <br />
            <span>REALIDADES.</span>
          </h1>
          <p>
            Criatividade e inovação andam lado a lado. Com uma combinação única
            de design impactante, funcionalidade intuitiva e otimização para
            resultados, estou pronto para criar a presença online dos seus
            sonhos.
          </p>
          <ButtonContact>Entre em Contato</ButtonContact>
        </div>

        <div className="image-container">
          <img
            src={logo}
            alt="Foto Gabriel"
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
            draggable={false}
          />
        </div>
      </Interface>
      <Especialidades>
        <ContainerEspecialidades>
          <Context data-aos-delay="100" data-aos="fade-right">
            <h2>
              MINHAS <span>ESPECIALIDADES.</span>
            </h2>
          </Context>
          <EspecialidadesGroup data-aos-delay="100" data-aos="fade-left">
            <Website className="especialidades-box">
              <WebIcon />
              <h3>Website</h3>
              <p>
                O desenvolvimento de um website é crucial para estabelecer uma
                presença online eficaz. É importante contar com uma equipe
                profissional e experiente para garantir um resultado de
                qualidade.
              </p>
            </Website>

            <Store className="especialidades-box">
              <StoreIcon />
              <h3>Loja Online</h3>
              <p>
                A loja online oferece uma variedade de produtos e comodidade
                para os clientes. É também importante contar com uma equipe
                profissional e experiente para garantir um resultado de
                qualidade.
              </p>
            </Store>

            <Softwares className="especialidades-box">
              <ConfigIcon />
              <h3>Software</h3>
              <p>
                Desenvolvemos softwares personalizados que otimizam processos e
                facilitam a comunicação online, com uma equipe experiente para
                garantir resultados de qualidade.
              </p>
            </Softwares>
          </EspecialidadesGroup>
        </ContainerEspecialidades>
      </Especialidades>
      <ContainerSobre data-aos-delay="100" data-aos="fade-up">
        <ImagemContainer>
          <img
            src={logo}
            alt="Foto Gabriel"
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
            draggable={false}
          />
        </ImagemContainer>
        <TextSobre>
          <h2>
            MUITO PRAZER, <span>SOU GABRIEL FELIX</span>
          </h2>

          <p>
            Olá, meu nome é Gabriel Felix e sou um programador fullstack. Com
            ampla experiência no desenvolvimento de soluções web completas,
            desde a criação de interfaces de usuário até a integração de
            sistemas complexos nos bastidores, tenho um compromisso em oferecer
            resultados de alta qualidade e eficiência para meus clientes.
          </p>
          <p>
            Estou sempre em busca de novos desafios e oportunidades para
            aprimorar minhas habilidades e conhecimentos na área de tecnologia.
            Estou ansioso para colaborar em projetos inovadores e fazer parte de
            equipes talentosas em busca de soluções disruptivas. Obrigado por
            visitar meu portfólio e estou à disposição para discutir futuras
            colaborações.
          </p>
          <ContainerLinks>
            <IconSocial
              url="https://www.instagram.com/_eufelix2?igsh=NDR6aHJqOTBoNnhm&utm_source=qr"
              bgColor={theme.colors.info}
              target="_blank"
            />

            <IconSocial
              url="https://github.com/GabrielFelix22"
              bgColor={theme.colors.info}
              target="_blank"
            />

            <IconSocial
              url="https://www.linkedin.com/in/gabriel-felix-b95b7122a/"
              bgColor={theme.colors.info}
              target="_blank"
            />

            <IconSocial
              url="https://wa.me/11965948141"
              bgColor={theme.colors.info}
              target="_blank"
            />

            <IconSocial
              url="https://discord.gg/P5waaM7b"
              bgColor={theme.colors.info}
              target="_blank"
            />
          </ContainerLinks>
        </TextSobre>
      </ContainerSobre>
      <SectionPortfolio data-aos-delay="100" data-aos="fade-up">
        <InterfacePortfolio>
          <h2>
            MEU <span>PORTFÓLIO.</span>
          </h2>
          <Projects>
            <div
              className="box"
              style={{ backgroundImage: `url(${project1})` }}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              draggable={false}
            >
              <div className="overlay">Projeto 1</div>
            </div>
            <div
              className="box"
              style={{ backgroundImage: `url(${project2})` }}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              draggable={false}
            >
              <div className="overlay">Projeto 2</div>
            </div>
            <div
              className="box"
              style={{ backgroundImage: `url(${project3})` }}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              draggable={false}
            >
              <div className="overlay">Projeto 3</div>
            </div>
          </Projects>
        </InterfacePortfolio>
      </SectionPortfolio>
      <SectionFormulario data-aos-delay="100" data-aos="fade-up">
        <InterfaceForm>
          <h2 className="title">
            FALA <span>COMIGO.</span>
          </h2>

          <form action="">
            <input type="hidden" name="_next" value="" />
            <input type="text" placeholder="Seu nome completo" required />
            <input type="text" placeholder="Seu e-mail" required />
            <input type="text" placeholder="Seu telefone" />
            {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
            <textarea
              name=""
              id=""
              placeholder="Sua mensagem"
              required
            ></textarea>
            <div className="btn-enviar">
              <input type="submit" value="Enviar" />
            </div>
          </form>
        </InterfaceForm>
      </SectionFormulario>
      <Footer data-aos-delay="100" data-aos="fade-up">
        <div className="interface">
          <div className="logo">
            <img
              src={header}
              alt="logo name"
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              draggable={false}
            />
          </div>
          <div className="social-icons">
            <IconSocial
              url="https://www.instagram.com/_eufelix2?igsh=NDR6aHJqOTBoNnhm&utm_source=qr"
              bgColor={theme.colors.info}
              target="_blank"
            />
            <IconSocial
              url="https://github.com/GabrielFelix22"
              bgColor={theme.colors.info}
              target="_blank"
            />
            <IconSocial
              url="https://www.linkedin.com/in/gabriel-felix-b95b7122a/"
              bgColor={theme.colors.info}
              target="_blank"
            />
            <IconSocial
              url="https://wa.me/11965948141"
              bgColor={theme.colors.info}
              target="_blank"
            />
            <IconSocial
              url="https://discord.gg/P5waaM7b"
              bgColor={theme.colors.info}
              target="_blank"
            />
          </div>
        </div>
        <div className="borda">
          <p>
            <i className="icon">
              <Email />
            </i>
            <a href="mailto:gabriel.alves2208@gmail.com">
              gabriel.alves2208@gmail.com
            </a>
          </p>
        </div>
      </Footer>
    </Container>
  );
}

export default Home;
