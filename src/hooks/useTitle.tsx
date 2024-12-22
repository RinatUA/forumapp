import React, { useEffect } from 'react';

function useTitle() {
  useEffect(() => {
    document.title = 'My Page Title';
  }, []);
}