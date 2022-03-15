import { Link } from "react-router-dom";
import { routesList } from "../../routes";

export function NavHeader() {
  return (
    <header className="w-screen flex content-center ">
      <div className="">logo</div>
      <nav>
        <ul className="flex">
        {routesList.map((el) => (
          <li className="">
            <Link key={el.path} to={el.path}>{el.desc}</Link>
          </li>
        ))}
        </ul>
      </nav>
    </header>
  )
}