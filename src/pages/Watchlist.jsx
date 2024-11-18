import React, { useState } from 'react'
import Container from '../components/Container'
import Todo from '../components/Todo'
import { Store } from '../utils/Store'

const Watchlist = () => {
    const store = new Store()
    const [watchlist, setWatchlist] = useState(store.watchlist)

    const handleDelete = id => {
        const watchlistDeleted = [...watchlist]
        watchlistDeleted.splice(id, 1)
        setWatchlist(watchlistDeleted)
        store.setStorage(watchlistDeleted)
    }

    const handleReset = () => {
        const confirmed = confirm('Are you sure?')
        if (confirmed) {
            setWatchlist([])
            store.setStorage([])
        }
    }

    return (
        <>
            <Container>
                <div className='flex items-center justify-between py-6'>
                    <button onClick={handleReset} className='text-sm text-gray-500'>Clear All</button>
                    <h1 className='text-xl font-semibold text-right'>Watchlist</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 py-12 gap-x-6 gap-y-8">
                    {watchlist.map((wl, index) => (
                        <Todo
                            key={index}
                            index={index}
                            name={wl.judul}
                            onDelete={(id) => handleDelete(id)}
                            id={wl.id} />
                    ))}
                </div>
            </Container>
        </>
    )
}

export default Watchlist