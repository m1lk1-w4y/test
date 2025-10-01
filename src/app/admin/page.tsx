"use client";
import React, { useTransition, useState, useEffect } from "react";
import Image from "next/image";
import TabButton from "../components/TabButton";
import AdminNavbar from "../components/admin/AdminNavbar";



const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState(null)

  useEffect(() => {
    fetch('/api/admin/about')
      .then((res) => res.json())
      .then((data) => {
        setResult(data)
      })
  }, [])

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };


  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          {result?.map(i => (
            <>
              <li>{i.skill0}</li>
              <li>{i.skill1}</li>
              <li>{i.skill2}</li>
              <li>{i.skill3}</li>
              <li>{i.skill4}</li>
              <li>{i.skill5}</li>
            </>

          ))}
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          {result?.map(i => (
            <>
              <li>{i.education0}</li>
              <li>{i.education1}</li>
              <li>{i.education2}</li>
            </>

          ))}
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          <ul className="list-disc pl-2">
            {result?.map(i => (
              <>
                <li>{i.certification0}</li>
                <li>{i.certification1}</li>
                <li>{i.certification2}</li>
              </>

            ))}
          </ul>
        </ul>
      ),
    },
  ];

  return (
    <>
      <AdminNavbar />
      <section className="text-white" id="about">
        {result?.map((about) => (
          <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/images/about-image.png" width={500} height={500} />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">

              <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">{about.title}</h2>
                <p className="text-base lg:text-lg">
                  {about.description}
                </p>
                <div className="flex flex-row justify-start mt-8">
                  <TabButton
                    selectTab={() => handleTabChange("skills")}
                    active={tab === "skills"}
                  >
                    {" "}
                    Skills{" "}
                  </TabButton>
                  <TabButton
                    selectTab={() => handleTabChange("education")}
                    active={tab === "education"}
                  >
                    {" "}
                    Education{" "}
                  </TabButton>
                  <TabButton
                    selectTab={() => handleTabChange("certifications")}
                    active={tab === "certifications"}
                  >
                    {" "}
                    Certifications{" "}
                  </TabButton>
                </div>
                <div className="mt-8">
                  {TAB_DATA.find((t) => t.id === tab).content}
                </div>

              </div>
            </div>
          </div>
        ))}

      </section>
    </>
  );
};

export default AboutSection;



