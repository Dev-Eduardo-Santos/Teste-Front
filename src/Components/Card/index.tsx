import Image from "next/image";
import * as Styled from "./styles";

import Icon1 from '../../../public/icon-trilhas.svg'
import Icon2 from '../../../public/icon-playLists.svg'
import Icon3 from '../../../public/icon-folder.svg'

import data from "../../../src/data/db.json";


const Card = () => {
  const { cards } = data;

  const getImageWithId = (idCards: string)=> {
    switch (idCards) {
      case '1':
        return <Image width={60} height={60} src={Icon1} alt="Ícone" />;
      case '2':
        return <Image width={60} height={60} src={Icon2} alt="Ícone" />;
      case '3':
        return <Image width={60} height={60} src={Icon3} alt="Ícone" />;
      default:
        return <div />;
    }
  }
  return (
    <>
      {cards.map((card) => (
        <Styled.Container key={card.id}>
          {getImageWithId(card.id)}
          <Styled.Title>{card.title}</Styled.Title>
          <Styled.Text>{card.text}</Styled.Text>
        </Styled.Container>
      ))}
    </>
  );
};

export default Card;
