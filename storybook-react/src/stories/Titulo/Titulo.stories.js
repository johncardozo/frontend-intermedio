import Titulo from "./Titulo";

export default {
  component: Titulo,
  title: "Componentes/Titulo",
  argTypes: {
    nivel: {
      // select, radio, inline-radio
      control: "inline-radio",
    },
  },
};

export const Inicial = {
  args: {
    texto: "Título grande",
  },
};
