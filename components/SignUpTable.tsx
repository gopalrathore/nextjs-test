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
import { SignupTableProps } from "../types";

export default function SignUpTable({ signups, handleOnClick }: SignupTableProps) {
  return (
    <TableWrapper>
      <Title>Recent user signup</Title>
      <TableDesk>
        <TableContainer>
          <Thead>
            <tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Date</Th>
            </tr>
          </Thead>
          <Tbody>
            {signups.map((user) => (
              <Tr onClick={() => handleOnClick(user.id)} key={user.id}>
                <Td>{user.id}</Td>
                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
                <Td>{moment(user.signupDate).format("LL")}</Td>
              </Tr>
            ))}
          </Tbody>
        </TableContainer>
      </TableDesk>
    </TableWrapper>
  );
}
