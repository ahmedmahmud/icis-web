import { Link, NavLink } from "react-router-dom"
import { cn } from "@/lib/utils"

import { MobileNav } from "@/components/ui/mobile-nav"

export function SiteHeader() {
  return (
    // bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60
    <header className="fixed top-0 z-50 w-full">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="inline-block">
              <span className="font-bold">Investment Society</span> Imperial College London
            </span>
          </Link>
        </div>

        <div className="flex-1 items-center justify-between space-x-2 hidden md:flex md:justify-end">
          <nav className="flex items-center gap-6 text-sm">
            <NavLink
              to="/"
              className={({ isActive }) => cn(
                "transition-colors hover:text-foreground/80",
                isActive ? "text-foreground" : "text-foreground/60"
              )}
            >
              Home
            </NavLink>
            <NavLink
              to="/team"
              className={({ isActive }) => cn(
                "transition-colors hover:text-foreground/80",
                isActive ? "text-foreground" : "text-foreground/60"
              )}
            >
              Team
            </NavLink>
            <NavLink
              to="/partners"
              className={({ isActive }) => cn(
                "transition-colors hover:text-foreground/80",
                isActive ? "text-foreground" : "text-foreground/60"
              )}
            >
              Partners
            </NavLink>
            <NavLink
              to="/sec"
              className={({ isActive }) => cn(
                "transition-colors hover:text-foreground/80",
                isActive ? "text-foreground" : "text-foreground/60"
              )}
            >
              SEC
            </NavLink>
            <NavLink
              to="/qtcapital"
              className={({ isActive }) => cn(
                "transition-colors hover:text-foreground/80",
                isActive ? "text-foreground" : "text-foreground/60"
              )}
            >
              QT Capital
            </NavLink>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2 md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}