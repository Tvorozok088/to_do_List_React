import searchimg from "../assets/search.svg";
import dark from "../assets/dark.svg";
import white from "../assets/white.svg";
import searchdark from "../assets/searchdark.svg";
type Props = {
  changeTheme: () => void;
  theme: "white" | "dark";
  search: string;
  changeSearch: (event: any) => void;
  filter: string;
  changeFilter: (event: any) => void;
};

export default function Header({
  changeTheme,
  theme,
  search,
  changeSearch,
  filter,
  changeFilter,
}: Props) {
  return (
    <header className="header">
      <h1 className="header__title">TODO LIST</h1>
      <div className="header__row">
        <div className="header__search">
          <input
            type="text"
            className="header__input"
            placeholder="Search note..."
            value={search}
            onChange={changeSearch}
          />
          {theme === "white" ? (
            <img src={searchimg} alt="" />
          ) : (
            <img src={searchdark} alt="" />
          )}
        </div>
        <select
          className="header__select"
          value={filter}
          onChange={changeFilter}
        >
          <option value="">All</option>
          <option value="Complete">Complete</option>
          <option value="Incomplete">Incomplete</option>
        </select>
        <button className="header__button" onClick={changeTheme}>
          {theme === "white" ? (
            <img src={dark} alt="" />
          ) : (
            <img src={white} alt="" />
          )}
        </button>
      </div>
    </header>
  );
}
