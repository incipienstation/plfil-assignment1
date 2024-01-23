import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';


const Main: FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/home");
  }, []);

  return (
    <></>
  );
};

export default Main;