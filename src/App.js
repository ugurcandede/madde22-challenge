import React, { useState } from 'react'
import Button from './components/Button'
import Search from './components/Search'

const App = () => {

  const [search, setSearch] = useState("")
  const [result, setResult] = useState([])

  const handleSearch = async () => {
    if (search.length <= 2) {
      alert("Movie name must be long 3 letter")
    } else {
      await fetch(`https://www.omdbapi.com/?s=${search}&apikey=${process.env.REACT_APP_OMDB_API}&`)
        .then(response => response.json())
        .then(result => setResult(result))
        .catch(err => console.warn(err))
    }
  }

  const clearResult = () => {
    setSearch("")
    setResult([])
  }

  return (
    <div className="wrapper flex pt-8 md:pt-0">

      <div className="w-[512px] max-w-2xl mx-auto md:m-auto px-4">

        <h1 className="text-primaryText font-medium text-3xl">OMDb API</h1>
        <p className="text-primaryText font-normal text-base py-2">The Open Movie Database 🍿</p>

        <div className="rounded-lg p-4 border">
          <p className="text-primaryText font-semibold text-base">Movie title</p>
          <Search onChange={setSearch} value={search} />
          <div className="flex h-10 mx-2 justify-end gap-x-2">
            <Button text="clear" onClick={clearResult} />
            <Button active text="search" onClick={handleSearch} />
          </div>
        </div>

        {
          result.Response && search &&
          <div className="rounded-lg p-4 mt-4 border">
            <p className="text-primaryText font-semibold text-base">Results for {search}</p>
            <p className="py-2">click on a movie title to learn more about it</p>
            {
              result.Response === "False" && <p className="py-2 text-red-600">{result.Error}</p>
            }
            <ul>
              {
                result.Search?.map(movie => {
                  return (
                    <a key={movie.imdbID} className="hover:text-primary" href={`https://www.imdb.com/title/${movie.imdbID}/`} target="_blank" rel="noreferrer">
                      <li className="text-base font-normal py-2"> {movie.Title}</li>
                    </a>
                  )
                })
              }
            </ul>
          </div>
        }

      </div>

    </div>
  )
}

export default App
