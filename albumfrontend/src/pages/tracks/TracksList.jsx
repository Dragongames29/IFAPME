import React from 'react'
import TracksTable from '../../partials/tracks/TracksTable'
import { Link } from 'react-router-dom'

function TracksList() {
    return (
        <>
            <div className="flex justify-between items-center mb-5">
                <h1 className="text-xl font-bold">Liste des Pistes</h1>
                <Link to="/tracks/add" className="px-4 py-2 text-lg bg-blue-500 text-white rounded">Ajouter une piste</Link>
            </div>
            <TracksTable />
        </>
    )
}

export default TracksList