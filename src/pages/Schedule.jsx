import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Board from '../components/Board'

const Schedule = () => {
    const [schedules, setSchedules] = useState([])
    const days = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu', 'random']

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/schedule').then(r => r.json())
            .then((response) => {
                setSchedules(response.data)
            })
    }, [])

    return (
        <>
            <Container>
                <h1 className='text-2xl sm:text-4xl font-semibold text-center py-12'>Schedule Updated</h1>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 py-12'>
                    {days.map((day, index) => (
                        <Board
                            day={day}
                            schedules={schedules}
                            key={index}
                        />
                    ))}
                </div>
            </Container>
        </>
    )
}

export default Schedule