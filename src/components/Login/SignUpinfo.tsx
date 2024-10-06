
const SignUpinfo = ({setIsSignup}) => {

  const handleLogin = () => (
    setIsSignup(false)
  );

  return (
    <div className=' bg-[#1C59D0] h-screen text-white text-center flex items-center justify-center'>
        <div>
            <h1 className=' font-semibold text-2xl'>Don’t have an account?</h1>
            <p className=' font-medium text-sm my-5'>Lorem ipsum dolor sit amet consectetur. Habitasse tempus vitae vitae pellentesque.</p>
            <button className=' border-2 border-white rounded-md py-2 px-10 hover:bg-[#051b46] font-medium text-base duration-500' onClick={handleLogin}>SIGN UP</button>
        </div>
    </div>
  )
}

export default SignUpinfo