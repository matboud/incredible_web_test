import React from "react";
import { Input } from "./styles";

type InputProps = {
  onInput: (e: any) => void;
};

const index = ({ onInput }: InputProps) => {
  return (
    <>
      <Input type="text" placeholder="Search by movie.." onChange={onInput} />
    </>
  );
};

export default index;
