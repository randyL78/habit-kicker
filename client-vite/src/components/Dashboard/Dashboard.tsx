import Container from "@/components/UI/Container";
import {useAppSelector} from "@/hooks.ts";

export default function Dashboard() {
  const currentUser = useAppSelector(state => state.auth.currentUser);

  return (
    <Container>
      <h1>Welcome {currentUser.display_name}!</h1>
    </Container>
  )
}
