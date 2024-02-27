"use client";

import { FormEvent, useCallback, useEffect, useRef, useState } from "react";

export default function ContactForm() {
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successForm, setSuccessForm] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  const inputNames = ["name", "email", "message"];

  const checkForSubmit = useCallback(() => {
    const form = formRef.current;
    if(!form) return;

    let canSubmit = true;
    inputNames.forEach(inputName => {
      const input = form.querySelector(`[name='${inputName}']`) as HTMLInputElement | null;
      if(input == null || input.value == "") {
        canSubmit = false;
      }
    })
    setSubmitDisabled(!canSubmit);
  }, []);

  useEffect(() => {
    const form = formRef.current;
    if(!form) return;

    inputNames.forEach(inputName => form.querySelector(`[name='${inputName}']`)?.addEventListener("change", checkForSubmit));

    return () => inputNames.forEach(inputName => form.querySelector(`[name='${inputName}']`)?.removeEventListener("change", checkForSubmit));
  }, [checkForSubmit]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true);
    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    const body = {
      header: {
        sender: formData.get("email"),
        senderName: formData.get("name")
      },
      body: {
        message: formData.get("message")
      }
    };

    const headers = new Headers({
      "content-type": "application/json"
    });


    try {
      const response = await fetch('http://127.0.0.1:5144/api/contact', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
      });
      const result = await response.json();
      if(result["hasSend"]) {
        setErrorName("");
        setErrorEmail("");
        setErrorMessage("");
        setSuccessForm("The form was send successfully!")
        form.reset();
      } else {
        setErrorName(result["senderName"] ?? "");
        setErrorEmail(result["sender"] ?? "");
        setErrorMessage(result["message"] ?? "");
        setSuccessForm("")
      }
    } catch (error) {
      setErrorMessage("The mailserver couldn't be reached. Try again later.");
    }

    setIsLoading(false);
  };

  return(
    <form ref={formRef} onSubmit={onSubmit} className="mt-8 w-full md:max-w-xl" noValidate>
      <div className="w-full relative flex flex-col items-center gap-y-7">
        <div className="flex flex-col w-full">
          <input
            type="text"
            className="w-full rounded px-5 py-3 font-medium shadow-[0_3px_8px_0] shadow-grey-800/20 placeholder:text-grey-200"
            placeholder="Name"
            name="name"
          />
          <p className="text-left text-red-700">{errorName}</p>
        </div>
        <div className="flex flex-col w-full">
          <input
            type="email"
            className="w-full rounded px-5 py-3 font-medium shadow-[0_3px_8px_0] shadow-grey-900/20 placeholder:text-grey-200"
            placeholder="Email"
            name="email"
          />
          <p className="text-left text-red-700">{errorEmail}</p>
        </div>
        <div className="flex flex-col w-full">
          <textarea
            className="w-full resize-none rounded px-5 py-3 font-medium shadow-[0_3px_8px_0] shadow-grey-900/20 placeholder:text-grey-200"
            placeholder="Message"
            name="message"
            rows={5}
          ></textarea>
          <p className="text-left text-red-700">{errorMessage}</p>
          <p className="text-left text-green-700">{successForm}</p>
        </div>
        <div className={`${isLoading ? "visible bg-grey-200/20" : "invisible bg-transparent"} rounded transition-colors absolute inset-0 w-full h-full flex justify-center items-center  pointer-events-none select-none`}>
          <div role="status" className="">
            <svg aria-hidden="true" className="w-8 h-8 text-grey-200 animate-spin dark:text-grey-300 fill-red-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
      <button disabled={submitDisabled} type="submit" className="btn btn-primary mt-5 disabled:bg-grey-200 disabled:after:border-grey-100">
        Submit
      </button>
    </form>
  )
}