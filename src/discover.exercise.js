/** @jsx jsx */
/** @jsxFrag React.Fragment */
import {jsx} from '@emotion/core'
import React,{useState,useEffect} from 'react';
import './bootstrap'
import Tooltip from '@reach/tooltip'
import {FaSearch} from 'react-icons/fa'
import {Input, BookListUL, Spinner} from './components/lib'
import {BookRow} from './components/book-row'
import * as booksClient from './utils/books-client';

function DiscoverBooksScreen() {
  const [status, setstatus] = React.useState('idle');
  const [data, setdata] = React.useState();
  const [query, setquery] = useState();
  const [queried, setqueried] = React.useState(false);

  useEffect(()=>{
    if (!queried) {
      return
    }
    setstatus('loading')
    booksClient.search({query}).then(responseData => {
      setdata(responseData)
      setstatus('success')
    })
  }, [query,queried])

  const isLoading = status === "loading";
  const isSuccess = status === "success";

  function handleSearchSubmit(event) {
    event.preventDefault();
    setquery(event.target.elements.search.value);
    setqueried(true)
  }

  return (
    <div
      css={{maxWidth: 800, margin: 'auto', width: '90vw', padding: '40px 0'}}
    >
      <form onSubmit={handleSearchSubmit}>
        <Input
          placeholder="Search books..."
          id="search"
          css={{width: '100%'}}
        />
        <Tooltip label="Search Books">
          <label htmlFor="search">
            <button
              type="submit"
              css={{
                border: '0',
                position: 'relative',
                marginLeft: '-35px',
                background: 'transparent',
              }}
            >
              {isLoading ? <Spinner /> : <FaSearch aria-label="search" />}
            </button>
          </label>
        </Tooltip>
      </form>

      {isSuccess ? (
        data?.books?.length ? (
          <BookListUL css={{marginTop: 20}}>
            {data.books.map(book => (
              <li key={book.id}>
                <BookRow key={book.id} book={book} />
              </li>
            ))}
          </BookListUL>
        ) : (
          <p>No books found. Try another search.</p>
        )
      ) : null}
    </div>
  )
}

export {DiscoverBooksScreen}
