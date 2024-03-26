import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  margin-top: 10px;
  position: absolute;
  width: 100px;
  height: auto;
  gap: 5px;
  right:0;
  right:2.3rem;
  background-color: #FFF;
  border-radius: 8px;
  padding-bottom: 2rem;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const itemSection = styled.p`
  text-align: center;
`;