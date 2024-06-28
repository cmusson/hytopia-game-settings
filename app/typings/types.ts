export type Option = {
  title: string;
  info: string;
};

export type MainOption = {
  name: string;
  multipleOption: boolean;
  options: Option[];
};

export type ContentOptions = {
  [key: string]: MainOption;
};
