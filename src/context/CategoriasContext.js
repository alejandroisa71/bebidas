import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

//Crear el Context
export const CategoriasContext = createContext();

// Provider es donde se encuentran las fucniones y el state
const CategoriasProvider = (props) => {
  //crear el state del context

  const [categorias, setCategorias] = useState([]);

  //ejecutar el llamado a la Api
  useEffect(() => {
    const obtenerCategorias = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

      const categorias = await axios.get(url);

      setCategorias(categorias.data.drinks);
      //   console.log(categorias.data.drinks);
    };
    obtenerCategorias();
  }, []);

  return (
    <CategoriasContext.Provider
      value={{
        categorias,
      }}
    >
      {props.children}
    </CategoriasContext.Provider>
  );
};

export default CategoriasProvider;
