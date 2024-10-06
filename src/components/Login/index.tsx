import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import SignUpinfo from "./SignUpinfo";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

const LogIn = ({ setIsSignup }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex bg-white h-screen overflow-hidden px-5 justify-between">
      <div className="w-full">
        <h1 className="  font-bold text-3xl text-[#1C59D0] md:ml-10 md:my-8 my-5">
          CashFlow
        </h1>
        <div className="flex justify-center items-center md:h-[80%]">
          <div className="space-y-8">
            <div className="text-2xl text-black font-semibold text-center md:w-[856px] mx-auto">
              <h2>Log in to your account</h2>
              <p className="font-medium text-sm my-4 px-2 md:px-[240px]">
                Lorem ipsum dolor sit amet consectetur. Habitasse tempus vitae vitae pellentesque.
              </p>
            </div>
            <div className="font-medium">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="flex flex-col text-xl">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className={`bg-white border-2 rounded-md my-2 p-2.5 font-medium ${errors.email ? 'border-red-500' : 'border-[#9E9E9E]'}`}
                    {...register("email")}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>
                <div className="flex flex-col text-xl">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    className={`bg-white my-2 border-2 rounded-md p-2.5 font-medium ${errors.password ? 'border-red-500' : 'border-[#9E9E9E]'}`}
                    {...register("password")}
                  />
                  {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                </div>
                <div className="flex justify-between">
                  <div className="font-medium text-base">
                    <input type="checkbox" id="check" />
                    <label className="ml-4" htmlFor="check">
                      Remember Me
                    </label>
                  </div>
                  <div className="text-[#1C59D0] text-base">
                    Forget Password
                  </div>
                </div>
                <div className="bg-[#1C59D0] text-center border-2 border-[#1C59D0] text-lg text-white hover:bg-[#061d4d] duration-300 py-3 rounded-lg">
                  <button type="submit">LOG IN</button>
                </div>
              </form>
              <div className="text-[#1C59D0] text-center my-6 text-base">Or log in using</div>
            </div>
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
      <div className="w-[70%] hidden md:block">
        <SignUpinfo setIsSignup={setIsSignup} />
      </div>
    </div>
  );
};

export default LogIn;
