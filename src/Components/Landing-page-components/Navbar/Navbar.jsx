const Navbar = () => {
  return (
    <div className="navbar bg-[#10182b] relative z-10 lg:fixed lg:w-full shadow-sm px-2 lg:px-12">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="text-[#91a0b5]">About</a>
            </li>
            <li>
              <a className="text-[#91a0b5]">Our Solutions</a>
            </li>
            <li>
              <a className="text-[#91a0b5]">In Action</a>
            </li>
            <li>
              <a className="text-[#91a0b5]">Technology</a>
            </li>
            <li>
              <a className="text-[#91a0b5]">Benefits</a>
            </li>
            <li>
              <a className="text-[#91a0b5]">Case Use</a>
            </li>
          </ul>
        </div>
        <a className="text-white font-bold text-2xl">Clin</a>
      </div>
      <div className="navbar-end">
        <ul className="menu hidden md:flex gap-[10px] menu-horizontal px-1">
          <li>
              <a className="text-[#91a0b5] text-[16px]">About</a>
            </li>
            <li>
              <a className="text-[#91a0b5] text-[16px]">Our Solutions</a>
            </li>
            <li>
              <a className="text-[#91a0b5] text-[16px]">In Action</a>
            </li>
            <li>
              <a className="text-[#91a0b5] text-[16px]">Technology</a>
            </li>
            <li>
              <a className="text-[#91a0b5] text-[16px]">Benefits</a>
            </li>
            <li>
              <a className="text-[#91a0b5] text-[16px]">Case Use</a>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
