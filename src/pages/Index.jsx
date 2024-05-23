import React, { useState } from 'react';
import { Container, VStack } from '@chakra-ui/react';
import UploadForm from '../components/UploadForm';
import CSVEditor from '../components/CSVEditor';
import DownloadButton from '../components/DownloadButton';

const Index = () => {
  const [csvData, setCsvData] = useState('');
  const [updatedCsvData, setUpdatedCsvData] = useState('');

  const handleUpload = (data) => {
    setCsvData(data);
    setUpdatedCsvData(data);
  };

  const handleAddRow = (newRow) => {
    const rows = updatedCsvData.split('\n');
    const newRowString = newRow.join(',');
    rows.push(newRowString);
    setUpdatedCsvData(rows.join('\n'));
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <UploadForm onUpload={handleUpload} />
        {csvData && <CSVEditor csvData={updatedCsvData} onAddRow={handleAddRow} />}
        {csvData && <DownloadButton csvData={updatedCsvData} />}
      </VStack>
    </Container>
  );
};

export default Index;