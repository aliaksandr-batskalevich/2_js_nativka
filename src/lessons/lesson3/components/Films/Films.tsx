import React, {memo} from 'react';
import s from './Films.module.css'
import {Film} from "./Film/Film";
import {FilmsType} from "../../Lesson3";

type FilmsPropsType = {
    filmsData: null | FilmsType
    totalResults: null | string
    searchFilm: (page?: string) => void
}

export const Films: React.FC<FilmsPropsType> = memo(({filmsData, totalResults, searchFilm}) => {
    const onClickPaginationHandler = (page: string) => {
        searchFilm(page);
    }
    let pageNumArr;
    if (totalResults) {
        let totalPages = Math.ceil(+totalResults / 10);
        pageNumArr = [...Array(totalPages)].map((el, i) => <span onClick={() => onClickPaginationHandler(String(i + 1))} key={i}>{String(i + 1)}</span>)
    };

    const filmsToRender = filmsData ? filmsData.map(f => <Film filmData={f} key={f.imdbID}/>) : null
    return (
        <div className={s.filmsWrapper}>
            <div className={s.paginationWrapper}>
                {pageNumArr && pageNumArr}
            </div>
            {filmsToRender}
        </div>
    );
});
