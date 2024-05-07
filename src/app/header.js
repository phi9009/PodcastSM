import Link from "next/link";

export default function Header () {
    let isLoggedIn = true;

    const ifLoggedIn = function () {
        return (
            <div className="Auth flex" key="2">
                <div  className="button logout-button">
                    Log Out
                </div>
            </div>
        )
    }
    
    const ifLoggedOut = function () {
        return (
            <div className="Auth flex" key="2">
                <div className="button login-button m-2">
                    Log in
                </div>
                <div className="button signup-button m-2">
                    Sign Up
                </div>
            </div>
        )
    }

    return (
        <header className="border-2 p-3 flex">
            <Link className="logo grow text-xl" href={`/`}>
            <div  key="1">SPEAKR</div>
            </Link>
            {isLoggedIn?ifLoggedIn():ifLoggedOut()}
        </header>
    )
}