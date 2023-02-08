import { Link } from "react-router-dom";
import { MenuOption } from "../../models/menu/menu";
import "./menu.css";

type MenuProps = {
  options: MenuOption[];
};
export function Menu({ options }: MenuProps) {
  return (
    <nav>
      <ul>
        {options.map((item) => (
          <li key={item.label}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
