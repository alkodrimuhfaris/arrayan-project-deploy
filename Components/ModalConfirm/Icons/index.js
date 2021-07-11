import React from 'react';
import Question from './Question';
import Success from './Success';
import Error from './Error';
import Warning from './Warning';
import Info from './Info';

// icon: 'question', 'success', 'error', 'warning', 'info'. Default = 'info'
export default function Icon({icon = 'info'}) {
  const Component = () => {
    switch (icon) {
      default: {
        return <Success />;
      }
      case 'question': {
        return <Question />;
      }
      case 'q': {
        return <Question />;
      }
      case 'success': {
        return <Success />;
      }
      case 's': {
        return <Success />;
      }
      case 'error': {
        return <Error />;
      }
      case 'e': {
        return <Error />;
      }
      case 'warning': {
        return <Warning />;
      }
      case 'w': {
        return <Warning />;
      }
      case 'info': {
        return <Info />;
      }
      case 'i': {
        return <Info />;
      }
    }
  };
  return <Component />;
}
