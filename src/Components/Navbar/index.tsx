import React, { useState } from "react";
import * as Styled from "./styles";
import Link from "next/link";
import SolucoesCard from "../Toggle";
import Image from "next/image";
import Idiomas from "../Idiomas";

import Menu from "../../../public/assets-soluctions/menu.svg";
import Pt from "../../../public/idiomas/language-1.svg";

export default function Navbar() {
  const [exibirCard, setExibirCard] = useState(false);
  const [exibirNav, setExibirNav] = useState(true);
  const [cardVisible, setCardVisible] = useState(false); // Estado para controlar a visibilidade do card de idiomas

  const toggleExibirCard = () => {
    setExibirCard(!exibirCard);
  };

  const handleCloseCard = () => {
    setExibirCard(false);
  };

  const handleCloseCardIdiomas = () => {
    setCardVisible(false);
  };

  const toggleExibirNav = () => {
    setExibirNav(!exibirNav);
  };

  const toggleCardVisibility = () => {
    setCardVisible(!cardVisible);
  };

  return (
    <Styled.NavbarContainer>
      <Styled.ToggleButton onClick={toggleExibirNav}>
        {exibirNav ? (
          <Image src={Menu} width={20} height={20} alt="" />
        ) : (
          <Image src={Menu} width={30} height={30} alt="" />
        )}
      </Styled.ToggleButton>
      <Styled.ToggleGrup style={{ display: exibirNav ? "flex" : "none" }}>
        <Styled.NavContaierItem>
          <Styled.NavContainerLinks>
            <Styled.NavItem>
              <Styled.btn onClick={toggleExibirCard}>
                <Link href="#">Soluções</Link>
              </Styled.btn>
              {exibirCard && <SolucoesCard onClose={handleCloseCard} />}
            </Styled.NavItem>
            <Styled.NavItem>
              <Link href="#">Preços</Link>
            </Styled.NavItem>
            <Styled.NavItem>
              <Link href="#">Academy</Link>
            </Styled.NavItem>
            <Styled.NavItem>
              <Link href="#">Blog</Link>
            </Styled.NavItem>
            <Styled.NavItem>
              <Link href="#">Contact</Link>
            </Styled.NavItem>
          </Styled.NavContainerLinks>
        </Styled.NavContaierItem>
        <div>
          <Styled.RightContainer>
            <Styled.NavContainerLinks>
              <Styled.NavItem>Entrar</Styled.NavItem>
              <Styled.Button>Começar agora</Styled.Button>
              <Styled.NavItem>
                <Styled.btn onClick={toggleCardVisibility}>
                  <Link href="#">
                    <Image src={Pt} width={40} height={16} alt={"pt"} />
                  </Link>
                </Styled.btn>
                <Idiomas
                  onClose={handleCloseCardIdiomas}
                  visible={cardVisible}
                />
              </Styled.NavItem>
            </Styled.NavContainerLinks>
          </Styled.RightContainer>
        </div>
      </Styled.ToggleGrup>
    </Styled.NavbarContainer>
  );
}
