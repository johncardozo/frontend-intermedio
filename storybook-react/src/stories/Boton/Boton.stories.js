import { Boton } from "./Boton";

export default {
  component: Boton,
};

// Stories
export const Primary = {
  args: {
    label: "Primary",
    primary: true,
  },
};
export const Secondary = {
  args: {
    label: "Secondary",
    primary: false,
  },
};
