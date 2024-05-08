export default function Signup(){
    return (
        <div className="mt-10">
        <form className="flex flex-col w-72 m-auto">
            <label for="username">Username: </label>
            <input type="text" id="username"/>
            <label for="email">Email: </label>
            <input type="email" id="email"/>
            <label for="password">Password: </label>
            <input type="password" id="password"/>
            <label for="vPassword">Verify Password: </label>
            <input type="password" id="vPassword"/>
            <button className="button m-2 p-2 border mt-5">Create Account</button>
        </form>
    </div>
    )
}