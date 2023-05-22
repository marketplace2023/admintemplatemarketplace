import React from "react";
import Container from "../components/usuarios/Container";
import { Button } from "@nextui-org/react";
import TabsContainer from "../components/TabsContainer";

import TabPanel from "../components/TabPanel";
import { TabsProvider } from "../context/TabsContext";
import Tab from "../components/Tab";
const Ayudas = () => {
  return (
    <div>
      <p className="text-gray-700 text-3xl mb-10 font-bold">Ayudas</p>
      <div>
        <TabsProvider>
          {/* Tabs */}
          <TabsContainer className="md:flex flex md:m-10 m-2 mt-6 text-center">
            <Tab value={0}>Contenido</Tab>
            <Tab value={1}>Tópicos</Tab>
          </TabsContainer>

          {/* TAB PANELS */}
          <div className="mt-4 md:p-4">
            {/* Contenidos */}
            <TabPanel
              className="animate__animated animate__fadeInUp bg-white rounded-lg p-4"
              value={0}
            >
              <p>Contenidos</p>
            </TabPanel>

            {/* Tópicos */}
            <TabPanel
              className="animate__animated animate__fadeInUp  bg-white rounded-lg "
              value={1}
            >
              <p>Tópicos</p>
            </TabPanel>
          </div>
        </TabsProvider>
      </div>
    </div>
  );
};

export default Ayudas;
