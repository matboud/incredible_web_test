import React from "react";
import { StyledSelect } from "./styles";

type MoviesType = {
  id: number;
  title: string;
  year: number;
  rating: number;
  description: string;
  cover: string;
  categories: string[];
  video: string;
};

type SelectProps = {
  title: string;
  values?: MoviesType[];
  onChange?: (e: Event, title: string) => void;
};

const index: React.FC<SelectProps> = ({ title, values, onChange }) => {
  return (
    <StyledSelect
      onChange={(e: any) => {
        onChange(e, title);
      }}
    >
      <option value="" hidden>
        {title}
      </option>
      {values?.map((value) => {
        return (
          <option value={title !== "category" ? value?.[title] : value}>{`${
            title !== "category" ? value?.[title] : value
          }`}</option>
        );
      })}
    </StyledSelect>
  );
};

export default index;
