import type { ImageProps } from "next/image";
import Image from "next/image";
import Link from "next/link";

import BrandLogo from "@/assets/impactwave-logo.svg";
import BrandLogoReverse from "@/assets/impactwave-logo-reverse.svg";

export interface LogoProps extends Omit<ImageProps, "src" | "alt"> {
  reverse?: boolean;
}

const Logo = (props: LogoProps) => {
  const { reverse = false, ...rest } = props;
  return (
    <>
      <Link href={"/"}>
        <Image
          src={reverse ? BrandLogoReverse : BrandLogo}
          alt={"The Impact Wave"}
          width={120}
          {...rest}
        />
      </Link>
    </>
  );
};

export default Logo;
