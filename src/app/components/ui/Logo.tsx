import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
    </Link>
  );
};

export default Logo;
