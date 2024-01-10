import React, {useEffect} from 'react';
import {useRouter} from 'next/router';


const RootPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /home
    router.replace("/home").then(r => null).catch(e => null)
  }, []);

  return (
    <></>
  );
};

export default RootPage;