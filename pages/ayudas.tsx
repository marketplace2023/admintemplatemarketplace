import React from "react";
import { useState } from "react";
import Container from "../components/usuarios/Container";
import TabsContainer from "../components/TabsContainer";
import TabPanel from "../components/TabPanel";
import { TabsProvider } from "../context/TabsContext";
import Tab from "../components/Tab";
import { Table } from "../components/Table";
import { BiEditAlt, BiTrash } from "react-icons/bi";
import useContect from "../hooks/useContect";
import Image from "next/image";
import useTocpic from "../hooks/useTopic";

const columns = [
  { headerName: "ID", field: "contectCodigo" },
  { headerName: "TÍTULO", field: "contectTitle" },
  {
    headerName: "DESCRIPCIÓN",
    field: "contectTexto",
    renderCell: (ayuda) => (
        <p className="truncate max-w-md">{ayuda.contectTexto}</p>
    )
  },
  { headerName: "TOPICO", field: "contectTopic" },
  {
    headerName: "ACTIONS",
    field: "actions",
    renderCell: (ayuda) => (
      <div className="flex">
        <div
          className="cursor-pointer text-blue-600 hover:text-blue-200"
          // onClick={() => setSelectedUser(ayuda)}
        >
          <BiEditAlt style={{ fontSize: "2em", marginLeft: "20px" }} />
        </div>
        <div className="cursor-pointer text-red-600 hover:text-red-200">
          <BiTrash style={{ fontSize: "2em", marginLeft: "20px" }} />
        </div>
      </div>
    ),
  },
];

const columnsTopic = [
  
  { headerName: "ID", field: " topicCodigo" },
  { headerName: "TÍTULO", field: " topicTitle" },
  {
    headerName: "ICONO",
    field: "topicIcono",
    renderCell: (topic) => (
      <div className="relative h-10 w-10">
        <Image
          className="h-full w-full rounded-full object-cover object-center"
          src={topic.topicIcono}
          alt="login"
          width={100}
          height={100}
        />
      </div>
    ),
  },
  { headerName: "TOPICO", field: "topicTopicc" },
  {
    headerName: "ACTIONS",
    field: "actions",
    renderCell: (ayuda) => (
      <div className="flex">
        <div
          className="cursor-pointer text-blue-600 hover:text-blue-200"
          // onClick={() => setSelectedUser(ayuda)}
        >
          <BiEditAlt style={{ fontSize: "2em", marginLeft: "20px" }} />
        </div>
        <div className="cursor-pointer text-red-600 hover:text-red-200">
          <BiTrash style={{ fontSize: "2em", marginLeft: "20px" }} />
        </div>
      </div>
    ),
  },
];

const Ayudas = () => {
  const [searchValue, setSearchValue] = useState("");
  const { contects = [] } = useContect({
    queryParams: {
      search: searchValue,
    },
  });
  const { topics = [] } = useTocpic({
    queryParams: {
      search: searchValue,
    },
  });
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
              <div className=" mt-4 truncate">
                <Table
                  columns={columns}
                  items={contects.map((contects) => ({
                    ...contects,
                    key: contects.contectId,
                    actions: "actions",
                }))}
                /> 
              </div> 
              </Container>
              </TabPanel>
            {/* Tópicos */}
            <TabPanel
              className="animate__animated animate__fadeInUp  bg-white rounded-lg p-2"
              value={1}
            >
            <div className="flex">
              <p className="text-gray-700 text-xl font-bold mt-4 mb-4">Tópicos de Ayudas</p>
                <div className="ml-auto">
                  <button className="bg-transparent hover:bg-emerald-400 text-emerald-400 font-semibold hover:text-white py-2 px-4 border border-emerald-400 hover:border-transparent rounded">
                    Crear Tópico
                  </button>
                </div>
            </div>              
            <Container>
              <div className=" mt-4 truncate">
                <Table
                  columns={columnsTopic}
                  items={topics.map((topics) => ({
                    ...topics,
                    key: topics.topicId,
                    actions: "actions",
                }))}
                /> 
              </div> 
              </Container>
            </TabPanel>
          </div>
        </TabsProvider>
      </div>
    </div>
  );
};

export default Ayudas;
