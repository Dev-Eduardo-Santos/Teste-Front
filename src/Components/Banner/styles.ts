import styled from "styled-components";

export const Container = styled.div`
  display: fl;
  width: 100%;
  height: 100%;
  margin: 15px;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const Title = styled.text`
display: flex;
font-family: inter, sans-serif;
font-size: 44px;
font-weight: 500;
line-height: 48.4px;
letter-spacing: -0.03em;
text-align: left;
color: #FFF;
padding: 2rem 0;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    line-height: 1.2em;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    width: 310px;
  }
`;

export const Info = styled.div`
  display: flex;
  font-family: Inter, sans-serif;
  font-size: 1rem;
  gap: 10px;
  font-weight: 400;
  line-height: 1.5em;
  text-align: left;
  color: #FFF;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    padding-bottom: 0.8rem;
  }
`;

export const Description = styled.p`
  display: flex;
  width: 410px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5em;
  text-align: left;
  padding-bottom: 2.5rem;
  color: #FFF;

  @media screen and (max-width: 768px) {
    width: 310px;
    font-size: 1rem;
    padding-bottom: 2.5rem;
  }
`;


export const Btn = styled.button`
  width: 184px;
  height: 56px;
  background-color: #00e1e7;
  color: #000;
  border: 1px solid #00e1e7;
  gap: 0px;
  border-radius: 2rem;
  opacity: 1;
  font-family: inter, sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;
  margin-right: 40px;

  &:hover {
    background-color: #008c97;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    width: 11rem;
    height: 3.5rem;
  }
`;

export const LinkContainer = styled.a`
  display: flex;
  width: 184px;
  height: 56px;
  color: #FFF;
  margin-left: 0%.5;

`;

export const StyledImage = styled.div`
  display: flex;
  margin-right: 8px;
  align-items: center;
`;

export const Link = styled.a`
  flex-wrap:nowrap;
  align-items: center;
  align-items: center;
  opacity: 1;
  font-family: inter, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  text-align: left;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    color: #251180;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const ContentImg = styled.div`
  display: block;
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: -1.5rem;
`;

