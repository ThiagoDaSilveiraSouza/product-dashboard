import { useState } from "react";
import { SideBar } from "./compoents/SideBar/SideBar";
import { CreateProductTemplatePage } from "./pages";

export const Dashboard = () => {
  const [activePage, setActivePage] = useState("template");

  const pagesComponents = {
    template: <CreateProductTemplatePage />,
    product: <CreateProductTemplatePage />,
  };

  return (
    <main
      style={{
        display: "flex",
        maxHeight: "100vh",
        width: "100vw",
      }}
    >
      <SideBar usePage={[activePage, setActivePage]} />
      <div
        style={{
          flex: "1 1 auto",
          overflow: "auto",
        }}
      >
        {pagesComponents[activePage]}
      </div>
    </main>
  );
};
