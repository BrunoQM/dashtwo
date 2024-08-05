import React, { useState, useEffect } from 'react';
import PageTitle from '../components/Typography/PageTitle';
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon } from '../icons';
import RoundIcon from '../components/RoundIcon';
import response from '../utils/demo/tableData';

function Dashboard() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [tasks, setTasks] = useState([
    'Subir documento Foto para el embarque E',
    'Subir documento ASN - E47 para el embarque E47',
    'Subir documento POD para el embarque E6',
  ]);
  const [newTask, setNewTask] = useState('');

  // pagination setup
  const resultsPerPage = 10;
  const totalResults = response.length;

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page]);

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleTaskDone = (index) => {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
      <PageTitle>Dashboard</PageTitle>

      <div className="bg-gray-100 dark:bg-gray-900 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <label htmlFor="period" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Periodo:</label>
              <input type="date" id="period" name="period" className="mt-1 block w-60 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm" />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <p className="text-gray-500 dark:text-gray-400">Creado</p>
              <p className="text-2xl font-semibold text-black dark:text-white">2</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <p className="text-gray-500 dark:text-gray-400">En curso</p>
              <p className="text-2xl font-semibold text-red-600 dark:text-red-400">15</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <p className="text-gray-500 dark:text-gray-400">Entregados</p>
              <p className="text-2xl font-semibold text-black dark:text-white">4</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <p className="text-gray-500 dark:text-gray-400">Cerrados</p>
              <p className="text-2xl font-semibold text-black dark:text-white">2</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6">
            <p className="text-gray-500 dark:text-gray-400">Costo logístico por pieza</p>
            <p className="text-4xl font-semibold text-black dark:text-white">$0.00</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md col-span-2">
              <h2 className="text-lg font-semibold mb-4 text-black dark:text-white">Lista de pendientes</h2>
              <ul className="space-y-4">
                {tasks.map((task, index) => (
                  <li key={index} className="flex items-center space-x-4 text-black dark:text-white">
                    <button
                      onClick={() => handleTaskDone(index)}
                      className="bg-red-500 text-white p-2 rounded-md"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5.121 17.804A5 5 0 0114 6.293M19 9l-7 7-3-3"
                        ></path>
                      </svg>
                    </button>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Nueva tarea"
                />
                <button
                  onClick={handleAddTask}
                  className="mt-2 bg-green-500 dark:bg-green-700 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                  Añadir Tarea
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;