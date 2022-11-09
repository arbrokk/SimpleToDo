import { CalendarIcon, ArrowPathRoundedSquareIcon, XCircleIcon } from '@heroicons/react/20/solid'
import { useAuth } from '../context/AuthContext'
import { doc, deleteDoc } from "firebase/firestore";
import {db} from "../firebase/firebase";

export default function Todo({fetchData, props}:any) {

    const {user} = useAuth();

    // @ts-ignore
    const deleteTodo = async() => {
    try {
        await deleteDoc(doc(db, user.uid, props.id));
        fetchData();
    } catch(e) {
        console.error(e);
    }};


    return (
        <li key={props.key} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow-md border">
            <div className="flex w-full items-center justify-between space-x-6 px-4 pb-4 pt-2">
                <div className="flex-1  space-y-2">
                    <div className="flex items-center space-x-3 justify-between" >
                        <h3 className="truncate text-sm font-medium text-gray-900 font-semibold">{props.data().title}</h3>
                        <div className=" flex flex-shrink-0 items-center">
                                <XCircleIcon onClick={deleteTodo} className="ml-1.5 h-6 w-6 flex-shrink-0 text-gray-400 hover:text-red-400" aria-hidden="true" />
                        </div>

                    </div>

                    <p className="truncate text-sm text-gray-500">{props.data().desc}</p>
                    <div className="block sm:flex items-center text-sm text-gray-500">
                        <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                        <p>
                            Created on <time>{new Date(props.data().dateAdded.seconds * 1000).toLocaleDateString("fr-FR")}</time>
                        </p>

                        {props.finalDate ?
                            <>
                                <ArrowPathRoundedSquareIcon className="mt-2 sm:mt-0 sm:ml-3 mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                <p>
                                    TBD by <time>{new Date(props.data().finalDate.seconds * 1000).toLocaleDateString("fr-FR")}</time>
                                </p>
                            </>
                            : null}
                    </div>
                </div>
            </div>
        </li>
    )
}