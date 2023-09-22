"use client";

import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import jsonp from "jsonp";
import type { ChangeEvent } from "react";
import { useState } from "react";

const WaitlistForm = () => {
  const [emailValue, setEmailValue] = useState<string>("");
  const [nameValue, setNameValue] = useState<string>("");
  const [isSubmitting] = useState<boolean>(false);

  const subscribeUrl =
    "https://theimpactwave.us10.list-manage.com/subscribe/post?u=7d1db415cd5323a6d28ae2a83&amp;id=13081383c7&amp;f_id=002ecde5f0";
  const onSubmitHandler = async (values: any) => {
    jsonp(
      `${subscribeUrl}&EMAIL=${values.waitlist_email}&UNAME=${values.waitlist_name}`,
      { param: "c" },
      (_, data: any) => {
        const { msg, result } = data;
        console.log(msg);
        console.log(result);
      },
    );
  };
  return (
    <>
      <Formik
        initialValues={{
          waitlist_email: "",
          waitlist_name: "",
        }}
        onSubmit={onSubmitHandler}
      >
        {({ handleSubmit, errors, touched, setFieldValue }) => (
          <form onSubmit={handleSubmit} noValidate>
            <FormControl
              mb={5}
              isRequired
              isInvalid={!!errors.waitlist_email && touched.waitlist_email}
            >
              <FormLabel htmlFor={"waitlist_email"}>E-Mail</FormLabel>
              <Field
                as={Input}
                id={"waitlist_email"}
                name={"waitlist_email"}
                type={"email"}
                value={emailValue}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const value = e.target?.value as string;
                  setEmailValue(value);
                  setFieldValue("waitlist_email", value).then(() => {});
                }}
                placeholder={"your@email.com"}
                validate={(value: string) => {
                  if (!value) {
                    return "Email is required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
                  ) {
                    return "Email is invalid";
                  }
                  return undefined;
                }}
              />
              <FormErrorMessage>Please enter a valid E-Mail</FormErrorMessage>
            </FormControl>
            <FormControl
              mb={5}
              isRequired
              isInvalid={!!errors.waitlist_name && touched.waitlist_name}
            >
              <FormLabel htmlFor={"waitlist_name"}>Name</FormLabel>
              <Field
                as={Input}
                id={"waitlist_name"}
                name={"waitlist_name"}
                type={"text"}
                value={nameValue}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const value = e.target?.value as string;
                  setNameValue(value);
                  setFieldValue("waitlist_name", value).then(() => {});
                }}
              />
              <FormErrorMessage>Please enter a valid Name</FormErrorMessage>
            </FormControl>
            <Button type={"submit"} isLoading={isSubmitting}>
              JOIN
            </Button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default WaitlistForm;
