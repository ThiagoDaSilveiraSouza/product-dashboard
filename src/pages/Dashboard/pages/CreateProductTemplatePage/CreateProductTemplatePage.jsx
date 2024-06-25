import { AddComponentContainer } from "./AddComponentContainer";
import { DefaultDataContainer } from "./DefaultDataContainer";
import "./style.css";

export const CreateProductTemplatePage = () => {
  return (
    <main className="create-product-template-page-main">
      <form>
        <DefaultDataContainer />
        <AddComponentContainer />
      </form>
    </main>
  );
};
