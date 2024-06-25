import "./style.css";
import { CreateProductTemplateHook } from "../hooks";

export const AddComponentContainer = () => {
  const {
    componentList,
    addNewComponentHandlerClick,
    deleteComponentById,
    updateComponentProps,
  } = CreateProductTemplateHook();

  return (
    <div>
      <h3>Componentes</h3>
      <div className="add-component-button-container">
        <button type="button" onClick={addNewComponentHandlerClick}>
          Adicionar componente +
        </button>
      </div>
      {componentList.length > 0 && (
        <fieldset
          style={{ display: "flex", flexDirection: "column", gap: "40px" }}
        >
          {componentList.map((currentComponent) => {
            return (
              <div className="create-template-form" key={currentComponent.id}>
                <button
                  type="button"
                  onClick={() => deleteComponentById(currentComponent?.id)}
                >
                  Excluir
                </button>
                <fieldset>
                  <legend>{currentComponent.name}</legend>
                  <label>
                    <span>Nome</span>
                    <input
                      type="text"
                      value={currentComponent.name}
                      onChange={(event) =>
                        updateComponentProps(
                          currentComponent.id,
                          "name",
                          event.target.value
                        )
                      }
                    />
                  </label>
                  <label>
                    <span>Subtitulo</span>
                    <input
                      type="text"
                      value={currentComponent.subTitle}
                      onChange={(event) =>
                        updateComponentProps(
                          currentComponent.id,
                          "subTitle",
                          event.target.value
                        )
                      }
                    />
                  </label>
                  <label>
                    <span>Tipo</span>
                    <select
                      value={currentComponent.type}
                      onChange={(event) =>
                        updateComponentProps(
                          currentComponent.id,
                          "type",
                          event.target.value
                        )
                      }
                    >
                      <option value="nav">Navegação</option>
                      <option value="list">Lista</option>
                      <option value="especifications">Especificações</option>
                      <option value="links">Links</option>
                    </select>
                  </label>
                  <label>
                    <span>Separador</span>
                    <input
                      type="text"
                      value={currentComponent.separator}
                      onChange={(event) =>
                        updateComponentProps(
                          currentComponent.id,
                          "separator",
                          event.target.value
                        )
                      }
                    />
                  </label>
                  <label>
                    <span>Navegação vinculada</span>
                    <select
                      value={currentComponent.subTitle}
                      onChange={(event) =>
                        updateComponentProps(
                          currentComponent.id,
                          "subTitle",
                          event.target.value
                        )
                      }
                    >
                      <option disabled>Selecione uma lista</option>
                    </select>
                  </label>
                  <label>
                    <span>Tamanho</span>
                    <select
                      value={currentComponent.size}
                      onChange={(event) =>
                        updateComponentProps(
                          currentComponent.id,
                          "size",
                          event.target.value
                        )
                      }
                    >
                      <option disabled>Selecione um tamanho</option>
                      <option value="medium">Medio</option>
                      <option value="large">Grande</option>
                    </select>
                  </label>
                </fieldset>
              </div>
            );
          })}
        </fieldset>
      )}
    </div>
  );
};
