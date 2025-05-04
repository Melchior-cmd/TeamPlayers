import { Container, Title, Icon } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface GroupCardProps extends TouchableOpacityProps {
  title: string;
}

export function GroupCard({ title, ...rest }: GroupCardProps) {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
}
