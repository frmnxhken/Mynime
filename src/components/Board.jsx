import React from 'react'

const Board = (props) => {
    const { day, schedules } = props
    const days = ['minggu', 'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu']
    const today = days[new Date().getDay()]

    return (
        <div className={`${day === today ? 'bg-green-500 text-white' : 'bg-white border border-gray-300'} px-4 py-6`}>
            <div>
                <p className='text-center text-md font-semibold'>{day[0].toUpperCase() + day.slice(1)}</p>
            </div>
            <div className='mt-6'>
                <ul className='space-y-2'>
                    {schedules && schedules[day] ? (
                        schedules[day].map((schedule, index) => (
                            <li key={index} className={`text-sm border-b ${day === today ? 'border-black' : 'border-gray-300'} px-4 py-2`}>
                                {schedule}
                            </li>
                        ))
                    ) : (
                        <li className='text-sm text-center text-gray-500'>Loading...</li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Board
