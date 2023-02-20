const NavItem = ({ children, ...props }) => {
  return (
    <>
      <li className="my-2">
        <a
          className={`hover:bg-slate-200 font-regular flex ${
            props.selected ? "bg-slate-200" : ""
          } rounded-lg py-2.5 px-4 text-sm  ${
            props.selected ? " text-slate-700" : "text-slate-500"
          }`}
          href={props.link}
        >
          {props.name}
        </a>
      </li>
    </>
  );
};

export default NavItem;
