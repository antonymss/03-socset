import React from 'react';
import styles from "./Paginator.module.css";

type PaginatorType = {
    currentPage: number
    pageSize: number
    totalUsersCount: number
    onPageChanged: any

}

export let Paginator = (props: PaginatorType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return    <div>
        {pages.map(p => {
            return <span className={props.currentPage === p ? styles.selectedPage : ''}
                         onClick={() => {
                             debugger
                             props.onPageChanged(p)
                         }}>{p}</span>
        })}

    </div>
}