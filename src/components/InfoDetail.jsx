import React from 'react'

const InfoDetail = ({information}) => {
  const title = information?.judul && information.judul.split(/(?=[A-Z])/).join(' ')
  const studio = information?.studio && information.studio.split(/(?=[A-Z])/).join(' ')
  const release =
    information?.['tanggal-rilis'] && information['tanggal-rilis'].includes('sampai')
      ? information['tanggal-rilis'].split('sampai').join(' - ')
      : information?.['tanggal-rilis'] || 'Tidak diketahui';
  return (
    <>
        <div className='flex flex-col sm:flex-row gap-x-4 items-center sm:items-start'>
            <div className='relative'>
                <img 
                  className='aspect-[2/3] w-full object-cover max-h-[400px]'
                  src={information.poster} 
                  alt='poster'/>
                <div className='bg-yellow-400 absolute bottom-0 px-4 right-0'>
                  <p className='text-sm'>&#9734; {information.skor}</p>
                </div>
            </div>
            <div className='text-white w-full py-6 sm:py-0'>
              { information.status === 'Completed' ? (
                <span className='bg-green-500 text-xs px-1 rounded-lg'>Completed</span>
              ) : (
                <span className='bg-yellow-500 text-xs px-1 rounded-lg'>Ongoing</span>
              )}
              <h1 className='text-xl font-semibold py-4'>{title}</h1>
              <p className='text-sm text-gray-300'>{studio}</p>
              <p className='text-sm text-gray-300'>{release}</p>
              <p className='text-sm text-gray-300'>{information['total-episode']} Episode</p>
              <p className='text-sm text-gray-300'>{information.genres}</p>
              <div className='flex space-x-4'>
                <button className='border border-white px-6 py-2 text-sm mt-4 rounded-md'>Add Watchlist</button>
                {information.status == "Completed" && <button className='bg-green-500 px-6 py-2 text-sm mt-4 rounded-md'>Download Batch</button>}
              </div>
            </div>
        </div>
        <p className='text-sm text-gray-300 py-6 text-justify'>
          {information.sinopcis}
        </p>
    </>
  )
}

export default InfoDetail