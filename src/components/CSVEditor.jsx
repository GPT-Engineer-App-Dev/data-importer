import React, { useState } from 'react';
import { Box, Button, Table, Tbody, Td, Th, Thead, Tr, Input } from '@chakra-ui/react';

const CSVEditor = ({ csvData, onAddRow }) => {
  const [newRow, setNewRow] = useState([]);

  const handleInputChange = (index, value) => {
    const updatedRow = [...newRow];
    updatedRow[index] = value;
    setNewRow(updatedRow);
  };

  const handleAddRow = () => {
    onAddRow(newRow);
    setNewRow([]);
  };

  const rows = csvData.split('\n').map((row) => row.split(','));

  return (
    <Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            {rows[0].map((header, index) => (
              <Th key={index}>{header}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {rows.slice(1).map((row, rowIndex) => (
            <Tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <Td key={cellIndex}>{cell}</Td>
              ))}
            </Tr>
          ))}
          <Tr>
            {rows[0].map((_, index) => (
              <Td key={index}>
                <Input
                  value={newRow[index] || ''}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
              </Td>
            ))}
          </Tr>
        </Tbody>
      </Table>
      <Button mt={2} onClick={handleAddRow}>
        Add Row
      </Button>
    </Box>
  );
};

export default CSVEditor;