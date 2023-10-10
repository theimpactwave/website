"use client";

import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import type { ChangeEvent } from "react";
import { useState } from "react";

import { CountrySelect } from "@/components/form/country-select";
import { DraggableMap } from "@/components/form/draggable-map";
import { postInitiative } from "@/lib/queries";
import type { InitiativeType } from "@/types";

const OnboardingForm = () => {
  const toast = useToast();
  const [email, setEmail] = useState<string>("");
  const [personalName, setPersonalName] = useState<string>("");
  const [initiativeName, setInitiativeName] = useState<string>("");
  const [initiativeWebsite, setInitiativeWebsite] = useState<string>("");
  const [,] = useState<string>("");
  const [initiativeStory, setInitiativeStory] = useState<string>("");
  const [initiativeLogo, setInitiativeLogo] = useState<string>("");
  const [,] = useState<string>("");
  const [,] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const onSubmitHandler = async () => {
    setIsSubmitting(true);
    postInitiative({
      email: email,
    } as InitiativeType)
      .then((data: any | Error) => {
        console.log(data);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <Formik
        initialValues={{
          onboarding_email: "",
          onboarding_personal_name: "",
          onboarding_initiative_name: "",
          onboarding_initiative_website: "",
          onboarding_initiative_country: "",
          onboarding_initiative_story: "",
          onboarding_initiative_logo: "",
          onboarding_initiative_type: "",
          onboarding_initiative_size: "",
        }}
        onSubmit={onSubmitHandler}
      >
        {({ handleSubmit, errors, touched, setFieldValue }) => (
          <form onSubmit={handleSubmit} noValidate>
            <FormControl
              mb={5}
              isRequired
              isInvalid={!!errors.onboarding_email && touched.onboarding_email}
            >
              <FormLabel htmlFor={"onboarding_email"}>E-Mail</FormLabel>
              <Field
                as={Input}
                id={"onboarding_email"}
                name={"onboarding_email"}
                type={"email"}
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const value = e.target?.value as string;
                  setEmail(value);
                  setFieldValue("onboarding_email", value).then(() => {});
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
              <FormHelperText>
                The email of your organisation or the email we can contact you
                under.
              </FormHelperText>
            </FormControl>
            <FormControl
              mb={5}
              isRequired
              isInvalid={
                !!errors.onboarding_personal_name &&
                touched.onboarding_personal_name
              }
            >
              <FormLabel htmlFor={"onboarding_personal_name"}>
                Your full-name
              </FormLabel>
              <Field
                as={Input}
                id={"onboarding_personal_name"}
                name={"onboarding_personal_name"}
                type={"text"}
                value={personalName}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const value = e.target?.value as string;
                  setPersonalName(value);
                  setFieldValue("onboarding_personal_name", value).then(
                    () => {},
                  );
                }}
              />
              <FormErrorMessage />
              <FormHelperText>
                Your personal full-name (Forename and surname please)
              </FormHelperText>
            </FormControl>
            <FormControl
              mb={5}
              isInvalid={
                !!errors.onboarding_personal_name &&
                touched.onboarding_personal_name
              }
            >
              <FormLabel htmlFor={"onboarding_initiative_name"}>
                Organisation / Initiative name
              </FormLabel>
              <Field
                as={Input}
                id={"onboarding_initiative_name"}
                name={"onboarding_initiative_name"}
                type={"text"}
                value={initiativeName}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const value = e.target?.value as string;
                  setInitiativeName(value);
                  setFieldValue("onboarding_initiative_name", value).then(
                    () => {},
                  );
                }}
              />
              <FormErrorMessage>
                Please enter a valid full-name
              </FormErrorMessage>
              <FormHelperText>
                The email of your organisation or the email we can contact you
                under.
              </FormHelperText>
            </FormControl>
            <FormControl
              mb={5}
              isInvalid={
                !!errors.onboarding_initiative_website &&
                touched.onboarding_initiative_website
              }
            >
              <FormLabel htmlFor={"onboarding_initiative_website"}>
                Initiative Website
              </FormLabel>
              <Field
                as={Input}
                id={"onboarding_initiative_website"}
                name={"onboarding_initiative_website"}
                type={"text"}
                value={initiativeWebsite}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const value = e.target?.value as string;
                  setInitiativeWebsite(value);
                  setFieldValue("onboarding_initiative_website", value).then(
                    () => {},
                  );
                }}
              />
              <FormErrorMessage>
                Please enter a valid full website link
              </FormErrorMessage>
              <FormHelperText>
                The full url to your initiative website or presentation
              </FormHelperText>
            </FormControl>
            <FormControl
              mb={5}
              isInvalid={
                !!errors.onboarding_initiative_type &&
                touched.onboarding_initiative_type
              }
            >
              <FormLabel htmlFor={"onboarding_initiative_type"}>
                Type of initiative:
              </FormLabel>
              <RadioGroup defaultValue={"2"}>
                <Stack direction={"row"} spacing={4}>
                  <Radio value={"1"}>Single Impact Maker</Radio>
                  <Radio value={"2"}>Organisation</Radio>
                </Stack>
              </RadioGroup>
              <FormErrorMessage>Please select a valid type</FormErrorMessage>
              <FormHelperText>
                Please select the type of the initiative
              </FormHelperText>
            </FormControl>
            <FormControl
              mb={5}
              isInvalid={
                !!errors.onboarding_initiative_size &&
                touched.onboarding_initiative_size
              }
            >
              <FormLabel htmlFor={"onboarding_initiative_size"}>
                Size of your initiative:
              </FormLabel>
              <RadioGroup defaultValue={"1"}>
                <Stack direction={"row"} spacing={4}>
                  <Radio value={"1"}>Seed level (small)</Radio>
                  <Radio value={"2"}>Small</Radio>
                  <Radio value={"3"}>Medium</Radio>
                  <Radio value={"4"}>Large</Radio>
                </Stack>
              </RadioGroup>
              <FormErrorMessage>
                Please enter a valid size of the initiative
              </FormErrorMessage>
              <FormHelperText>The size of the initiative</FormHelperText>
            </FormControl>
            <FormControl
              mb={5}
              isRequired
              isInvalid={
                !!errors.onboarding_initiative_story &&
                touched.onboarding_initiative_story
              }
            >
              <FormLabel htmlFor={"onboarding_initiative_story"}>
                Initiative story:
              </FormLabel>
              <Field
                as={Textarea}
                id={"onboarding_initiative_story"}
                name={"onboarding_initiative_story"}
                type={"textarea"}
                value={initiativeStory}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const value = e.target?.value as string;
                  setInitiativeStory(value);
                  setFieldValue("onboarding_initiative_story", value).then(
                    () => {},
                  );
                }}
              />
              <FormErrorMessage>Please enter a valid story</FormErrorMessage>
              <FormHelperText>
                Please write about your initiative
              </FormHelperText>
            </FormControl>
            <FormControl
              mb={5}
              isInvalid={
                !!errors.onboarding_initiative_logo &&
                touched.onboarding_initiative_logo
              }
            >
              <FormLabel htmlFor={"onboarding_initiative_logo"}>Logo</FormLabel>
              <Field
                as={Input}
                id={"onboarding_initiative_logo"}
                name={"onboarding_initiative_logo"}
                type={"file"}
                value={initiativeLogo}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const value = e.target?.value as string;
                  setInitiativeLogo(value);
                  setFieldValue("onboarding_initiative_logo", value).then(
                    () => {},
                  );
                }}
              />
              <FormErrorMessage>Please upload a logo</FormErrorMessage>
              <FormHelperText>Please upload a logo</FormHelperText>
            </FormControl>
            <FormControl
              mb={5}
              isInvalid={
                !!errors.onboarding_personal_name &&
                touched.onboarding_personal_name
              }
            >
              <FormLabel htmlFor={"onboarding_country"}>Country</FormLabel>
              <CountrySelect />
              <FormErrorMessage>
                Your personal full-name - Not the name of the organisation
              </FormErrorMessage>
              <FormHelperText>
                The email of your organisation or the email we can contact you
                under.
              </FormHelperText>
            </FormControl>
            <FormControl
              mb={5}
              isInvalid={
                !!errors.onboarding_personal_name &&
                touched.onboarding_personal_name
              }
            >
              <FormLabel htmlFor={"onboarding_country"}>Geotag</FormLabel>
              <DraggableMap />
              <FormErrorMessage>
                Your personal full-name - Not the name of the organisation
              </FormErrorMessage>
              <FormHelperText>
                The email of your organisation or the email we can contact you
                under.
              </FormHelperText>
            </FormControl>
            <Button
              variant={"solid"}
              colorScheme={"brandScheme"}
              type={"submit"}
              isLoading={isSubmitting}
            >
              Apply
            </Button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default OnboardingForm;
