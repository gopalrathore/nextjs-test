import Link from "next/link";
import { Button, Container, Main } from "../../../components/sharedstyles";
import { useRouter } from "next/router";
import {
  absoluteUrl,
  getUserDetail,
  getUserLoginData,
  getUserUpgrades,
} from "../../../lib/helper";
import styled from "styled-components";
import LoginActivityTable from "../../../components/LoginActivityTable";
import UpgradesTable from "../../../components/UpgragesTable";
import moment from "moment";
import { Login, Signup, Upgrade } from "../../../types";

const Title = styled.h2`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  color: #111827;
`;
const SubTitle = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #4b5563;
`;

const TableGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1.25rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const getServerSideProps = (async (context) => {
  const { id } = context.query;
  let userLogins: Login[] = []
  let userDetail: Signup = null
  let userUpgrades: Upgrade[] = []

  try {
    const loginResp = await fetch(absoluteUrl(`/api/logins`))
    const loginData = await loginResp.json()
    userLogins = getUserLoginData(loginData, id);
  } catch (error) {
    console.error(error);
  }

  try {
    const signupResp = await fetch(absoluteUrl(`/api/signups`))
    const signupData = await signupResp.json()
    userDetail = getUserDetail(signupData, id) || null;
  } catch (error) {
    console.error(error);
  }

  try {
    const upgradesResp = await fetch(absoluteUrl(`/api/upgrades`))
    const upgradesData = await upgradesResp.json()
    userUpgrades = getUserUpgrades(upgradesData, id);
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      userLogins,
      userDetail,
      userUpgrades,
    },
  };
})

export default function Users({ userLogins, userDetail, userUpgrades }) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <Container>
      <Main>
        <Button
          style={{ position: "absolute", top: 10, left: "2rem" }}
          onClick={handleBack}
        >
          Back
        </Button>
        {userDetail && <Title>{userDetail.name}</Title>}
        {userDetail && <SubTitle>{userDetail.email}</SubTitle>}
        {userDetail && <SubTitle>
          Signedup on: {moment(userDetail.signupDate).format("LL")}
        </SubTitle>}

        <TableGrid>
          <LoginActivityTable logins={userLogins} />
          <UpgradesTable userUpgrades={userUpgrades} />
        </TableGrid>
      </Main>
    </Container>
  );
}
