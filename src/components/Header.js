import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...  p-5 h-19">
        <div className="logo">
          <Link to="/">
            <h2 className="font-bold text-xl md:text-2xl lg:text-3xl text-black">Bayz's Blog</h2>
          </Link>
        </div>

        <nav>
          <ul className="flex">
            <li className="mr-5 font-bold text-xl md:text-2xl lg:text-3xl text-black">
              <button>
                <Link to="/">Home</Link>
              </button>
            </li>
            <li className="font-bold text-xl md:text-2xl lg:text-3xl text-black">
              <button>
                <Link to="/blog">Blog</Link>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
