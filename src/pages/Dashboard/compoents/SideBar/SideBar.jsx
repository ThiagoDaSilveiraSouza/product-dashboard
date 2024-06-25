import "./style.css";
import PropTypes from "prop-types";

export const SideBar = ({ usePage }) => {
  const [activePage, setActivePage] = usePage;
  return (
    <div className="sidebar">
      <ul>
        <li
          className={activePage === "template" ? "active" : ""}
          onClick={() => setActivePage("template")}
        >
          Template de Produto
        </li>
        <li
          className={activePage === "product" ? "active" : ""}
          onClick={() => setActivePage("product")}
        >
          Produto
        </li>
      </ul>
    </div>
  );
};

SideBar.propTypes = {
  usePage: PropTypes.array.isRequired,
};
