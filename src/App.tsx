import React, {useEffect, useState} from 'react';
import './App.css';
import { useAuth } from './context/AuthContext'
import Todo from "./components/todo";
import { collection, query, getDocs, orderBy  } from "firebase/firestore";
import {db} from "./firebase/firebase";
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import NewToDo from "./components/newToDo";



function App() {
    const { user } = useAuth()
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<any[]>([]);
    const [visiblityAddTodo, setVisibilityAddTodo] = useState(false);

    useEffect(() => {
        fetchData()
        }, []);

    const fetchData = async() => {
        try {
            const querySnapshot = await getDocs(query(collection(db, user.uid), orderBy("dateAdded", "desc")));

            // @ts-ignore
            if(querySnapshot.docs) {
                // @ts-ignore
                setData(querySnapshot.docs);
                setLoading(false);
            }

        } catch(e) {
            console.error(e);
        }}


  return (
    <div className="container py-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">

                <div className="border-b border-gray-200 mb-4 pb-5 flex items-center justify-between">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">To-Dos </h3>

                    <div className="mt-3 sm:mt-0 sm:ml-4">
                        <button
                            type="button"
                            className="inline-flex items-center rounded-full border border-transparent bg-indigo-600 px-2 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            <PlusCircleIcon className="h-6 w-6" aria-hidden="true" onClick={() => setVisibilityAddTodo(!visiblityAddTodo)}/>
                        </button>

                    </div>
                </div>



            {loading ?
                <svg className="animate-spin h-8 w-8 text-red-500"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                            strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>

                :

                <div className="">
                    <ul className="divide-y divide-gray-200 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {visiblityAddTodo ? <NewToDo fetchData={fetchData} setVisibilityAddTodo={setVisibilityAddTodo}/> : null}

                        {
                            data.map((todo, key) =>
                                <Todo fetchData={fetchData} key={key} props={todo}/>
                        )}


                    </ul>
                </div>
            }

        </div>

    </div>
  );
}

export default App;
