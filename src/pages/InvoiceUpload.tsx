import React, { useState } from 'react';
import axios from 'axios';

const InvoiceUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('invoice', file);

    try {
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage('File uploaded successfully!');
    } catch (error) {
      setMessage('Failed to upload file.');
    }
  };

  return (
    <div className="invoice-upload">
      <h1 className="text-2xl font-bold mb-4">Upload Invoice</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 mt-2">Upload</button>
      {message && <p className="mt-2 text-red-500">{message}</p>}
    </div>
  );
};

export default InvoiceUpload;