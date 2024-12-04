import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ArtistsTableItem from './ArtistsTableItem'

function ArtistsTable() {
    const [artists, setArtists] = useState([])

    useEffect(() => {
        try {
            const fetchArtists = async () => {
                const response = await axios.get('http://localhost:8000/api/artists')
                const data = response.data.data
                console.log(data)
                setArtists(data)
            }
            fetchArtists()
        } catch (error) {
            console.error(error)
        }
    }, [])

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="w-1/12 px-4 py-2">ID</th>
                        <th className="w-3/12 px-4 py-2">Name</th>
                        <th className="w-3/12 px-4 py-2">Artiste</th>
                        <th className="w-3/12 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {artists.map(artist => (
                        <ArtistsTableItem key={artists.id} artists={artist} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ArtistsTable