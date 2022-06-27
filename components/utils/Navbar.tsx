import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Navbar = () => {
    const router = useRouter();

    const [auth, setAuth] = useState(false);

    useEffect(() => {
        setAuth(localStorage.getItem("auth") == "true");
    }, [router]);

    const logout = () => {
        if (localStorage.getItem("auth") == "true") {
            localStorage.setItem("auth", "");
            router.push("/login");
        }
    };
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
                        <li>
                            <a onClick={logout}>{auth ? "Logout" : "Login"}</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
