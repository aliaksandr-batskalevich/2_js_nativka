import React from 'react';
import s from './Film.module.css'
import {FilmType} from "../../../Lesson3";

type FilmPropsType = {
    filmData: FilmType
}

export const Film: React.FC<FilmPropsType> = ({filmData}) => {
    const {Poster, Title, Year} = filmData
    return (
        <div className={s.filmWrapper}>
            <div className={s.posterWrapper}>
                <img src={Poster} alt="Poster"/>
            </div>
            <div className={s.descriptions}>
                <h4>{Title}</h4>
                <p>{Year}</p>
            </div>
        </div>
    );
};
