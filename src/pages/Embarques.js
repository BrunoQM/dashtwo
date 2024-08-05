import React, { useState } from 'react';
import PageTitle from '../components/Typography/PageTitle';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaTruck, FaCheckCircle, FaShippingFast, FaTruckLoading, FaUser, FaCalendarAlt, FaBell, FaSearch } from 'react-icons/fa';

function Charts() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filter, setFilter] = useState('Todos');

  const shipments = {
    requested: [
      { id: '1', company: 'DUS PETROLEUM', origin: 'EXPRESS CASA BLANCA', destination: 'DUS PETROLEUM', date: '23/May - 03:30 pm', code: 'E158', status: 'Pedido', reference: 'bol5252' },
      { id: '2', company: 'Ganfer Fresh', origin: 'LG Electronics Monterrey', destination: 'Mondeléz International Planta...', date: '27/Jun - 01:00 pm', code: 'E195', status: 'Pedido', reference: 'PLO' },
    ],
    inProcess: [
      { id: '3', company: 'DUS PETROLEUM', origin: 'DUS PETROLEUM', destination: 'EXPRESS CASA BLANCA', date: '08/May - 01:00 am', code: 'E138', status: 'En proceso', reference: 'BOL222' },
      { id: '4', company: 'Symrise Apodaca', origin: 'Maysteel', destination: 'Coflex CEDIS', date: '14/Mar - 03:30 pm', code: 'E47', status: 'En proceso', reference: '' },
    ],
    readyForShipment: [
      { id: '5', company: 'ZF Active Safety US Inc', origin: 'Maysteel', destination: 'ZF Sistemas de Direcciones S...', date: '20/Dic - 05:00 pm', code: 'E6', status: 'Listo para embarque', reference: 'MQ-8741' },
    ],
    inTransit: [
      { id: '6', company: 'DUS PETROLEUM', origin: 'CEDIS CHEDRAUI Zumpango', destination: 'Coflex CEDIS', date: '04/May - 07:30 am', code: 'E132', status: 'En tránsito', reference: 'BOL1' },
    ],
    delivered: [
      { id: '7', company: 'PAS', origin: 'Coflex CEDIS', destination: 'DNMX DENSO México S. A. de C. V.', date: '18/Dic - 04:00 pm', code: 'E5', status: 'Entregado', reference: 'MQ-8452' },
    ],
  };

  const renderColumns = () => {
    switch (filter) {
      case 'Pedido':
        return <Column title="Pedido" shipments={shipments.requested} icon={<FaTruck />} />;
      case 'En proceso':
        return <Column title="En proceso" shipments={shipments.inProcess} icon={<FaShippingFast />} />;
      case 'Listo para embarque':
        return <Column title="Listo para embarque" shipments={shipments.readyForShipment} icon={<FaTruckLoading />} />;
      case 'En tránsito':
        return <Column title="En tránsito" shipments={shipments.inTransit} icon={<FaTruck />} />;
      case 'Entregado':
        return <Column title="Entregado" shipments={shipments.delivered} icon={<FaCheckCircle />} />;
      default:
        return (
          <>
            <Column title="Pedido" shipments={shipments.requested} icon={<FaTruck />} />
            <Column title="En proceso" shipments={shipments.inProcess} icon={<FaShippingFast />} />
            <Column title="Listo para embarque" shipments={shipments.readyForShipment} icon={<FaTruckLoading />} />
            <Column title="En tránsito" shipments={shipments.inTransit} icon={<FaTruck />} />
            <Column title="Entregado" shipments={shipments.delivered} icon={<FaCheckCircle />} />
          </>
        );
    }
  };

  return (
    <>
      <PageTitle>Embarques</PageTitle>
      <div className="flex justify-between mb-4 flex-wrap items-center">
        <div className="flex flex-wrap space-x-4 mb-2 w-full justify-between items-center">
          <div className="relative mb-2 flex-1">
            <input type="text" className="border rounded-full p-2 pl-10 w-full" placeholder="Carga..." />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="relative mb-2 flex-1">
            <select className="border rounded-full p-2 pl-10 w-full appearance-none" value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option>Todos</option>
              <option>Pedido</option>
              <option>En proceso</option>
              <option>Listo para embarque</option>
              <option>En tránsito</option>
              <option>Entregado</option>
            </select>
            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="relative mb-2 flex-1">
            <select className="border rounded-full p-2 pl-10 w-full appearance-none">
              <option>Tipo de Carga</option>
              <option>General</option>
              <option>Contenerizada</option>
              <option>Plataforma</option>
              <option>Granel sólido</option>
              <option>Granel líquido</option>
              <option>Sobredimensionado</option>
            </select>
            <FaTruck className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="relative mb-2 flex-1">
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="border rounded-full p-2 pl-10 w-full" placeholderText="Fecha de inicio" />
            <FaCalendarAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="relative mb-2 flex-1">
            <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} className="border rounded-full p-2 pl-10 w-full" placeholderText="Fecha de fin" />
            <FaCalendarAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between space-x-4 overflow-auto h-[600px]">
        {renderColumns()}
      </div>
    </>
  );
}

const Column = ({ title, shipments, icon }) => (
  <div className="flex-1 min-w-[250px] p-4 bg-gray-100 rounded-lg overflow-auto">
    <div className="flex items-center mb-2">
      {icon}
      <h2 className="text-xl font-semibold ml-2">{title}</h2>
    </div>
    <div className="space-y-4">
      {shipments.map((shipment) => (
        <ShipmentCard key={shipment.id} shipment={shipment} />
      ))}
    </div>
  </div>
);

const ShipmentCard = ({ shipment }) => (
  <div className="bg-white shadow p-4 rounded-lg hover:shadow-lg transition-shadow duration-200">
    <div className="flex justify-between">
      <h3 className="font-semibold text-blue-700">{shipment.company}</h3>
      <span className="text-gray-500">{shipment.code}</span>
    </div>
    <p className="text-sm text-gray-600">{shipment.origin} ➜ {shipment.destination}</p>
    <div className="flex justify-between items-center mt-2">
      <span className="text-gray-500 text-sm flex items-center">
        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 3a7 7 0 000 14 7 7 7 0 000-14zM8.5 7a1.5 1.5 0 113 0v4a1.5 1.5 0 11-3 0V7zM10 15a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"></path></svg>
        {shipment.date}
      </span>
      <span className="text-blue-500 font-semibold">{shipment.reference}</span>
      <FaBell className="text-yellow-500 hover:text-yellow-700 cursor-pointer" />
    </div>
  </div>
);

export default Charts;