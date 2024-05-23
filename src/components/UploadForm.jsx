import React from 'react';
import { Box, Button, Input } from '@chakra-ui/react';

const UploadForm = ({ onUpload }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result;
        onUpload(text);
      };
      reader.readAsText(file);
    }
  };

  return (
    <Box>
      <Input type="file" accept=".csv" onChange={handleFileChange} />
      <Button mt={2} onClick={() => document.querySelector('input[type="file"]').click()}>
        Upload CSV
      </Button>
    </Box>
  );
};

export default UploadForm;