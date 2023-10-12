import Head from "next/head";
import {
  Container,
  Main,
  Title,
  SummaryGrid,
} from "../components/sharedstyles";
import Cards from "../components/cards";
import { absoluteUrl, getLastDaysData } from "../lib/helper";
import { useRouter } from "next/router";
import SignUpTable from "../components/SignUpTable";
import { HandleOnClick } from "../types";

export const getServerSideProps = (async () => {
  try {
    const res = await Promise.allSettled([
      fetch(absoluteUrl(`/api/logins`)),
      fetch(absoluteUrl('/api/signups')),
      fetch(absoluteUrl('/api/upgrades')),
    ]);
    const data = await Promise.all(res.map(async (resp) => {
      if (resp.status === "fulfilled") {
        return await resp.value.json();
      } else {
        console.error(resp.reason);
        return null;
      }
    }));

    const overviewLoginsData = getLastDaysData(data[0], 'date');
    const overviewSignupsData = getLastDaysData(data[1], 'signupDate');
    const overviewUpgradesData = getLastDaysData(data[2], 'upgradeDate');

    return {
      props: {
        loginsOverview: overviewLoginsData.length,
        signupsOverview: overviewSignupsData,
        upgradesOverview: overviewUpgradesData.length,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        loginsOverview: null,
        signupsOverview: [],
        upgradesOverview: null,
      },
    };
  }
})

const Home = ({ loginsOverview, signupsOverview, upgradesOverview }) => {

  const router = useRouter();

  const handleOnClick: HandleOnClick = (userId: number) => {
    router.push(`/users/${userId}`)
  }

  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
          <Title>Overview</Title>
          <SummaryGrid>
            <Cards title="New Signups" bottomText="in last week" value={signupsOverview.length}  />
            <Cards title="New Logins" bottomText="in last week" value={loginsOverview}  />
            <Cards title="New Upgrades" bottomText="in last week" value={upgradesOverview}  />
          </SummaryGrid>
          <SignUpTable signups={signupsOverview} handleOnClick={handleOnClick}  />
        </Main>
    </Container>
  );
}

export default Home;