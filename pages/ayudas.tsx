import React from "react";
import Container from "../components/usuarios/Container";
import { Button } from "@nextui-org/react";
import TabsContainer from "../components/TabsContainer";

import TabPanel from "../components/TabPanel";
import { TabsProvider } from "../context/TabsContext";
import Tab from "../components/Tab";
import { Table } from "../components/Table";
const Ayudas = () => {
  return (
    <div>
      <p className="text-gray-700 text-3xl mb-10 font-bold">Ayudas</p>
      <div>
        
        <TabsProvider>
          {/* Tabs */}
          <TabsContainer className="md:flex flex text-center">
            <Tab value={0}>Contenido</Tab>
            <Tab value={1}>Tópicos</Tab>
          </TabsContainer>

          {/* TAB PANELS */}
          <div className="">
            {/* Contenidos */}
              <TabPanel
                className="animate__animated animate__fadeInUp bg-white rounded-lg p-2"
                value={0}
              >
              <div className="flex">
                <p className="text-gray-700 text-xl font-bold mt-4 mb-4">Contenido de la Ayuda</p>
                <div className="ml-auto">
                  <button className="bg-transparent hover:bg-emerald-400 text-emerald-400 font-semibold hover:text-white py-2 px-4 border border-emerald-400 hover:border-transparent rounded">
                    Creae Ayuda
                  </button>
                </div>
              </div>
              <Container>
              {/* <div className=" mt-10">
                <Table
                  columns={columns}
                  items={usuarios.map((usuarios) => ({
                    ...usuarios,
                    key: usuarios.userId,
                    actions: "actions",
                }))}
              /> 
              
          </div>  */}
              </Container>
              </TabPanel>
        
            {/* Tópicos */}
            <TabPanel
              className="animate__animated animate__fadeInUp  bg-white rounded-lg p-2"
              value={1}
            >
            <div className="flex">
              <p className="text-gray-700 text-xl font-bold mt-4 mb-4">Contenido de la Ayuda</p>
                <div className="ml-auto">
                  <button className="bg-transparent hover:bg-emerald-400 text-emerald-400 font-semibold hover:text-white py-2 px-4 border border-emerald-400 hover:border-transparent rounded">
                    Crear Tópico
                  </button>
                </div>
            </div>              
            <Container>
              <p>Tópicos</p>  
            </Container>
            </TabPanel>
          </div>
         
        </TabsProvider>
      </div>
    </div>
  );
};

export default Ayudas;
