import React, { useState, useEffect } from 'react'
import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
import CTA from '../components/CTA'
import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableFooter,
  TableContainer,
  Badge,
  Avatar,
  Button,
  Pagination,
} from '@windmill/react-ui'
import { EditIcon, TrashIcon } from '../icons'

import response from '../utils/demo/tableData'
// make a copy of the data, for the second table
const response2 = response.concat([])

const data = [
  {
    id: 8,
    company: 'INTERLAND CARGA',
    from: 'Ignacio Zaragoza Veracruz',
    to: 'Centro Ciudad de México',
    email: 'transpo.geocerca@gmail.com',
    offer: 12000,
  },
  {
    id: 11,
    company: 'INTERLAND CARGA',
    from: 'Ricardo Flores Magón Boca del Río',
    to: 'Francisco Villa Veracruz',
    email: 'transpo.geocerca@gmail.com',
    offer: 27000,
  },
  {
    id: 13,
    company: 'INTERLAND CARGA',
    from: 'Escandón I Sección Ciudad de México',
    to: 'Salvador Díaz Mirón Veracruz',
    email: 'transpo.geocerca@gmail.com',
    offer: 23990.9090909091,
  },
  {
    id: 6,
    company: 'INTERLAND CARGA',
    from: 'Jardines del Virginia Veracruz',
    to: 'Ricardo Flores Magón Boca del Río',
    email: 'transpo.geocerca@gmail.com',
    offer: 35000,
  },
  {
    id: 7,
    company: 'INTERLAND CARGA',
    from: 'Ricardo Flores Magón Boca del Río',
    to: 'Francisco Villa Veracruz',
    email: 'transpo.geocerca@gmail.com',
    offer: 45000,
  },
  {
    id: 12,
    company: 'INTERLAND CARGA',
    from: 'Ignacio Zaragoza Veracruz',
    to: 'Centro Ciudad de México',
    email: 'transpo.geocerca@gmail.com',
    offer: 22977.2727272727,
  },
];

const TransportList = () => {
  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Buscar cargas..."
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      {data.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between p-4 mb-4 bg-white shadow rounded-lg"
        >
          <div className="flex items-center">
            <div className="text-orange-500 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <div className="font-bold">{item.company}</div>
              <div className="text-gray-600">
                <span>{item.from}</span> <span>→</span> <span>{item.to}</span>
              </div>
              <div className="text-gray-500">{item.email}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-green-500 font-bold">${item.offer}</div>
            <input
              type="text"
              placeholder="Tu oferta: $"
              className="mt-2 p-2 border border-gray-300 rounded"
            />
            <div className="flex items-center mt-2 space-x-2">
              <button className="flex items-center space-x-1 p-2 text-blue-500 hover:bg-blue-100 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
                <span>Enviar</span>
              </button>
              <button className="flex items-center space-x-1 p-2 text-red-500 hover:bg-red-100 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span>Declinar</span>
              </button>
              <button className="flex items-center space-x-1 p-2 text-green-500 hover:bg-green-100 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Aceptar</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

function Tables() {
  /**
   * DISCLAIMER: This code could be badly improved, but for the sake of the example
   * and readability, all the logic for both table are here.
   * You would be better served by dividing each table in its own
   * component, like Table(?) and TableWithActions(?) hiding the
   * presentation details away from the page view.
   */

  // setup pages control for every table
  const [pageTable1, setPageTable1] = useState(1)
  const [pageTable2, setPageTable2] = useState(1)

  // setup data for every table
  const [dataTable1, setDataTable1] = useState([])
  const [dataTable2, setDataTable2] = useState([])

  // pagination setup
  const resultsPerPage = 10
  const totalResults = response.length

  // pagination change control
  function onPageChangeTable1(p) {
    setPageTable1(p)
  }

  // pagination change control
  function onPageChangeTable2(p) {
    setPageTable2(p)
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setDataTable1(response.slice((pageTable1 - 1) * resultsPerPage, pageTable1 * resultsPerPage))
  }, [pageTable1])

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setDataTable2(response2.slice((pageTable2 - 1) * resultsPerPage, pageTable2 * resultsPerPage))
  }, [pageTable2])

  return (
    <>
      <PageTitle>NEGOCIACIONES</PageTitle>
      <TransportList />
    </>
  )
}

export default Tables