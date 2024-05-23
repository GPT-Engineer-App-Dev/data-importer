import React from 'react';
import { Button } from '@chakra-ui/react';

const DownloadButton = ({ csvData }) => {
  const handleDownload = () => {
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'updated.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Button mt={2} onClick={handleDownload}>
      Download CSV
    </Button>
  );
};

export default DownloadButton;