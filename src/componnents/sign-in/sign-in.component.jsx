import "./sign-in.style.scss";
const SignIn = () => {
    return ( <div className="sign-in">
        <div className="logo">Cover me Back</div>
        <p className="subtitle text-gray"> Darkness is now your friend</p>
        <form >
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" />
            </div>
            <div>
               <div>
                     <input type="checkbox" />
                    <label htmlFor="">Remember for 30 days</label>
               </div>
                <button>Forget password</button>
            </div>
            <button type="submit">Sign in</button>
            <button >Sign in with google</button>
        </form>
        <p><small>Don't have an account ? <a href="">Sign up for free</a></small></p>
    </div> );
}
 
export default SignIn;