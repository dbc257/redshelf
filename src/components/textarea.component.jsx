import * as React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function Textarea() {
  return (
    <TextareaAutosize
      aria-label="minimum height"
      minRows={6}
      placeholder="Paste HTML here"
      style={{ width: 600 }}
    />
  );
}