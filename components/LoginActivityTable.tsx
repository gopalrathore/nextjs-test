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
import { LoginActivityTableProps } from "../types";

export default function LoginActivityTable({ logins }: LoginActivityTableProps) {
  return (
    <TableWrapper>
      <Title>Recent Activity</Title>
      <TableDesk>
        <TableContainer>
          <Thead>
            <tr>
              <Th>ID</Th>
              <Th>Date</Th>
              <Th>Device</Th>
            </tr>
          </Thead>
          <Tbody>
            {logins.map((user, i) => (
              <Tr key={i}>
                <Td>{user.userId}</Td>
                <Td>{moment(user.date).format("LL")}</Td>
                <Td>{user.device}</Td>
              </Tr>
            ))}
          </Tbody>
        </TableContainer>
      </TableDesk>
    </TableWrapper>
  );
}
