import React, {useState} from 'react';
import API from './API';
import './lesson_3';
import {Films} from "./components/Films/Films";
import {Preloader} from "./components/Preloader/Preloader";
import s from './components/Films/Films.module.css'

export type FilmType = {
    Poster: string
    Title: string
    Type: string
    Year: string
    imdbID: string
}
export type FilmsType = Array<FilmType>

const Lesson3 = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [searchName, setSearchName] = useState('');
    const [searchResult, setSearchResult] = useState<null | FilmsType>(null);
    const [searchNameByType, setSearchNameByType] = useState('');
    const [searchResultByType, setSearchResultByType] = useState('');
    const [error, setError] = useState<null | string>(null);
    const [totalResults, setTotalResults] = useState<null | string>(null);


    const searchFilm = async (page?: string) => {
        try {
            setLoading(true);
            setError(null);
            let response;
            if (page) {
                response = await API.searchFilmsByTitle(searchName, page);
            } else {
                response = await API.searchFilmsByTitle(searchName);
            }
            const {data} = response;
            const {Response, Error, Search, ...restData} = data;
            setLoading(false);
            if (Response === 'True') {
                setTotalResults(restData.totalResults);
                setSearchResult(Search);
            } else {
                setError(Error);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const content = error
        ? error
        : <Films
            filmsData={searchResult}
            totalResults={totalResults}
            searchFilm={searchFilm}
        />


    const searchByType = async (e: React.MouseEvent<HTMLButtonElement>) => {
        try {
            const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
            const response = await API.searchFilmsByType(searchNameByType, type);
            const {data} = response;
            const {Response, Error, Search, ...restData} = data;
            if (Response === 'True') {
                setSearchResultByType(JSON.stringify(Search));
            }
        } catch (error) {

        }
    }

    return (
        <div className={s.wrapper}>
            <h1>Promises</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                <button onClick={() => searchFilm()}>Search</button>
                <div>
                    {loading ? <Preloader/> : content}
                </div>
            </div>

            <div>
                <h3><p>Search by type:</p></h3>
                <input
                    type="text"
                    value={searchNameByType}
                    onChange={(e) => setSearchNameByType(e.currentTarget.value)}
                />
                <button onClick={searchByType} data-t='movie'>Movie</button>
                <button onClick={searchByType} data-t='series'>Series</button>
                <div>
                    {searchResultByType}
                </div>
            </div>
        </div>
    );
}
export default Lesson3;