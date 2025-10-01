"use client";
import React, { useState, useEffect, FC } from "react";
import { useParams } from 'next/navigation';
import { useForm } from "react-hook-form"

import { IAbout } from "../../../interfaces";
import AdminNavbar from "../../../components/admin/AdminNavbar";



interface FormData {
  _id?: string;
  image: string;
  title: string;
  description: string;
  skill0: string;
  skill1: string;
  skill2: string;
  skill3: string;
  skill4: string;
  skill5: string;
  education0: string;
  education1: string;
  education2: string;
  certification0: string;
  certification1: string;
  certification2: string;
}

interface Props {
  about: IAbout;
}

const About: FC<Props> = ({ about }) => {
  const [data, setData] = useState(null)

  const params = useParams();
  const { id } = params;

  const onSubmit = async (form: FormData) => {
    try {

      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      };

      const response = await fetch(`/api/admin/about/${id}`, requestOptions)
      console.log(`data... ${data}`)
      const result = await response.json();
      console.log('Resource updated:', result);
      alert("Acerca de se actualizo correctamente.")
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
    defaultValues: about,
  });



  return (
    <>
      <AdminNavbar />
      <section
        id="contact"
        className="grid md:grid-cols-1  mx-6 md:my-3 py-12 gap-2 relative"
      >
        <div><h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">Update About</h2></div>
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

        <div>
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label
                className="text-white block mb-2 text-sm font-medium"
              >
                image
              </label>
              <input
                name="title"
                type="text"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                {...register("image", {
                  required: "Este campo es requerido",
                  minLength: { value: 2, message: "Mínimo 2 caracteres" },
                })}
              // error={!!errors.image}
              // helperText={errors.image?.message}
              />
            </div>
            <div className="mb-6">
              <label
                className="text-white block mb-2 text-sm font-medium"
              >
                Title
              </label>
              <input
                name="title"
                type="text"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                {...register("title", {
                  required: "Este campo es requerido",
                  minLength: { value: 2, message: "Mínimo 2 caracteres" },
                })}
              // error={!!errors.image}
              // helperText={errors.image?.message}
              />
            </div>
            <div className="mb-6">
              <label
                className="text-white block mb-2 text-sm font-medium"
              >
                Skill 1
              </label>
              <input
                name="skill0"
                type="text"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                {...register("skill0", {
                  required: "Este campo es requerido",
                  minLength: { value: 2, message: "Mínimo 2 caracteres" },
                })}
              // error={!!errors.image}
              // helperText={errors.image?.message}
              />
            </div>
            <div className="mb-6">
              <label
                className="text-white block mb-2 text-sm font-medium"
              >
                Skill 2
              </label>
              <input
                name="skill1"
                type="text"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                {...register("skill1", {
                  required: "Este campo es requerido",
                  minLength: { value: 2, message: "Mínimo 2 caracteres" },
                })}
              // error={!!errors.image}
              // helperText={errors.image?.message}
              />
            </div>
            <div className="mb-6">
              <label
                className="text-white block mb-2 text-sm font-medium"
              >
                Skill 3
              </label>
              <input
                name="skill2"
                type="text"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                {...register("skill2", {
                  required: "Este campo es requerido",
                  minLength: { value: 2, message: "Mínimo 2 caracteres" },
                })}
              // error={!!errors.image}
              // helperText={errors.image?.message}
              />
            </div>
            <div className="mb-6">
              <label
                className="text-white block mb-2 text-sm font-medium"
              >
                Skill 4
              </label>
              <input
                name="skill3"
                type="text"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                {...register("skill3", {
                  required: "Este campo es requerido",
                  minLength: { value: 2, message: "Mínimo 2 caracteres" },
                })}
              // error={!!errors.image}
              // helperText={errors.image?.message}
              />
            </div>
            <div className="mb-6">
              <label
                className="text-white block mb-2 text-sm font-medium"
              >
                Skill 5
              </label>
              <input
                name="skill4"
                type="text"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                {...register("skill4", {
                  required: "Este campo es requerido",
                  minLength: { value: 2, message: "Mínimo 2 caracteres" },
                })}
              // error={!!errors.image}
              // helperText={errors.image?.message}
              />
            </div>
            <div className="mb-6">
              <label
                className="text-white block mb-2 text-sm font-medium"
              >
                Skill 6
              </label>
              <input
                name="skill5"
                type="text"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                {...register("skill5", {
                  required: "Este campo es requerido",
                  minLength: { value: 2, message: "Mínimo 2 caracteres" },
                })}
              // error={!!errors.image}
              // helperText={errors.image?.message}
              />
            </div>
            <div className="mb-6">
              <label
                className="text-white block mb-2 text-sm font-medium"
              >
                Education 1
              </label>
              <input
                name="education0"
                type="text"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                {...register("education0", {
                  required: "Este campo es requerido",
                  minLength: { value: 2, message: "Mínimo 2 caracteres" },
                })}
              // error={!!errors.image}
              // helperText={errors.image?.message}
              />
            </div>
            <div className="mb-6">
              <label
                className="text-white block mb-2 text-sm font-medium"
              >
                Education 2
              </label>
              <input
                name="education1"
                type="text"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                {...register("education1", {
                  required: "Este campo es requerido",
                  minLength: { value: 2, message: "Mínimo 2 caracteres" },
                })}
              // error={!!errors.image}
              // helperText={errors.image?.message}
              />
            </div>
            <div className="mb-6">
              <label
                className="text-white block mb-2 text-sm font-medium"
              >
                Education 3
              </label>
              <input
                name="education2"
                type="text"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                {...register("education2", {
                  required: "Este campo es requerido",
                  minLength: { value: 2, message: "Mínimo 2 caracteres" },
                })}
              // error={!!errors.image}
              // helperText={errors.image?.message}
              />
            </div>
            <div className="mb-6">
              <label
                className="text-white block mb-2 text-sm font-medium"
              >
                Certification 1
              </label>
              <input
                name="certification0"
                type="text"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                {...register("certification0", {
                  required: "Este campo es requerido",
                  minLength: { value: 2, message: "Mínimo 2 caracteres" },
                })}
              // error={!!errors.image}
              // helperText={errors.image?.message}
              />
            </div>
            <div className="mb-6">
              <label
                className="text-white block mb-2 text-sm font-medium"
              >
                Certification 2
              </label>
              <input
                name="certification1"
                type="text"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                {...register("certification1", {
                  required: "Este campo es requerido",
                  minLength: { value: 2, message: "Mínimo 2 caracteres" },
                })}
              // error={!!errors.image}
              // helperText={errors.image?.message}
              />
            </div>
            <div className="mb-6">
              <label
                className="text-white block mb-2 text-sm font-medium"
              >
                Certification 3
              </label>
              <input
                name="certification2"
                type="text"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                {...register("certification2", {
                  required: "Este campo es requerido",
                  minLength: { value: 2, message: "Mínimo 2 caracteres" },
                })}
              // error={!!errors.image}
              // helperText={errors.image?.message}
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
                  required: "Este campo es requerido",
                  minLength: { value: 2, message: "Mínimo 2 caracteres" },
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

export default About;
