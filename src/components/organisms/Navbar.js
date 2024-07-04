"use client";
import { useRouter } from "next/navigation";
import { navData } from "@/data";
import { Navbar as NavbarV2, theme } from "ecommerce-mxtech";
import { useInformation } from "@/store/useInformation";

const { useToken } = theme;

const Navbar = () => {
  const { dataSite } = useInformation();
  const router = useRouter();
  const {
    token: { colorPrimary },
  } = useToken();

  return (
    <NavbarV2
      linksProps={{
        variant: "underline",
        align: "center"
      }}
      textColor="#000"
      backgroundColor="#fff"
      withLogo={true}
      imageProps={{
        src: dataSite.iconImage,
        className: "w-20",
      }}
      links={navData}
      showButtonCart={false}
      onRedirect={(path) => {
        router.push(path);
      }
      }
      buttonContactProps={{
        onClick: () => {
          router.push("/more-information");
        },
      }}
    />
  );
};

export default Navbar;
