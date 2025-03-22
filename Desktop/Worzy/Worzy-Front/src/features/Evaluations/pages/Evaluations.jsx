import { useState } from "react";
import GenericTable from "../../../shared/components/Table";

const evaluationsData = [
  { id: 1, nombre: "Evaluación 1", tema: "Matemáticas", estado: "Activo" },
  { id: 2, nombre: "Evaluación 2", tema: "Historia", estado: "Inactivo" },
  { id: 3, nombre: "Evaluación 3", tema: "Ciencias", estado: "Activo" },
];

const activitiesData = [
  { id: 1, nombre: "Actividad 1", tema: "Matemáticas", estado: "Activo" },
  { id: 2, nombre: "Actividad 2", tema: "Historia", estado: "Inactivo" },
  { id: 3, nombre: "Actividad 3", tema: "Ciencias", estado: "Activo" },
];

const columns = [
  { key: "nombre", label: "Nombre" },
  { key: "tema", label: "Tema" },
  {
    key: "estado",
    label: "Estado",
    render: (item) => (
      <span className={`generic-table-status ${item.estado === "Activo" ? "activo" : "inactivo"}`}>
        {item.estado}
      </span>
    ),
  },
];

const Evaluations = () => {
  const [selectedType, setSelectedType] = useState("examenes");

  const handleEdit = (item) => {
    console.log("Editar:", item);
  };

  const handleDelete = (id) => {
    console.log("Eliminar con ID:", id);
  };

  const handleShow = (item) => {
    console.log("Detalle de:", item);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Evaluaciones</h1>
      <h2 className="mb-4">Lista de evaluaciones</h2>
      <select
        className="mb-2 p-2 border rounded w-full"
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <option value="examenes">Exámenes</option>
        <option value="actividades">Actividades</option>
      </select>
      <GenericTable
        data={selectedType === "examenes" ? evaluationsData : activitiesData}
        columns={columns}
        onShow={handleShow}
        onEdit={handleEdit}
        onDelete={handleDelete}
        title={`Listado de ${selectedType === "examenes" ? "Exámenes" : "Actividades"}`}
        showActions={{ show: true, edit: true, delete: true }}
      />
    </div>
  );
};

export default Evaluations;