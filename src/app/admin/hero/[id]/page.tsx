"use client";
import React, { useState, useEffect, FC } from "react";
import { useParams } from 'next/navigation';
import { useForm } from "react-hook-form"

import { IHero } from "../../../interfaces";
import AdminNavbar from "../../../components/admin/AdminNavbar";

interface FormData {
 _id?: string;
 image: string;
 title0: string;
 title1: string;
 title2: string;
 description: string;
}

interface Props {
 hero: IHero;
}

const Hero: FC<Props> = ({ hero }) => {

 const params = useParams();
 const { id } = params;

 const onSubmit = async (form: FormData) => {
  try {
   const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
   };

   await fetch(`/api/admin/hero/${id}`, requestOptions)
   alert("Hero actulizado.")
   reset();

   // window.location.reload();
  } catch (error) {
   console.log(error);
  }
 }

 const {
  register,
  handleSubmit,
  formState: { errors },
  reset,
 } = useForm<FormData>({
  defaultValues: hero,
 });

 return (
  <>
   <AdminNavbar />
   <section
    id="contact"
    className="grid md:grid-cols-1  mx-6 md:my-3 py-12 gap-2 relative"
   >
    <div><h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">Update Hero</h2></div>
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

    <div>
     <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
       <label
        className="text-white block mb-2 text-sm font-medium"
       >
        Image
       </label>
       <input
        name="image"
        type="text"
        required
        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
        {...register("image", {
        })}
       // error={!!errors.image}
       // helperText={errors.image?.message}
       />
      </div>
      <div className="mb-6">
       <label
        // htmlFor="subject"
        className="text-white block text-sm mb-2 font-medium"
       >
        Title 1
       </label>
       <input
        name="title0"
        type="text"
        required
        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
        {...register("title0", {
        })}
       // error={!!errors.title}
       // helperText={errors.title?.message}
       />
      </div>
      <div className="mb-6">
       <label
        // htmlFor="subject"
        className="text-white block text-sm mb-2 font-medium"
       >
        Title 2
       </label>
       <input
        name="title1"
        type="text"
        required
        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
        {...register("title1", {
        })}
       // error={!!errors.title}
       // helperText={errors.title?.message}
       />
      </div>
      <div className="mb-6">
       <label
        // htmlFor="subject"
        className="text-white block text-sm mb-2 font-medium"
       >
        Title 3
       </label>
       <input
        name="title2"
        type="text"
        required
        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
        {...register("title2", {
        })}
       // error={!!errors.title}
       // helperText={errors.title?.message}
       />
      </div>
      <div className="mb-6">
       <label
        // htmlFor="message"
        className="text-white block text-sm mb-2 font-medium"
       >
        Description
       </label>
       <textarea
        name="description"
        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
        {...register("description", {
        })}
       // error={!!errors.title}
       // helperText={errors.title?.message}
       />
      </div>
      <button
       type="submit"
       className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
      >
       Save
      </button>
     </form>
    </div>
   </section>
  </>
 );
};

export default Hero;
