import { useState } from "react"
import SignUp from "../../components/signup";
import LogIn from "../../components/Login";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);
  return (
    <div className="h-screen ">
    {isSignup ? <LogIn setIsSignup = {setIsSignup}/> : <SignUp setIsSignup = {setIsSignup}/>}
    </div>
  )
}

export default Auth