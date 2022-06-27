import Link from "next/link";

const Navbar = () => {
    return (
        <header>
            <nav className="navbar bg-sky-400">
                <div className="flex-1">
                    <Link href="/" passHref>
                        <a className="text-xl normal-case btn btn-ghost">
                            IMFD
                        </a>
                    </Link>
                </div>
                <div className="flex-none">
                    <ul className="p-0 menu menu-horizontal">
                        <li>
                            <Link href="/company-info" passHref>
                                <a>Company Info</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
