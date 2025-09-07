'use client';
import { useRouter } from 'next/navigation';
import { dataSite, navData } from '@/data';
import { Navbar as NavbarV2, theme } from 'ecommerce-mxtech';

const { useToken } = theme;

const Navbar = () => {
  const router = useRouter();

  return (
    <NavbarV2
      linksProps={{
        variant: 'underline',
        align: 'center',
      }}
      textColor='#000'
      backgroundColor='#fff'
      withLogo={true}
      imageProps={{
        src: dataSite.iconImage,
        className: 'w-20',
      }}
      links={navData}
      showButtonCart={true}
      onRedirect={(path) => {
        router.push(path);
      }}
      buttonContactProps={{
        onClick: () => {
          router.push('/more-information');
        },
      }}
    />
  );
};

export default Navbar;
