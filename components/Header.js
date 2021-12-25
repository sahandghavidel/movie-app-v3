import {
  HomeIcon,
  UserIcon,
  PhoneIcon,
  InformationCircleIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <header className="select-none bg-gray-700 text-gray-200 flex justify-between p-3 flex-col items-center sm:flex-row">
      <div className="flex items-center">
        <HeaderIcon title="HOME" Icon={HomeIcon} />
        <HeaderIcon title="ACCOUNT" Icon={UserIcon} />
        <HeaderIcon title="CONTACT" Icon={PhoneIcon} />
        <HeaderIcon title="ABOUT" Icon={InformationCircleIcon} />
      </div>
      <Image
        className="cursor-pointer active:brightness-110"
        width={100}
        height={100}
        onClick={() => router.push("/")}
        src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
      />
    </header>
  );
}
