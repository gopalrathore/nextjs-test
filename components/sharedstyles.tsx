import styled from "styled-components";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Container = styled.div`
  padding: 3rem 0.5rem;
  // display: flex;
  // flex-flow: column nowrap;
  // justify-content: center;
  // align-items: center;
  // height: 100vh;
  min-height: 100vh;

  background: radial-gradient(#d7e0ea 18.75%, transparent 0) 2px 2px/10px 10px
    #ecf0f5;
  background-image: radial-gradient(#d7e0ea 18.75%, transparent 0);
  background-position-x: 2px;
  background-position-y: 2px;
  background-size: 10px 10px;
  background-repeat-x: initial;
  background-repeat-y: initial;
  background-attachment: scroll;
  background-origin: padding-box;
  background-origin: initial;
  background-clip: border-box;
  background-clip: initial;
  background-color: #ecf0f5;
`;
const Main = styled.main`
  padding: 5rem 2rem;
  font-family: ${inter.style.fontFamily};
  background-color: #fff;
  margin: 0 auto;
  width: 95%;
  position: relative;
`;

const Title = styled.h1`
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

const Description = styled.p`
  line-height: 1.5;
  font-size: 1.5rem;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 0.5rem 1.5rem;
  border-radius: 9px;
`;

const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1.25rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export { Container, Main, Title, Description, SummaryGrid, Button };
