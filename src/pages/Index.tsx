import { useState } from 'react';
import Welcome from './Welcome';
import MainSite from './MainSite';

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  // if (showWelcome) {
  //   return <Welcome onComplete={handleWelcomeComplete} />;
  // }

  return <MainSite />;
};

export default Index;