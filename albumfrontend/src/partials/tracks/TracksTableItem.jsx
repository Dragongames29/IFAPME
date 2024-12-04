import React from 'react'
import { Link } from 'react-router-dom'

function TracksTableItem({ album }) {
    return (
        <tr key={track.id} className="border-b border-gray-200 hover:bg-gray-100">
            <td className="px-4 py-2">{track?.id}</td>
            <td className="px-4 py-2">{track?.title}</td>
            <td className="px-4 py-2">{track?.album?.name}</td>
            <td className="px-4 py-2">{track?.genre?.name}</td>
            <td className="px-4 py-2 flex space-x-2">
                <Link to={`/tracks/edit/${track.id}`} className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Editer</Link>
                <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Supprimer</button>
            </td>
        </tr>
    )
}

export default TracksTableItem