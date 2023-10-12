import React from "react";
import { Title } from "./sharedstyles";
import moment from "moment";
import {
  TableContainer,
  TableDesk,
  TableWrapper,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "./tableStyles";
import { UpgradesTableProps } from "../types";

export default function UpgradesTable({ userUpgrades }: UpgradesTableProps) {
  return (
    <TableWrapper>
      <Title>Plan Upgrades</Title>
      <TableDesk>
        <TableContainer>
          <Thead>
            <tr>
              <Th>ID</Th>
              <Th>Old plan</Th>
              <Th>New plan</Th>
              <Th>Upgraded on</Th>
            </tr>
          </Thead>
          <Tbody>
            {userUpgrades.map((user, i) => (
              <Tr key={i}>
                <Td>{user.userId}</Td>
                <Td>{user.oldPlan}</Td>
                <Td>{user.newPlan}</Td>
                <Td>{moment(user.upgradeDate).format("LL")}</Td>
              </Tr>
            ))}
          </Tbody>
        </TableContainer>
      </TableDesk>
    </TableWrapper>
  );
}
