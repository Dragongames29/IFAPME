import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

function TracksSubmit() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [track, setTracks] = useState({})

    useEffect(() => {
        try {
            const fetchTracks = async () => {
                const response = await axios.get('http://localhost:8000/api/tracks')
                const data = response.data.data
                setTracks(data)
            }
            fetchTracks()
        } catch (error) {
            console.error(error)
        }
    }, [])

    useEffect(() => {
        if (id) {
            try {
                const fetchTracks = async () => {
                    const response = await axios.get(`http://localhost:8000/api/tracks/${id}`)
                    const data = response.data.data
                    console.log(data)
                    setTracks(data)
                }
                fetchTracks()
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
                const response = await axios.put(`http://localhost:8000/api/tracks/${id}`, track)
                console.log(response)
                navigate('/tracks')
            } catch (error) {
                console.error(error)
            }
        } else {
            try {
                const response = await axios.post('http://localhost:8000/api/tracks', track)
                console.log(response)
                navigate('/tracks')
            } catch (error) {
                console.error(error)
            }
        }
    }
    return (
        <>
            <form className="flex flex-col space-y-5" onSubmit={onSubmit}>
                <div className="flex flex-col">
                    <label htmlFor="title" className="text-sm font-semibold">Titre</label>
                    <input type="text" id="title" name="title" value={album?.title} className="border border-gray-200 rounded px-4 py-2" onChange={(e) => setAlbum({ ...album, title: e.target.value })} />
                </div>
                <div className="flex flex-col">
                    <input type="submit" value="Enregistrer" className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600" />
                </div>
            </form>

        </>
    )
}

export default TracksSubmit