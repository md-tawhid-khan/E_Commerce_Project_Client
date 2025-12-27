/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import Link from "next/link";




const LoginForm = () => {
  const form = useForm();  
 
  const {
    formState: { isSubmitting },
  } = form;

  


  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
    
     
      form.reset()
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="borde-2 border-gray-300 rounded-xl flex flex-col gap-10 max-w-md w-full p-5 bg-gray-100 ">
      <div className="flex items-center space-x-4">
       
        <div>
          <h1 className="text-xl font-semibold">Log in</h1>
          <p className="text-sm font-extralight">
            join us today and start your jurney
          </p>
        </div>
      </div>
      <div className="max-w-md text-blue-400">
      
        <Form {...form}>
          
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
           
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User Email</FormLabel>
                  <FormControl className="mx-auto ">
                    <Input
                      className="text-black bg-white"
                      type="email"
                      placeholder="give valid email"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl className="mx-auto ">
                    <Input
                      className="text-black bg-white"
                      type="password"
                      placeholder="give secrect password"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
 
               
            
            <Button>
                submit
            </Button>
          </form>
         
        </Form>
             
             <div className="mt-4 flex gap-3">
              <p>do not have any account</p>
               <Link href='/register' className="underline">register</Link> 
               </div>
      </div>
    </div>
  );
};

export default LoginForm;