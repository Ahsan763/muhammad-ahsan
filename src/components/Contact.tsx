import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().min(10, "Message should be at least 10 characters").required("Message is required"),
});

export default function ContactSection() {
  return (
    <section id="contact" className="contact pt-16 sm:pt-32 relative z-[2]">
      <div className="absolute top-[-60px] sm:-top-[100px] -z-30 h-[300px] sm:h-[500px] w-[300px] sm:w-[500px] bg-radial from-[#07284a] to-[#04203b00] to-70% left-1/2 -translate-x-1/2"></div>

      <div className="container">
        <div className="text-center relative z-10 mb-8 sm:mb-16">
          <div className="heading absolute select-none font-black opacity-30 -top-[60%] md:-top-[60%] lg:-top-[50%] left-1/2 -translate-x-1/2 uppercase text-[60px] md:text-[120px] lg:text-[170px] -z-10 tracking-wider bg-gradient-to-t from-[#05050900] to-[#262d49] bg-clip-text text-transparent">
            contact
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.2] font-outfit tracking-wide mb-3 bg-gradient-to-r from-[#fff] to-[#abd8fc] bg-clip-text text-transparent">
            Get in <span className="font-playfair italic"> Touch </span>
          </h1>
        </div>
        <div className="grid gap-y-12 lg:grid-cols-2 gap-x-20 items-center mb-16">
          <div>
            <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold leading-[1.25] mb-4">LET’S TALK ABOUT YOUR PROJECT</h2>
            <p className="text-gray-400 mb-5 sm:mb-8 lg:mb-12 sm:text-lg lg:text-xl">
              Have a project in mind or just want to say hello? Let’s connect and create
              something amazing together.
            </p>

            <div className="space-y-6">
              <Link href={"tel:+923014749625"} className="flex items-center gap-3 p-3 rounded-full border border-gray-700 hover:border-blue-500 transition">
                <div className="w-11 h-11 flex items-center justify-center rounded-full relative z-10">
                  <div className="absolute w-[calc(100%+4px)] h-[calc(100%+4px)] bg-gradient-to-b from-[#ffffff63] to-[#1468b6] rounded-full -z-10 top-[-2px] left-[-2px]"></div>
                  <div className="w-11 h-11 flex items-center justify-center rounded-full relative z-10 bg-gradient-to-r from-[#2e2e2e] to-[#101828] overflow-hidden">
                    <Image src="/hero3.png" alt="ahsan" width={44} height={44} className="w-full h-full object-contain" />
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase text-gray-400">Book a Call</p>
                  <p className="font-medium">+92 301 4749625</p>
                </div>
              </Link>
              <Link href={"mailto:naqashahsan@gmail.com"} className="flex items-center gap-3 p-3 rounded-full border border-gray-700 hover:border-blue-500 transition">
                <div className="w-11 h-11 flex items-center justify-center rounded-full relative z-10">
                  <div className="absolute w-[calc(100%+4px)] h-[calc(100%+4px)] bg-gradient-to-b from-[#ffffff63] to-[#1468b6] rounded-full -z-10 top-[-2px] left-[-2px]"></div>
                  <div className="w-11 h-11 flex items-center justify-center rounded-full relative z-10 bg-gradient-to-r from-[#2e2e2e] to-[#101828] overflow-hidden">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase text-gray-400">Prepare E-mail Communication</p>
                  <p className="font-medium">naqashahsan@gmail.com</p>
                </div>
              </Link>
            </div>
          </div>

          <Formik
            initialValues={{ name: "", email: "", subject: "", message: "" }}
            validationSchema={ContactSchema}
            onSubmit={async (values, { setSubmitting, resetForm, setStatus }) => {
              setStatus(undefined);
              try {
                const res = await fetch("/api/contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(values),
                });

                if (res.ok) {
                  setStatus("success");
                  resetForm();
                } else {
                  setStatus("error");
                }
              } catch (error) {
                setStatus("error");
              }
              setSubmitting(false);
            }}
          >
            {({ isSubmitting, status }) => (
              <Form className="backdrop-blur-md border p-3 sm:p-8 rounded-lg sm:rounded-2xl space-y-2.5 sm:space-y-6">
                <div>
                  <Field
                    name="name"
                    placeholder="Enter Full Name"
                    className="pl-5 w-full p-3 rounded-md border text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 text-sm "
                  />
                  <ErrorMessage name="name" component="div" className="text-red-400 text-sm mt-1" />
                </div>

                <div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="E-mail Address"
                    className="pl-5 w-full p-3 rounded-md border text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 text-sm "
                  />
                  <ErrorMessage name="email" component="div" className="text-red-400 text-sm mt-1" />
                </div>

                <div>
                  <Field
                    name="subject"
                    placeholder="Subject"
                    className="pl-5 w-full p-3 rounded-md border text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 text-sm "
                  />
                  <ErrorMessage name="subject" component="div" className="text-red-400 text-sm mt-1" />
                </div>

                <div>
                  <Field
                    as="textarea"
                    name="message"
                    rows={5}
                    placeholder="Message in Brief..."
                    className="pl-5 w-full p-3 rounded-md border text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 text-sm "
                  />
                  <ErrorMessage name="message" component="div" className="text-red-400 text-sm mt-1" />
                </div>

                <Button
                  type="submit"
                  variant={"default"}
                  disabled={isSubmitting}
                  className="px-12"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {status === "success" && (
                  <div className="text-green-400 text-sm">Message sent — I’ll reply soon.</div>
                )}
                {status === "error" && (
                  <div className="text-red-400 text-sm">There was an error sending the message.</div>
                )}
              </Form>
            )}
          </Formik>
        </div>
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <div className="flex flex-wrap sm:flex-nowrap gap-y-4 justify-between ggap-x-4 py-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#013880] to-[#0062ff] flex items-center justify-center text-white font-bold">AI</div>
            <div>
              <div className="font-semibold text-white">Muhammad Ahsan Iqbal</div>
              <div className="text-xs bg-gradient-to-r from-[#00f7ff] to-[#799dff] bg-clip-text text-transparent font-medium">Frontend Developer</div>
            </div>
          </div>
          <div className="flex flex-col sm:items-center sm:text-center">
            <h2 className="text-lg font-medium mb-1">Get In Touch</h2>
            <Link href={"tel:+923014749625"} className="text-sm">+92 301 4749625</Link>
            <Link href={"mailto:naqashahsan@gmail.com"} className="text-sm">naqashahsan@gmail.com</Link>
          </div>
          <div className="flex flex-col items-end text-end">
            <h2 className="text-lg font-medium mb-1">My Address</h2>
            <p className="text-sm">Lahore, Pakistan</p>
          </div>
        </div>
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <div className=" py-6 flex justify-center items-center text-center">
          <p className="text-sm">
            Copyright 2025 by Ahsan | All Rights Reserved
          </p>
        </div>
      </div>
    </section>
  );
}
