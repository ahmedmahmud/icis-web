import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const navLinks = [
  // { to: "/", text: "Home" },
  { to: "/team", text: "Team" },
  { to: "/partners", text: "Partners" },
  { to: "/sec", text: "SEC" },
  { to: "/qtcapital", text: "QT Capital" },
];

export function HeroHeader() {
  return (
    <header className="absolute top-0 z-50 w-full flex items-center px-12 lg:px-24 xl:px-48 py-8">
      <div className="flex-1">
        <Link href="/">
          <img src="/logo-transparent.png" alt="logo" className="h-12" />
        </Link>
      </div>

      <nav className="flex items-center gap-6 uppercase text-sm font-semibold tracking-tighter py-2 px-4 rounded-xl backdrop-blur-sm drop-shadow-2xl">
        {navLinks.map((link) => (
          <NavLink
            key={link}
            to={link.to}
            className={({ isActive }) =>
              cn(
                "transition-all hover:text-foreground/80 hover:font-bold hover:tracking-normal",
                isActive ? "text-foreground" : "text-foreground/80",
              )
            }
          >
            {link.text}
          </NavLink>
        ))}
      </nav>

      {/* <div className="flex-1" /> */}
    </header>
  );
}
