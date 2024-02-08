import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

import TeamCard from "@/components/cards/team-card";
import Container from "@/components/container";

const TeamView = () => {
  return (
    <Container
      sx={{
        p: { mb: 4 },
      }}
    >
      <Heading as={"h1"} mb={8}>
        Team
      </Heading>
      <Box mb={12}>
        <Heading as={"h2"} fontSize={[22, 24, 28]} mb={2}>
          Meet the team behind &quot;The Impact Wave&quot;
        </Heading>
        <Text>
          A team with 90+ years of experiences making global and sustainable
          impact
        </Text>
      </Box>
      <Box>
        <SimpleGrid columns={[1, 1, 2]} spacing={8}>
          <TeamCard
            link={"https://www.linkedin.com/in/abhib3012/"}
            image={"/images/team/abhishek.jpg"}
            name={"Abhishek Bhattacharya"}
            content={
              "Ecosystem and execution guru, impact serial entrepreneur, author. Building for the masses; advisor to impact entrepreneurs and startups."
            }
          />
          <TeamCard
            link={"https://www.linkedin.com/in/setcookie/"}
            image={"/images/team/frank.jpg"}
            name={"Frank Mueller"}
            content={
              "Startup Engineer - painting the Future of Tech for Good. 22 years in full stack developing. NGOs Board Member."
            }
          />
          <TeamCard
            link={"https://www.linkedin.com/in/bjorn-rosendahl/"}
            image={"/images/team/bjorn.jpg"}
            name={"Bjorn Rosendahl"}
            content={
              "The banking dinosaur turning zeros into heroes. Worked for 27+ years with leading financial and tech institutions."
            }
          />
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default TeamView;
