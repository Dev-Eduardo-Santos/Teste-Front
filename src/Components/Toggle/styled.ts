import styled from "styled-components";

export const CardContainer = styled.div`
  position: absolute;
  width: 500px;
  height: 150px;
  margin-right: 5rem;
  gap: 0px;
  border-radius: 6px 0px 0px 0px;
  opacity: 100%;
  color: #000;
  background-color: #fff;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 16px;
`;

export const MiniContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
  background-color: #fff;
`;

export const Title = styled.text`
  font-family: Inter;
  gap: 10px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.7px;
  letter-spacing: 0.15em;
  text-align: left;
  color: rgba(95, 65, 217, 1);
`;

export const MiniTitulo = styled.text`
  display: flex;
  font-family: Inter;
  font-size: 15px;
  font-weight: 600;
  line-height: 18.75px;
  letter-spacing: 0.005em;
  text-align: left;
  color: #000;
  margin-bottom: 2px;
`;

export const MiniTexto = styled.p`
  font-family: Inter;
  font-size: 13px;
  font-weight: 400;
  line-height: 19.5px;
  text-align: left;
  margin-left: 50px;
  margin-top: -25px;
`;

export const ImagemC = styled.div`
  margin-right: 10px;
  margin-top: -2px;
`;
