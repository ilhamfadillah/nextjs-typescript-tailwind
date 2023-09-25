import React from "react";

import { InputText } from "./InputText";
import { Button } from "./Button";

export const Login: React.FC = () => {
  return (
    <section className="bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-gray-700 rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <InputText
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email@email.com"
                  isDark={true}
                  label="Your Email"
                />
              </div>
              <div>
                <InputText
                  type="password"
                  id="password"
                  name="password"
                  placeholder="******"
                  isDark={true}
                  label="Password"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href=""
                  className="text-sm font-medium text-primary-600 hover:underline text-blue-500"
                >
                  Forgot password?
                </a>
              </div>
              <Button additionalClass="w-full" color="blue" label="Sign in" />
              <p className="text-sm font-light text-gray-500 text-gray-400">
                Don’t have an account yet?{" "}
                <span className="font-medium text-primary-600 hover:underline text-primary-500">
                  Sign up
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
