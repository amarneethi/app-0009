import NavItem from "./NavItem";

const LeftNav = ({ NavItems }) => {

    const navItems = NavItems;



  return (
    <>
      <div className="mt-4 w-[300px]">
        <h3 className="font-regular px-2 text-sm text-slate-400">Account</h3>
        <ul className="flex-cols mr-4">
          {navItems.map((item, index) => (
            <NavItem key={item.key} {...item} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default LeftNav;
