// import { Image } from "astro:assets";

import { useWindowSize } from "../hooks";

export const Navbar = () => {
  const { width } = useWindowSize();
  return (
    <nav aria-label="Primary">
      <div className="navbar">
        <a href="/" className="logomark" aria-label="Go home">
          <img
            className="logo-title"
            src={width! >= 480 ? "/logo_title.png" : "/logo.png"}
            alt="icon"
            width="50"
            height="50"
          />
        </a>
        <ul></ul>
      </div>
    </nav>
  );
};
