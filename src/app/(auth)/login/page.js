import Link from "next/link"


export default function Login ()
{
    return (
        <div className="mt-10">
            <form className="flex flex-col w-72 m-auto">
                <label for="username">Username: </label>
                <input type="text" id="username"/>
                <label for="password">Password: </label>
                <input type="password" id="password"/>
                <Link href={`/forgotPassword`} className="mt-2">Forgot Password?</Link>
                <button className="button m-2 p-2 border mt-5">Log in</button>
            </form>
        </div>

    )

}