import Nav_link from "./Nav_link";

const enlaces = {
  home: {
    name: "home",
    link: "#",
  },
  work: {
    name: "work",
    link: "#",
  },
  about: {
    name: "about",
    link: "#",
  },
  contact: {
    name: "contact",
    link: "#",
  },
};

function Nav() {
  return (
    <nav>
      <ul className="nav">
        <Nav_link data={enlaces.home} />
        <Nav_link data={enlaces.work} />
        <li className="logo">
          <a href="#">
            <img src="./eye.png" alt="" />
          </a>
        </li>
        <Nav_link data={enlaces.about} />
        <Nav_link data={enlaces.contact} />
      </ul>
    </nav>
  );
}

export default Nav;
