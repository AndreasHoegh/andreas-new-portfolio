import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

function Nav() {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname &&
              "text-[#0000FF] border-b-2 border-[#0000FF]"
            } capitalize font-medium hover:text-[#0000FF] transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}

export default Nav;
