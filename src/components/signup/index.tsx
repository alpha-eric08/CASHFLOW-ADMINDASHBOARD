import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import LogIninfo from "./LogIninfo";


const signUpSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

const SignUp = ({ setIsSignup }) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-white w-full">
      <div className="flex px-5 py-10 justify-between">
        <div className="w-[70%] hidden md:block">
          <LogIninfo setIsSignup={setIsSignup} />
        </div>

        <div className=" w-full flex bg-white items-center justify-center ">
          <div>
            <div className=" text-2xl text-black font-semibold text-center md:w-[856px] mx-auto">
              <h2>Sign up for an account</h2>
              <p className=" font-medium text-sm my-4 px-2 md:px-[240px]">
                Lorem ipsum dolor sit amet consectetur. Habitasse tempus vitae vitae pellentesque.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 font-medium w-full">
              <div className="md:flex gap-5">
                <div className="flex w-full flex-col text-xl">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className={`bg-white border-[#9E9E9E] border-2 rounded-md my-2 text-base p-2.5 font-medium ${errors.firstName ? 'border-red-500' : ''}`}
                    {...register("firstName")}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm">{errors.firstName.message}</p>
                  )}
                </div>

                <div className="flex w-full flex-col text-xl">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className={`bg-white border-[#9E9E9E] border-2 rounded-md my-2 p-2.5 text-base font-medium ${errors.lastName ? 'border-red-500' : ''}`}
                    {...register("lastName")}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col text-xl">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className={`bg-white border-[#9E9E9E] border-2 rounded-md my-2 p-2.5 text-base font-medium ${errors.email ? 'border-red-500' : ''}`}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div className="flex flex-col text-xl">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  className={`bg-white my-2 border-[#9E9E9E] border-2 rounded-md p-2.5 text-base font-medium ${errors.password ? 'border-red-500' : ''}`}
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password.message}</p>
                )}
              </div>

              <div className="bg-[#1C59D0] text-center border-2 border-[#1C59D0] rounded-lg text-lg text-white hover:bg-[#061d4d] my-6 py-3 duration-300">
                <button type="submit">SIGN UP</button>
              </div>
            </form>

            <div className="text-[#1C59D0] text-center my-6 text-base">Or log in using</div>

            <div className="flex justify-center gap-8">
              <div className="px-9 py-3 border-2 border-[#9E9E9E] rounded-md bg-white hover:bg-[#9E9E9E]">
                <a href="https://www.google.com/">
                  <FcGoogle size={25} />
                </a>
              </div>
              <div className="px-9 py-3 border-2 border-[#9E9E9E] rounded-md bg-white hover:bg-[#9E9E9E] text-[#2668B6]">
                <a href="https://web.facebook.com/">
                  <FaFacebookF size={25} />
                </a>
              </div>
              <div className="px-9 py-3 border-2 border-[#9E9E9E] rounded-md bg-white hover:bg-[#9E9E9E] text-[#55ACEE]">
                <a href="https://x.com/">
                  <FaTwitter size={25} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
