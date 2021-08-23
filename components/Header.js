import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

const Header = () => {
  const HEADER_ITEMS = [
    { title: "HOME", icon: HomeIcon },
    { title: "TRENDING", icon: LightningBoltIcon },
    { title: "VERIFIED", icon: BadgeCheckIcon },
    { title: "COLLECTIONS", icon: CollectionIcon },
    { title: "SEARCH", icon: SearchIcon },
    { title: "ACCOUNT", icon: UserIcon },
  ];

  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
      <div className="flex flex-grow justify-between w-4/6 max-w-2xl">
        {HEADER_ITEMS.map((headerItem) => (
          <HeaderItem
            key={headerItem.title}
            title={headerItem.title}
            Icon={headerItem.icon}
          />
        ))}
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
      />
    </header>
  );
};

export default Header;
