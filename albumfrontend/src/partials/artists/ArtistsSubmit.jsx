import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

function ArtistsSubmit() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [genres, setGenres] = useState({})
    const [artists, setArtists] = useState([])

    useEffect(() => {
        try {
            const fetchArtists = async () => {
                const response = await axios.get('http://localhost:8000/api/artists')
                const data = response.data.data
                setArtists(data)
            }
            fetchArtists()
        } catch (error) {
            console.error(error)
        }
    }, [])

    useEffect(() => {
        if (id) {
            try {
                const fetchGenres = async () => {
                    const response = await axios.get(`http://localhost:8000/api/genres/${id}`)
                    const data = response.data.data
                    console.log(data)
                    setGenres(data)
                }
                fetchGenres()
            } catch (error) {
                console.error(error
                )
            }
        }
    }, [id])

    const onSubmit = async (e) => {
        e.preventDefault()
        if (id) {
            try {
                const response = await axios.put(`http://localhost:8000/api/artists/${id}`, artists)
                console.log(response)
                navigate('/artists')
            } catch (error) {
                console.error(error)
            }
        } else {
            try {
                const response = await axios.post('http://localhost:8000/api/artists', artists)
                console.log(response)
                navigate('/artists')
            } catch (error) {
                console.error(error)
            }
        }
    }
    return (
        <>
            <form className="flex flex-col space-y-5" onSubmit={onSubmit}>
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-sm font-semibold">Name</label>
                    <input type="text" id="name" name="name" value={artists?.name} className="border border-gray-200 rounded px-4 py-2" onChange={(e) => setArtists({ ...artists, name: e.target.value })} />
                </div>                
                <div className="flex flex-col">
                    <input type="submit" value="Enregistrer" className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600" />
                </div>
            </form>

        </>
    )
}

export default ArtistsSubmit