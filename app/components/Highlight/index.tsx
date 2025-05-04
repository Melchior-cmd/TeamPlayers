import { Container, Title, Subtitle } from "./styles";

interface HighlightProps {
  title: string;
  subtitle: string;
}

export function Highlight({ title, subtitle }: HighlightProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
