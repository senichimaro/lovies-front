import React, { useState } from "react";
import { Link } from 'react-router-dom'
// import { paginationCalling } from '../services/service'

const PaginationComp = ({ isPage, isTotalPages, handlePages }) => {
    const [isPagesWide, setIsPagesWide] = useState(5)
    const [isMinVal, setIsMinVal] = useState(-1)
    const [isMaxVal, setIsMaxVal] = useState(5)

    // Handle Results
    const _handlePages = (event) => {
        event.preventDefault()
        let pageReq = parseInt(event.target.innerText);
        handlePages( pageReq )
    }

    const _prevPagination = () => {
        if ( ! ( isMinVal <= -1 ) ){
            setIsMinVal( isMinVal - isPagesWide )
            setIsMaxVal( isMaxVal - isPagesWide )
        }
    }
    
    const _nextPagination = () => {
        if ( ! (isMaxVal >= isTotalPages) ){
            setIsMinVal( isMinVal + isPagesWide )
            setIsMaxVal( isMaxVal + isPagesWide )
        }
    }
    
    const _handleFirst = () => {
        if ( ! ( isMinVal <= -1 ) ){
            setIsMinVal( -1 )
            setIsMaxVal( isPagesWide )
            handlePages( 1 )
        }
    }
    
    const _handleLast = () => {
        if ( ! (isMaxVal >= isTotalPages) ){
            setIsMinVal( isMinVal + ( isTotalPages - isPagesWide ) )
            setIsMaxVal( isTotalPages )
            handlePages( isTotalPages )
        }
    }

  return (
      <div className="container d-flex justify-content-center mt-4">
        <nav aria-label="Page navigation example">
        <ul className="pagination">

            <li className="page-item">
                <Link onClick={_prevPagination} className="page-link" to="#">
                    <span aria-hidden="true">&laquo;</span>
                </Link>
            </li>

            {
                isMinVal > -1
                ? (
                    <>
                        <li className={isPage === 1 ? "page-item active" : "page-item"}>
                            <Link onClick={_handleFirst} className="page-link" to="#">{1}</Link>
                        </li>
                        <li className="page-item">
                            <span className="page-link">...</span>
                        </li>
                    </>
                )
                : ''
            }

            {
                isPage && isTotalPages
                ? (
                    Array.from(Array(isTotalPages).keys()).map( item => {
                        return (
                            item > isMinVal && item < isMaxVal
                            ? (
                                <li className={isPage === (item + 1) ? "page-item active" : "page-item"} key={item}>
                                    <Link onClick={_handlePages} className="page-link" to="#">{item + 1}</Link>
                                </li>
                            )
                            : ''
                        )
                    })
                )
                : ''
            }

            {
                isTotalPages > isMaxVal
                ? (
                    <>
                        <li className="page-item">
                            <span className="page-link">...</span>
                        </li>
                        <li className={isPage === isTotalPages ? "page-item active" : "page-item"}>
                            <Link onClick={_handleLast} className="page-link" to="#">{isTotalPages}</Link>
                        </li>
                    </>
                )
                : ''
            }

            <li className="page-item">
                <Link onClick={_nextPagination} className="page-link" to="#">
                    <span aria-hidden="true">&raquo;</span>
                </Link>
            </li>
        </ul>
        </nav>
      </div>
  );
};

export default PaginationComp