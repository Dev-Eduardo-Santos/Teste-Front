import styled from "styled-components";

export const Container = styled.div`
  width: 280px;
  height: auto;
  background-color: #fff;
  border-radius: 8px;
  margin-right: 2rem;
  padding-bottom: 2rem;
  justify-content: space-around;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;
export const Icon = styled.div`
  svg {
    width: 50px;
    height: 50px;
  }
`;
export const Title = styled.p`
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0.005em;
  text-align: left;

  @media (max-width: 820px) {
    text-align: center;
  }
`;
export const Text = styled.p`
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #423d51;

  @media (max-width: 820px) {
    text-align: center;
  }
`;
