import React from "react";
import * as Styled from "./styled";
import Image from "next/image";

import Ead from "../../../public/assets-soluctions/ead.svg";
import Social from "../../../public/assets-soluctions/icon-social.svg";
import Gamif from "../../../public/assets-soluctions/icon-gamification.svg";
import App from "../../../public/assets-soluctions/icon-app.svg";

interface SolucoesCardProps {
  onClose: () => void;
}

const SolucoesCard: React.FC<SolucoesCardProps> = ({ onClose }) => {
  let timeoutId: NodeJS.Timeout;

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
  };

  return (
    <Styled.CardContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Styled.Title>SOLUÇÕES PRINCIPAIS</Styled.Title>
      <Styled.MiniContainer>
        <div>
          <Styled.MiniTitulo>
            <Styled.ImagemC>
              <Image src={Ead} alt="alt" width={40} height={40} />
            </Styled.ImagemC>
            Crie uma Escola Online
          </Styled.MiniTitulo>
          <Styled.MiniTexto>Lorem ipsum dolor sit amet</Styled.MiniTexto>
        </div>
        <div>
          <Styled.MiniTitulo>
            <Styled.ImagemC>
              <Image src={Gamif} alt="alt" width={40} height={40} />
            </Styled.ImagemC>
            Gamificação
          </Styled.MiniTitulo>
          <Styled.MiniTexto>Lorem ipsum dolor sit amet</Styled.MiniTexto>
        </div>
        <div>
          <Styled.MiniTitulo>
            <Styled.ImagemC>
              <Image src={Social} alt="alt" width={40} height={40} />
            </Styled.ImagemC>
            Comunidade e rede social
          </Styled.MiniTitulo>
          <Styled.MiniTexto>Lorem ipsum dolor sit amet</Styled.MiniTexto>
        </div>
        <div>
          <Styled.MiniTitulo>
            <Styled.ImagemC>
              <Image src={App} alt="alt" width={40} height={40} />
            </Styled.ImagemC>
            Aplicativo mobile
          </Styled.MiniTitulo>
          <Styled.MiniTexto>Lorem ipsum dolor sit amet</Styled.MiniTexto>
        </div>
      </Styled.MiniContainer>
    </Styled.CardContainer>
  );
};

export default SolucoesCard;
