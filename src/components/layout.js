import * as React from "react";
import { Link } from "gatsby";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="bg-blue-black h-screen w-screen">
      <nav className="pl-16 pt-8">
        <ul className="flex flex-col space-y-4">
          <li className="flex items-center">
            <div className="mr-4 h-px w-12 bg-bright-gray"></div>
            <Link to="/about" className="text-bright-gray">
              about
            </Link>
          </li>
          <li>
            <Link to="/experience" className="text-bright-gray">
              experience
            </Link>
          </li>
          <li>
            <Link to="/projects" className="text-bright-gray">
              projects
            </Link>
          </li>
        </ul>
      </nav>

      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
