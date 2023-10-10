import type { ComponentWithAs, SelectProps } from "@chakra-ui/react";
import { forwardRef, Select, useStyleConfig } from "@chakra-ui/react";
import type { ChangeEvent, ReactElement } from "react";
import { useCallback, useEffect, useState } from "react";

export type CountryType = {
  id: number;
  alpha2: string;
  alpha3: string;
  name: string;
};

export type CountrySelectOptions = {
  countries?: CountryType[];
  onSelect?: (name: string, alpha2: string, alpha3: string) => void;
  valueKey?: "id" | "alpha2" | "alpha3" | "name";
  include?: string[];
  exclude?: string[];
};
export interface CountrySelectProps
  extends CountrySelectOptions,
    Omit<SelectProps, "onSelect"> {}
export const CountrySelect: ComponentWithAs<"select", CountrySelectProps> =
  forwardRef<CountrySelectProps, "select">((props: CountrySelectProps, ref) => {
    const {
      children,
      countries = undefined,
      valueKey = "alpha2",
      onSelect = undefined,
      onChange = undefined,
      include = undefined,
      exclude = undefined,
      ...rest
    } = props;
    const [_countries, setCountries] = useState<CountryType[] | undefined>(
      undefined,
    );
    const styles = useStyleConfig("CountrySelect", props);

    const loadCountries = (): void => {
      import(`../../assets/json/countries.json`, { assert: { type: "json" } })
        .then((module: any) => {
          setCountries(module.default as CountryType[]);
        })
        .catch(() => {});
    };

    const getCountries = useCallback((): ReactElement[] | null => {
      let selection = countries ? countries : _countries;
      if (selection && Array.isArray(selection)) {
        if (include) {
          selection = selection.filter((country: CountryType) =>
            include.includes(country.alpha2),
          );
        }
        if (exclude) {
          selection = selection.filter(
            (country: CountryType) => !exclude.includes(country.alpha2),
          );
        }
        return selection.map((country: CountryType) => (
          <option
            key={country.id}
            value={country[valueKey]}
            data-id={country.id}
          >
            {country.name}
          </option>
        ));
      }
      return null;
    }, [countries, _countries, valueKey, include, exclude]);

    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>): void => {
      if (onSelect && _countries && Array.isArray(_countries)) {
        const country = _countries.find(
          (country: CountryType) =>
            String(country.id) === event?.target.selectedOptions[0].dataset?.id,
        ) as CountryType;
        onSelect(country.name, country.alpha2, country.alpha3);
      }
      if (onChange) {
        onChange(event);
      }
    };

    useEffect(() => {
      if (!children && !countries) {
        loadCountries();
      }
    }, [children, countries]);

    return (
      <Select
        ref={ref}
        onChange={onChangeHandler}
        className={"country-select"}
        __css={styles}
        {...rest}
      >
        {children ? children : getCountries()}
      </Select>
    );
  });

CountrySelect.displayName = "CountrySelect";
