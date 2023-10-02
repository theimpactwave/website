"use client";

import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import type { ChangeEvent } from "react";
import { useState } from "react";

const WaitlistForm = () => {
  const toast = useToast();
  const [emailValue, setEmailValue] = useState<string>("");
  const [nameValue, setNameValue] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const subscribeUrl =
    "https://theimpactwave.us10.list-manage.com/subscribe/post?u=7d1db415cd5323a6d28ae2a83&amp;id=13081383c7&amp;f_id=002ecde5f0";
  const onSubmitHandler = async (values: any) => {
    setIsSubmitting(true);
    await fetch(
      `${subscribeUrl}&EMAIL=${values.waitlist_email}&UNAME=${values.waitlist_name}&tags=14186789`,
      {
        mode: process.env.NODE_ENV === "development" ? "no-cors" : "no-cors",
        method: "POST",
        headers: {
          Authorization: "0addd8d01599f37adf00cf7251879de0-us10",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      },
    )
      .then((response: Response) => {
        if (response.status === 0 || response.status === 200) {
          setEmailValue("");
          setNameValue("");
          toast({
            title: "Thank you!",
            description: "Once the wait is over we will notify you",
            status: "success",
            duration: 60000,
            isClosable: true,
            position: "top",
          });
        } else {
          toast({
            title: "Sorry that did not work",
            status: "error",
            duration: 7000,
            isClosable: true,
            position: "top",
          });
        }
      })
      .catch((e: Error) => {
        toast({
          title: "Sorry that did not work",
          description: e.message,
          status: "error",
          duration: 7000,
          isClosable: true,
          position: "top",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
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
            <Button
              variant={"solid"}
              colorScheme={"brandScheme"}
              type={"submit"}
              isLoading={isSubmitting}
            >
              Join now
            </Button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default WaitlistForm;
