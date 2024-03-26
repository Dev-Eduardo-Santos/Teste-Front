import Image from "next/image";
import * as Styled from "./styles";
import Img from "../../../public/img-responsive.svg";
import Play from "../../../public/Play.svg";

interface BannerProps {}

const Banner: React.FC<BannerProps> = ({}) => {
  return (
    <Styled.Container>
      <Styled.Info>
        <Image src={Img} width={20} height={20} alt={""}/>
        PLATAFORMA ALL IN ONE
      </Styled.Info>
      <Styled.Title>Sua escola online poderosa e lucrativa </Styled.Title>
      <Styled.Description>
        Tenha sua própria escola online 100% white label com rede social,
        gamificação, clube de assinaturas, ecommerce e sistema EAD completo.
      </Styled.Description>
      <Styled.BtnContainer>
        <Styled.Btn>Começar agora</Styled.Btn>
        <Styled.LinkContainer>
          <Styled.StyledImage>
            <Image src={Play} alt="alt" width={32} height={32} />
          </Styled.StyledImage>
          <Styled.Link>Ver video</Styled.Link>
        </Styled.LinkContainer>
      </Styled.BtnContainer>
    </Styled.Container>
  );
};

export default Banner;
