import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "", text: "Home" },
  { to: "/team", text: "Team" },
  { to: "/partners", text: "Partners" },
  { to: "/overview", text: "Events", subLinks: [
    { to: "/sec", text: "SEC" },
    { to: "/qtcapital", text: "QT Capital" },
  ]},
  { to: "/newsletter", text: "Articles" },
];


export function HeroHeader() {
  return (
    <header className="absolute top-0 z-50 w-full flex items-center px-8 lg:px-24 xl:px-48 py-4 md:py-8">
      <div className="flex-1">
        <Link to="/">
          <img
            src="/logo-transparent.png"
            alt="logo"
            className="h-10 md:h-12"
          />
        </Link>
      </div>

      <nav className="flex items-center gap-4 md:gap-6 md:uppercase text-sm font-semibold tracking-tighter py-2 px-4 md:py-2 md:px-4 rounded-xl backdrop-blur-sm md:drop-shadow-2xl">
        {navLinks.map((link) => (
          link.subLinks ? (
            <div key={link.text} className="relative group">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "transition-all hover:text-foreground/80 hover:font-bold hover:tracking-normal text-foreground",
                    isActive ? "text-foreground" : "text-foreground/80"
                  )
                }
              >
                {link.text}
              </NavLink>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {link.subLinks.map((subLink) => (
                  <NavLink
                    key={subLink.to}
                    to={subLink.to}
                    className={({ isActive }) =>
                      cn(
                        "block px-4 py-2 text-sm transition-all hover:bg-gray-100",
                        isActive ? "text-blue-500 font-bold" : "text-black"
                      )
                    }
                  >
                    {subLink.text}
                  </NavLink>
                ))}
              </div>
            </div>
          ) : (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "transition-all hover:text-foreground/80 hover:font-bold hover:tracking-normal",
                  isActive ? "text-foreground" : "text-foreground/80"
                )
              }
            >
              {link.text}
            </NavLink>
          )
        ))}
      </nav>
    </header>
  );
}
