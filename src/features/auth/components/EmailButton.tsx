import React from 'react';
import { Button } from '../../../components/UI/button/Button';

export function EmailButton() {
  const handleEmailClick = () => {
    // This triggers the default mail client with an empty message
    window.location.href = "mailto:"; 
  };

  return (
    <Button onClick={handleEmailClick}>
      Send Email
    </Button>
  );
}