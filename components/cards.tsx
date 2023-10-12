import styled from "styled-components";
import { CardsProp } from "../types";

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  max-width: 800px;
`;

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  border-radius: 0.25rem;
`;

const CardWrapper = styled.div`
  display: flex;
  margin-left: 1rem;
  align-items: center;
  padding: 1rem;
`;

const Title = styled.h2`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #4b5563;
`;

const Value = styled.h2`
  font-weight: 700;
  color: #1f2937;
`;

const CardContent = styled.div`
  margin-left: 1rem;
`;

const CardBottom = styled.div`
font-size: 0.875rem;
  line-height: 1.25rem;
  display: flex;
  padding: 1rem;
  align-items: flex-start;
  color: ${({theme}) => theme.colors.primary};
  background-color: ${({theme}) => theme.colors.secondary};
`;

export default function Cards({title, value, bottomText}: CardsProp) {
  return (
    <Card>
      <CardWrapper>
        <CardContent>
          <Title>{title}</Title>
          <Value>{value}</Value>
        </CardContent>
      </CardWrapper>
      <CardBottom>{bottomText}</CardBottom>
    </Card>
  );
}
