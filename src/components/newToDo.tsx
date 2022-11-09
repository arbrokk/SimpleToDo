import {addDoc, collection} from "firebase/firestore";
import {db} from "../firebase/firebase";
import { useAuth } from '../context/AuthContext';
import React, {useRef} from 'react';


// @ts-ignore
export default function NewToDo({fetchData,setVisibilityAddTodo}) {
    const {user} = useAuth()

    const mytitle = useRef(null);
    const mydesc = useRef(null);

    function handleSubmit(e: React.SyntheticEvent<Element, Event>) {
        e.preventDefault();

        addDoc(collection(db, user.uid), {
            // @ts-ignore
            title: mytitle.current.value,
            // @ts-ignore
            desc: mydesc.current.value,
            dateAdded: new Date(),
        });
        document.getElementsByTagName('form')[0].reset();
        setVisibilityAddTodo(false);
        fetchData();
    }


    return (
        <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow-md border ">
            <div className="flex w-full items-center justify-between space-x-6 p-6">
                <form className="w-full" onSubmit={(e: React.SyntheticEvent) => handleSubmit(e)}>
                    <div className="flex-1  space-y-2">
                        <div className="flex items-center space-x-3" >
                            <div>
                                <label htmlFor="title" className="sr-only">Title of Task</label>
                                <input ref={mytitle} type="text" name="title" id="title"
                                       className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                       placeholder="Title of Task"/>
                            </div>
                        </div>

                        <div className="text-sm text-gray-500">
                            <div>
                                <label htmlFor="desc" className="sr-only">Description of Task</label>
                                <textarea
                                    ref={mydesc}
                                    rows={4}
                                    name="desc"
                                    id="desc"
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    defaultValue={''}
                                />
                            </div>
                        </div>
                        <div className="flex-shrink-0">
                            <button
                                type="submit"
                                className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Post
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </li>
    )
}