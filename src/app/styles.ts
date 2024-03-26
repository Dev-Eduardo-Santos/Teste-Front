import styled from "styled-components";

export const Container = styled.div`
  padding: 0;
  margin: 0;
  position: relative;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  background-image: url("/icon-playlists2.svg"), url("/icon-playlists2.svg"),
    url("/icon-certified.svg"), url("/icon-playlists2.svg"),
    url("/icon-playlists2.svg"),
    linear-gradient(259.95deg, #41b5d9 2.25%, #5f41d9 100.27%);
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, no-repeat;
  background-size: 10%, 5%, 8%, 5%, 10%, cover;
  background-position: top left, 20% 0.1%, 45% 8%, 72% 0.4%, top right, center;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5vw;
  margin-left: 10vw;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 15vw auto;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
  margin-right: 2vw;
  gap: 20px;
  opacity: 0.75;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-right: 0;
  }
`;

export const ContentImg = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: url("/profile.svg"), url("/Union.svg"), url("/Union2.svg");
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-size: 100%, 25%, 25%;
    background-position: center, 90% 45%, 10% 50%;
  }
`;

export const Background = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  margin-top: 10px;
  z-index: auto;
  margin-right: 4rem;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: linear-gradient(
    93.59deg,
    #41b5d9 -80.31%,
    rgba(65, 181, 217, 0) 100.45%
  );

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: 280px;
    height: 280px;
    margin-left: 60px;
    margin-bottom: -20px;
  }
`;

export const WrapperContent = styled.div`
  padding: 0;
  padding-bottom: 3rem;
  margin-top: 0;
  width: 100%;
  min-height: 100%;
  background-color: #fff;

  @media (max-width: 768px) {
    width: 100%;
    height: 1350px;
  }
`;

export const FeaturedResources = styled.div`
  margin-left: 152px;
  margin-right: 152px;
  padding-top: 100px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1200px) {
    margin-left: 100px;
    margin-right: 80px;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-left: 20px;
    margin-right: 20px;
    padding-top: 30px;
  }
`;

export const TitleFeatured = styled.text`
  text-align: left;
  margin-right: 30px;
  font-family: Degular;
  font-size: 16px;
  font-weight: 600;
  line-height: 16.8px;
  letter-spacing: 0.15em;
  color: #432e98;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Description = styled.text`
  font-family: inter, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 16px;
    margin-left: 20px;
  }
`;

export const Title = styled.h1`
  font-family: Degular;
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0.005em;
  text-align: left;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
    display: inline-block;
    margin-bottom: -10px;
  }
`;

export const TitleStudent = styled.p`
  font-family: Degular;
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0.005em;
  text-align: left;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
    margin: 0 auto;
    max-width: 90%;
  }
`;

export const FeaturedContent = styled.div`
  margin-left: 152px;
  margin-right: 152px;
  padding-top: 1rem;

  @media (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
    padding-top: 0.5rem;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 3rem;

  @media (max-width: 820px) {
    display: flex;
    justify-content: center;
    text-align: center;
  }
`;

export const Line = styled.div`
  border: 1px solid #e7e7e9;
  margin-top: 3rem;

  @media (max-width: 768px) {
    border: 1px solid #e7e7e9;
    margin-top: 1rem;
  }
`;

export const TitleFeatured2 = styled.div`
  margin-top: 6px;
  margin-right: 22.5rem;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 16.8px;
  letter-spacing: 0.15em;

  @media (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
    padding-top: 0.5rem;
    gap: 20px;
  }
`;

export const ViewMore = styled.a`
  margin-left: 10px;
  margin-top: 3px;
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 16.8px;
  letter-spacing: 0.15em;
  color: rgba(95, 65, 217, 1);

  @media (max-width: 768px) {
    display: flex;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 1.5rem;
    gap: 20px;
  }
`;

export const Viewdescription = styled.div``;
