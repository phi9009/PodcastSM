import Link from "next/link";

export default function Header () {
    let isLoggedIn = false;

    const ifLoggedIn = function () {
        return (
            <div className="Auth flex" key="2">
                <Link href={`/`}>
                <div  className="button logout-button">
                    Log Out
                </div>
                </Link>
            </div>
        )
    }
    
    const ifLoggedOut = function () {
        return (
            <div className="Auth flex" key="2">
                <Link className="m-2" href={`/login`}>
                <div className="button login-button ">
                    Log in
                </div>
                </Link>
                <Link className="m-2" href={`/signup`}>
                <div className="button signup-button ">
                    Sign Up
                </div>
                </Link>
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