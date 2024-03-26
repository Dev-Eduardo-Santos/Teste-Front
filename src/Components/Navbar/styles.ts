import styled from "styled-components";

export const NavbarContainer = styled.main`
  display: flex;
  justify-content: space-between;
  height: 88px;
  align-items: center;
  padding: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(6px);
  color: #fff;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    position: fixed;
    left: 0;
    top: 0;
    align-items: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1500;
    background: linear-gradient(259.95deg, #41b5d9 2.25%, #5f41d9 100.27%);
    color: "#000";
  }
`;

export const btn = styled.button`
  background-color: transparent;
  border: none;

  @media (max-width: 768px) {
  }
`;

export const ToggleButton = styled.button`
  display: none;
  background: transparent;
  color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;

  @media (max-width: 768px) {
    display: flex;
    color: #fff;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: 15px;
  }
`;

export const ToggleGrup = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const CustomSelect = styled.ul`
  font-size: 16px;
  color: #fff;
  background-color: transparent;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  position: relative;

  @media (max-width: 768px) {
    padding: 0;
  }
  &::after {
    content: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik01Ljg0OCA2LjY0MzJDNS40NTYzMyA3LjI2OTg3IDQuNTQzNjcgNy4yNjk4NyA0LjE1MiA2LjY0MzJMMC45NTYyNDkgMS41M0MwLjUzOTk2OCAwLjg2Mzk1IDEuMDE4ODEgMS42ODUxNGUtMDcgMS44MDQyNSAyLjM3MTc5ZS0wN0w4LjE5NTc1IDcuOTU5NDJlLTA3QzguOTgxMTkgOC42NDYwN2UtMDcgOS40NjAwMyAwLjg2Mzk1MiA5LjA0Mzc1IDEuNTNMNS44NDggNi42NDMyWiIgZmlsbD0iIzk5RjNGNSIvPgo8L3N2Zz4K");
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    color: rgba(153, 243, 245, 1);
  }
`;
export const NavContaierItem = styled.nav`
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-right: 1rem;

  @media (max-width: 768px) {
    margin: 0;
    padding: 0;
  }
`;

export const NavContainerLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-left: 15px;

  @media (max-width: 768px) {
    position: relative;
    flex-direction: column;
    align-items: center;
    gap: 0px;
    margin-left: 0px;
    padding: 0;
    li:nth-child(6) {
      a:after {
        content: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik01Ljg0OCA2LjY0MzJDNS40NTYzMyA3LjI2OTg3IDQuNTQzNjcgNy4yNjk4NyA0LjE1MiA2LjY0MzJMMC45NTYyNDkgMS41M0MwLjUzOTk2OCAwLjg2Mzk1IDEuMDE4ODEgMS42ODUxNGUtMDcgMS44MDQyNSAyLjM3MTc5ZS0wN0w4LjE5NTc1IDcuOTU5NDJlLTA3QzguOTgxMTkgOC42NDYwN2UtMDcgOS40NjAwMyAwLjg2Mzk1MiA5LjA0Mzc1IDEuNTNMNS44NDggNi42NDMyWiIgZmlsbD0iIzk5RjNGNSIvPgo8L3N2Zz4K");
        position: absolute;
        right: 0;
      }
    }
  }
`;

export const NavItem = styled.li`
  list-style: none;
  @media (max-width: 768px) {
    margin-bottom: 5px;
  }
  :hover {
    color: #cecece;
    cursor: pointer;
    transition: 0.3ms;
  }
  a {
    text-decoration: none;
    font-size: 16px;
    color: #fff;
    position: relative;
    padding-right: 20px;

    @media (max-width: 768px) {
      display: flex;
      text-align: center;
      margin-right: 0;
      padding-bottom: 35px;
      padding-left: 0;
      padding-right: 0;
    }
  }
`;

export const RightContainer = styled.div`
  display: flex;
  padding-right: 4rem;
  align-items: center;
  background-image: url("/Line.svg"), url("/User.svg");
  background-repeat: no-repeat, no-repeat;
  background-size: 0.3%, 6%;
  background-position: 0% 50%, 5% 50%;

  @media (max-width: 768px) {
    padding: 0;
  }

  li:nth-child(1) {
    &:after {
      content: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik01Ljg0OCA2LjY0MzJDNS40NTYzMyA3LjI2OTg3IDQuNTQzNjcgNy4yNjk4NyA0LjE1MiA2LjY0MzJMMC45NTYyNDkgMS41M0MwLjUzOTk2OCAwLjg2Mzk1IDEuMDE4ODEgMS42ODUxNGUtMDcgMS44MDQyNSAyLjM3MTc5ZS0wN0w4LjE5NTc1IDcuOTU5NDJlLTA3QzguOTgxMTkgOC42NDYwN2UtMDcgOS40NjAwMyAwLjg2Mzk1MiA5LjA0Mzc1IDEuNTNMNS44NDggNi42NDMyWiIgZmlsbD0iIzk5RjNGNSIvPgo8L3N2Zz4K");
      position: absolute;
      right: 4rem;
    }
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const Button = styled.button`
  width: 160px;
  height: 40px;
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  background: transparent;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 80px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
`;

export const LanguageSelector = styled.select`
  padding: 0.5rem;
  background-color: transparent;
  color: rgba(153, 243, 245, 1);
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Separador = styled.div`
  height: 24px;
  border: 1px solid rgba(153, 243, 245, 1);
`;
