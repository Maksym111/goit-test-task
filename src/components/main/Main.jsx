import {
  Container,
  InfoBlock,
  MainButton,
  MainSection,
  SubTitle,
  Title,
} from "./Main.styled";
import { useLocation } from "react-router-dom";

const Main = () => {
  const location = useLocation();

  return (
    <MainSection>
      <Container>
        <InfoBlock>
          <Title>Find your own tweet person</Title>
          <SubTitle>
            Is a free social networking site where users broadcast short posts
            known as tweets. These tweets can contain text, videos, photos or
            links.
          </SubTitle>
          <MainButton to="tweets" state={{ from: location }}>
            Find Your Person
          </MainButton>
        </InfoBlock>
      </Container>
    </MainSection>
  );
};
export default Main;
