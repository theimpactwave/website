"use client";

import {
  Box,
  Button,
  Checkbox,
  Collapse,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import FormData from "form-data";
import { Field, Formik } from "formik";
import type { ChangeEvent, MouseEvent } from "react";
import { useEffect, useState } from "react";

import type { FundCausesType } from "@/components/fund/cause";
import { FundCauses } from "@/components/fund/cause";

const FundForm = () => {
  const toast = useToast();
  const { isOpen, onToggle } = useDisclosure();
  const [emailValue, setEmailValue] = useState<string>("");
  const [nameValue, setNameValue] = useState<string>("");
  const [causesValue, setCausesValue] = useState<FundCausesType[]>([]);
  const [causesOthersValue, setCausesOthersValue] = useState<string>("");
  const [waitlistYes, setWaitListYes] = useState<boolean>(true);
  const [acceptTerms, setAcceptTerms] = useState<boolean>(false);
  const [projectSize, setProjectSize] = useState<[boolean, boolean, boolean]>([
    false,
    false,
    false,
  ]);
  const [projectGeo, setProjectGeo] = useState<
    [boolean, boolean, boolean, boolean, boolean, boolean]
  >([false, false, false, false, false, false]);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [hasAtLeastOneCause, setHasAtLeastOneCause] = useState<boolean>(false);

  const causes: FundCausesType[] = [
    {
      name: "Relief1",
    },
    {
      name: "Relief2",
    },
    {
      name: "Relief3",
    },
  ];

  const getProjectSizes = (): string[] => {
    const sizes: string[] = [];
    if (projectSize[0]) {
      sizes.push("Verified initiatives recently started");
    }
    if (projectSize[1]) {
      sizes.push("Verified initiatives with one project");
    }
    if (projectSize[3]) {
      sizes.push("Verified initiatives with several projects");
    }
    return sizes;
  };

  const getProjectGeo = (): string[] => {
    const geo: string[] = [];
    if (projectGeo[0]) {
      geo.push("Europe");
    }
    if (projectGeo[1]) {
      geo.push("Africa");
    }
    if (projectGeo[2]) {
      geo.push("Asia");
    }
    if (projectGeo[3]) {
      geo.push("North America");
    }
    if (projectGeo[4]) {
      geo.push("South America");
    }
    if (projectGeo[5]) {
      geo.push("Australia (Oceania)");
    }
    return geo;
  };

  const getCauses = (): string[] => {
    const causes: string[] = [];
    causesValue.forEach((cause: FundCausesType) => {
      causes.push(cause.name);
    });
    return causes;
  };

  const onProjectSizeHandler = (value: number, checked: boolean) => {
    setProjectSize((prevState: any): any => {
      const newState = [...prevState];
      newState[value] = checked;
      return newState;
    });
  };

  const onProjectGeoHandler = (value: number, checked: boolean) => {
    setProjectGeo((prevState: any): any => {
      const newState = [...prevState];
      newState[value] = checked;
      return newState;
    });
  };

  const onNextStepHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onToggle();
    return false;
  };

  const onSubmitHandler = async () => {
    setIsSubmitting(true);
  };

  useEffect(() => {
    const hasCauses: FundCausesType[] = causesValue.filter(
      (cause: FundCausesType) => cause.active === true,
    );
    if (hasCauses.length > 0 || causesOthersValue) {
      setHasAtLeastOneCause(true);
    } else {
      setHasAtLeastOneCause(false);
    }
  }, [causesValue, causesOthersValue]);

  return (
    <>
      <Formik
        initialValues={{
          funder_email: "",
          funder_name: "",
          causes_other: "",
          project_size: "",
          project_proximity: "",
          waitlist_yes: false,
          acccept_terms: false,
        }}
        onSubmit={onSubmitHandler}
      >
        {({ handleSubmit, errors, touched, setFieldValue }) => (
          <form onSubmit={handleSubmit} noValidate>
            <FormControl mb={12}>
              <FormLabel fontSize={"lg"}>
                Select the causes you care for
              </FormLabel>
              <Box mb={4}>
                <FundCauses causes={causes} onChange={setCausesValue} />
              </Box>
              <FormLabel htmlFor={"causes_other"}>
                Other causes you care for
              </FormLabel>
              <Field
                as={Input}
                id={"causes_other"}
                name={"causes_other"}
                type={"text"}
                value={causesOthersValue}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const value = e.target?.value as string;
                  setCausesOthersValue(value);
                  setFieldValue("causes_other", value).then(() => {});
                }}
              />
            </FormControl>
            <FormControl
              mb={12}
              isInvalid={!!errors.project_size && touched.project_size}
            >
              <FormLabel fontSize={"lg"} htmlFor={"project_size"}>
                State of the projects you want to fund:
              </FormLabel>
              <Stack>
                <Field
                  as={Checkbox}
                  id={"project_size1"}
                  name={"project_size[]"}
                  type={"checkbox"}
                  value={1}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    onProjectSizeHandler(0, e.target?.checked as boolean);
                  }}
                >
                  Verified initiatives recently started
                </Field>
                <Field
                  as={Checkbox}
                  id={"project_size2"}
                  name={"project_size[]"}
                  type={"checkbox"}
                  value={2}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    onProjectSizeHandler(1, e.target?.checked as boolean);
                  }}
                >
                  Verified initiatives with one project
                </Field>
                <Field
                  as={Checkbox}
                  id={"project_size3"}
                  name={"project_size[]"}
                  type={"checkbox"}
                  value={3}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    onProjectSizeHandler(2, e.target?.checked as boolean);
                  }}
                >
                  Verified initiatives with several projects
                </Field>
              </Stack>
              <FormErrorMessage>
                Please enter a valid size of the project
              </FormErrorMessage>
              <FormHelperText>
                Leave unchecked if you want to fund all of them
              </FormHelperText>
            </FormControl>
            <FormControl mb={12}>
              <FormLabel fontSize={"lg"}>
                Do you want to fund worldwide or prefer specific continents
              </FormLabel>
              <Stack>
                <Field
                  as={Checkbox}
                  id={"project_geo1"}
                  name={"project_geo[]"}
                  type={"checkbox"}
                  value={1}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    onProjectGeoHandler(0, e.target?.checked as boolean);
                  }}
                >
                  Europe
                </Field>
                <Field
                  as={Checkbox}
                  id={"project_geo2"}
                  name={"project_geo[]"}
                  type={"checkbox"}
                  value={1}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    onProjectGeoHandler(1, e.target?.checked as boolean);
                  }}
                >
                  Africa
                </Field>
                <Field
                  as={Checkbox}
                  id={"project_geo3"}
                  name={"project_geo[]"}
                  type={"checkbox"}
                  value={1}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    onProjectGeoHandler(2, e.target?.checked as boolean);
                  }}
                >
                  Asia
                </Field>
                <Field
                  as={Checkbox}
                  id={"project_geo4"}
                  name={"project_geo[]"}
                  type={"checkbox"}
                  value={1}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    onProjectGeoHandler(3, e.target?.checked as boolean);
                  }}
                >
                  North America
                </Field>
                <Field
                  as={Checkbox}
                  id={"project_geo5"}
                  name={"project_geo[]"}
                  type={"checkbox"}
                  value={1}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    onProjectGeoHandler(4, e.target?.checked as boolean);
                  }}
                >
                  South America
                </Field>
                <Field
                  as={Checkbox}
                  id={"project_geo6"}
                  name={"project_geo[]"}
                  type={"checkbox"}
                  value={1}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    onProjectGeoHandler(5, e.target?.checked as boolean);
                  }}
                >
                  Australia (Ocenania)
                </Field>
              </Stack>
              <FormHelperText>
                Leave unchecked if you want to fund worldwide
              </FormHelperText>
            </FormControl>
            <Collapse in={isOpen} animateOpacity>
              <FormControl
                mb={5}
                isRequired
                isInvalid={!!errors.funder_email && touched.funder_email}
              >
                <FormLabel htmlFor={"funder_email"}>E-Mail</FormLabel>
                <Field
                  as={Input}
                  id={"funder_email"}
                  name={"funder_email"}
                  type={"email"}
                  value={emailValue}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    const value = e.target?.value as string;
                    setEmailValue(value);
                    setFieldValue("funder_email", value).then(() => {});
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
                <FormErrorMessage>{errors.funder_email}</FormErrorMessage>
              </FormControl>
              <FormControl
                mb={12}
                isRequired
                isInvalid={!!errors.funder_name && touched.funder_name}
              >
                <FormLabel htmlFor={"funder_name"}>Name</FormLabel>
                <Field
                  as={Input}
                  id={"funder_name"}
                  name={"funder_name"}
                  type={"text"}
                  value={nameValue}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    const value = e.target?.value as string;
                    setNameValue(value);
                    setFieldValue("funder_name", value).then(() => {});
                  }}
                  validate={(value: string) => {
                    return !value ? "Your name is required" : undefined;
                  }}
                />
                <FormErrorMessage>{errors.funder_name}</FormErrorMessage>
              </FormControl>
              <FormControl mb={4}>
                <Field
                  as={Checkbox}
                  defaultChecked
                  id={"waitlist_yes"}
                  name={"waitlist_yes"}
                  type={"checkbox"}
                  value={waitlistYes}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    const value = e.target?.checked as boolean;
                    setWaitListYes(value);
                    setFieldValue("waitlist_yes", value).then(() => {});
                  }}
                >
                  Can we send you e-mails? (We wont spam you we promise!)
                </Field>
              </FormControl>
              <FormControl mb={12} isRequired isInvalid={!acceptTerms}>
                <Field
                  as={Checkbox}
                  id={"acccept_terms"}
                  name={"acccept_terms"}
                  type={"checkbox"}
                  value={acceptTerms}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    const value = e.target?.checked as boolean;
                    setAcceptTerms(value);
                    setFieldValue("acccept_terms", value).then(() => {});
                  }}
                  validate={(value: any) => {
                    return !value ? "Please accept our terms" : undefined;
                  }}
                >
                  Please accept our terms
                </Field>
                <FormErrorMessage>{errors.acccept_terms}</FormErrorMessage>
              </FormControl>
            </Collapse>
            {isOpen ? (
              <Button
                variant={"solid"}
                colorScheme={"brandScheme"}
                type={"submit"}
                isLoading={isSubmitting}
              >
                Fund now
              </Button>
            ) : (
              <Button
                isDisabled={!hasAtLeastOneCause}
                variant={"solid"}
                colorScheme={"brandScheme"}
                type={"button"}
                onClick={onNextStepHandler}
              >
                Next Step
              </Button>
            )}
          </form>
        )}
      </Formik>
    </>
  );
};

export default FundForm;
