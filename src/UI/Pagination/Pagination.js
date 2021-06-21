import React from 'react'
import './Pagination.css'

const Pagination = ({ totaleItems, currentPage, itemPerPage, changedPage }) => {
  const nbrPage = +Math.ceil(totaleItems / itemPerPage)
  const listPage = []
  for (let i = 1; i <= nbrPage; i++) {
    listPage.push(i)
  }

  return (
    <>
      <div>
        <ul className="pagination  justify-content-center">
          <li className={'page-item ' + (currentPage === 1 && ' disabled')}>
            <button
              className="page-link"
              onClick={() => changedPage(currentPage - 1)}
            >
              &laquo;
            </button>
          </li>

          {listPage.map((page, index) => {
            return (
              <li
                key={index}
                className={'page-item ' + (page === currentPage && ' active')}
              >
                <button className="page-link" onClick={() => changedPage(page)}>
                  {page}
                </button>
              </li>
            )
          })}
          <li
            className={'page-item ' + (currentPage === nbrPage && ' disabled')}
          >
            <button
              className="page-link"
              onClick={() => changedPage(currentPage + 1)}
            >
              &raquo;
            </button>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Pagination
