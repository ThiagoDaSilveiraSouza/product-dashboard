import { useCallback, useEffect, useState } from "react";

export const CreateProductTemplateHook = () => {
  const [componentList, setComponentList] = useState([]);

  useEffect(() => {
    console.log("componentList", componentList);
  }, [componentList]);

  const addNewComponentHandlerClick = useCallback(() => {
    const component = {
      id: 1,
      name: "",
      subTitle: "",
      type: "",
      size: "medium",
      separator: "",
      linkedNavName: "",
    };

    setComponentList((prevState) => {
      const isFirstComponent = prevState.length === 0;

      if (!isFirstComponent) {
        const lastComponent = prevState[prevState.length - 1];
        component.id = lastComponent.id + 1;
      }

      return [...prevState, component];
    });
  }, []);

  const deleteComponentById = useCallback((componentId) => {
    setComponentList((prevState) => {
      return prevState.filter(({ id }) => id !== componentId);
    });
  }, []);

  const updateComponentProps = useCallback((componentId, prop, value) => {
    setComponentList((prevState) => {
      return prevState.map((currentComponent) => {
        const isTargetComponent = currentComponent.id === componentId;

        if (isTargetComponent) {
          return { ...currentComponent, [prop]: value };
        }

        return currentComponent;
      });
    });
  }, []);

  return {
    componentList,
    addNewComponentHandlerClick,
    deleteComponentById,
    updateComponentProps,
  };
};
