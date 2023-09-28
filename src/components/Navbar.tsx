import { useState, type FC } from "react";
import { useWindowSize } from "../hooks";
import { navLinks } from "../constants";

interface Props {
  actualPath: string;
}

export const Navbar: FC<Props> = ({ actualPath }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav aria-label="Primary">
      <div className="navbar">
        <a href="/" className="logomark" aria-label="Go home">
          <img
            className="logo-title"
            src="/logo_title.png"
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
        {/* Movile button */}
        <div className="movile-trigger" onClick={() => setToggle(!toggle)}>
          <svg
            viewBox="0 0 32 32"
            width="30"
            height="30"
            stroke="currentColor"
            fill="currentColor"
          >
            <path d="M28 24H4V21.3H28V24ZM28 17.3H4V14.7H28V17.3ZM28 10.7H4V8H28V10.7Z" />
          </svg>
        </div>
        {toggle && (
          <>
            <div onClick={() => setToggle(!toggle)} className="menu-close-btn">
              <svg
                viewBox="0 0 32 32"
                width="32"
                height="32"
                stroke="currentColor"
                fill="currentColor"
              >
                <path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4l6.6 6.6L8 22.6 9.4 24l6.6-6.6 6.6 6.6 1.4-1.4-6.6-6.6L24 9.4z" />
              </svg>
            </div>

            <div className="movile-menu">
              <div className="">
                {navLinks.map(({ label, path }) => (
                  <a key={path} href={path}>
                    {label}
                  </a>
                ))}
                <a
                  href="https://iesoledadromandenunez.edu.co/contact-iii/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contactanos
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};
