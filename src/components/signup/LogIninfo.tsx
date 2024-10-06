
const LogIninfo = ({setIsSignup}) => {
    const handleSignup = () => (
        setIsSignup(true)
      );
    
  return (
    <div className='bg-[#1C59D0] rounded-2xl h-screen text-white overflow-hidden'>
        <h1 className=' font-bold text-3xl md:ml-10 md:pt-8 pt-5 '>CashFlow</h1>

        <div className='text-center flex items-center h-[80vh] justify-center'>
          <div>
            <h1 className=' font-semibold text-2xl'>Already have an account?</h1>
            <p className=' font-medium text-sm my-5'>Lorem ipsum dolor sit amet consectetur. Habitasse tempus vitae vitae pellentesque.</p>
            <button onClick={handleSignup} className=' border-2 border-white rounded-md py-2 px-10 hover:bg-[#051b46] font-medium text-base '>LOG IN</button>
          </div>
        </div>
    </div>
  )
}

export default LogIninfo