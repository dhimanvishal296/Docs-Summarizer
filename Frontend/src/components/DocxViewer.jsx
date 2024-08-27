/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import mammoth from 'mammoth';

const DocxViewer = ({ file }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const reader = new FileReader();
    reader.onloadend = async () => {
      const arrayBuffer = reader.result;
      const result = await mammoth.convertToHtml({ arrayBuffer });
      setContent(result.value);
    };

    // Make sure the file is being passed correctly
    if (file instanceof Blob) {
      reader.readAsArrayBuffer(file);
    } else {
      console.error('Passed file is not of type Blob:', file);
    }
  }, [file]);

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default DocxViewer;
