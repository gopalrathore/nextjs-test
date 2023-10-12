import styled from "styled-components";

const TableContainer = styled.table`
  width: 100%;
`;

const Thead = styled.thead`
  border-bottom-width: 2px;
  border-color: #e5e7eb;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const Th = styled.th`
  color: #fff;
  padding: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  letter-spacing: 0.025em;
  text-align: left;
`;

const Td = styled.td`
  padding: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #374151;
  white-space: nowrap;
`;

const Tbody = styled.tbody`
  border-top-width: 1px;
  border-color: #f3f4f6;
`;

const Tr = styled.tr`
  cursor: pointer;

  :hover {
    background: #eff6ff;
  }
`;

const TableWrapper = styled.div`
  margin-top: 6rem;
`;

const TableDesk = styled.div`
  overflow: auto;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export { TableWrapper, Tr, Tbody, Td, Th, Thead, TableContainer, TableDesk };
