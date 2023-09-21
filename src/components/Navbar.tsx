import type { FC } from "react";
import { useWindowSize } from "../hooks";
import { navLinks } from "../constants";

interface Props {
  actualPath: string;
}

export const Navbar: FC<Props> = ({ actualPath }) => {
  const { width } = useWindowSize();
  return (
    <nav aria-label="Primary">
      <div className="navbar">
        <a href="/" className="logomark" aria-label="Go home">
          <img
            className="logo-title"
            src={width! >= 480 ? "/logo_title.png" : "/logo.png"}
            alt="icon"
            width="60"
            height="60"
          />
        </a>
        <ul>
          {navLinks.map(({ label, path }) => (
            <a
              className={actualPath === path ? "actual-page-link" : "nav-link"}
              key={path}
              href={path}
              aria-disabled
            >
              {label}
            </a>
          ))}
          <a
            className="nav-link"
            href="https://iesoledadromandenunez.edu.co/contact-iii/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contactanos
          </a>
        </ul>
      </div>
    </nav>
  );
};
