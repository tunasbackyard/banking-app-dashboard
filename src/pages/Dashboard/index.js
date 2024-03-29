import { Grid, Text } from "@mantine/core";
import Head from "src/components/common/Head";
import Section from "src/components/layout/Section";
import ServicesBox from "./components/ServicesBox";
import Container from "src/components/layout/Container";

const Dashboard = () => {
  return (
    <Section>
      <Grid>
        <Head title="Dashboard | Caspianbank" />
        <Grid.Col xs={8}>
          <article>
            <Text className="font-semibold">Movements</Text>
            <Container style="min-h-[450px] overflow-y-auto"></Container>
          </article>
          <article className="w-fit ml-auto my-5">
            <h3>Balance</h3>
            <Container style="min-h-[50px] min-w-[120px] w-fit"></Container>
          </article>
        </Grid.Col>
        <Grid.Col span={4}>
          <ServicesBox />
        </Grid.Col>
      </Grid>
    </Section>
  );
};

export default Dashboard;
