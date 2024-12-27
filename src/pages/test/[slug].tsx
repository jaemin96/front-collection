import { useRouter } from 'next/router';


const SlugPage:React.FC = () => {
  /* === state === */
  const router = useRouter();

  /* === handler === */

  return (
    <>
      <div>SlugPage : {router?.query?.slug}</div>
    </>
  );
};

export default SlugPage;