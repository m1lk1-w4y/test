"use client";
import React, { useState, useEffect, FC } from "react";
import { useParams } from 'next/navigation';
import { useForm } from "react-hook-form"
import { Api } from "../../../api";

import { IProject } from "../../../interfaces";
// import { useRouter } from "next/router";
import toast, { Toaster } from 'react-hot-toast';
import AdminNavbar from "../../../components/admin/AdminNavbar";

interface FormData {
  _id?: string;
  image: string;
  title: string;
  github: string;
  web: string;
  description: string;
  tag1: string;
  tag2: string;
}

interface Props {
  project: IProject;
}

const Project: FC<Props> = ({ project }) => {
  // const router = useRouter();

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  const params = useParams();
  const { id } = params;

  const onSubmit = async (form: FormData) => {
    // setIsSaving(true);

    let post = null;

    try {

      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      };

      const response = await fetch(`/api/admin/project/${id}`, requestOptions)
      console.log(`data... ${data}`)
      const result = await response.json();
      console.log('Resource updated:', result);
      toast.success("Proyecto Actualizado")
      reset();

      // window.location.reload();
    } catch (error) {
      console.log(error);
      // setIsSaving(false);
      console.log(data)
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    watch,
    reset,
  } = useForm<FormData>({
    defaultValues: project,
  });



  const notify = () => toast('Here is your toast.');

  return (
    <>
      <AdminNavbar />
      <section
        id="contact"
        className="grid md:grid-cols-1  mx-6 md:my-3 py-12 gap-2 relative"
      >
        <div><h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">Update Project</h2></div>
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
                Title
              </label>
              <input
                name="title"
                type="text"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                {...register("title", {
                })}
              // error={!!errors.title}
              // helperText={errors.title?.message}
              />
            </div>
            <div className="mb-6">
              <label
                className="text-white block text-sm mb-2 font-medium"
              >
                Github
              </label>
              <input
                name="github"
                type="text"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                {...register("github", {
                })}
              // error={!!errors.title}
              // helperText={errors.title?.message}
              />
            </div>
            <div className="mb-6">
              <label
                className="text-white block text-sm mb-2 font-medium"
              >
                Web
              </label>
              <input
                name="web"
                type="text"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                {...register("web", {

                })}
              // error={!!errors.title}
              // helperText={errors.title?.message}
              />
            </div>
            <div className="mb-6">
              <label
                className="text-white block text-sm mb-2 font-medium"
              >
                Tag 1
              </label>
              <input
                name="tag1"
                type="text"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                {...register("tag1", {

                })}
              // error={!!errors.title}
              // helperText={errors.title?.message}
              />
            </div>
            <div className="mb-6">
              <label
                className="text-white block text-sm mb-2 font-medium"
              >
                Tag 2
              </label>
              <input
                name="tag2"
                type="text"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                {...register("tag2", {

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
              onClick={notify}
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Save
            </button>
            <Toaster />
          </form>
        </div>
      </section>
    </>
  );
};

export default Project;
