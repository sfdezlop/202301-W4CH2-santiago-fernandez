export type MenuOption = {
  label: string;
  path: string;
};

export const menuOptions: MenuOption[] = [
  { label: "Inicio", path: "/home" },
  { label: "Tareas", path: "/tasks" },
  { label: "Acerca de", path: "/about" },
];
