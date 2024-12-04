import React from 'react'
import { Link } from 'react-router-dom'

function ArtistsTableItem({ artist }) {
    return (
        <tr key={artist.id} className="border-b border-gray-200 hover:bg-gray-100">
            <td className="px-4 py-2">{artist?.id}</td>
            <td className="px-4 py-2">{artist?.title}</td>            
            <td className="px-4 py-2 flex space-x-2">
                <Link to={`/artists/edit/${artist.id}`} className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Editer</Link>
                <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Supprimer</button>
            </td>
        </tr>
    )
}

export default ArtistsTableItem