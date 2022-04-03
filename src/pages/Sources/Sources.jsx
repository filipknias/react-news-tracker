import React, { useState, useEffect } from 'react';
import "./Sources.css";
import { fetchSources } from '../../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import Pagination from '../../components/Pagination/Pagination';
import LoadingCard from '../../components/Card/LoadingCard';
import ErrorCard from '../../components/Card/ErrorCard';

const Sources = () => {
  const [sources, setSources] = useState([]);
  const [displayedSources, setDisplayedSources] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const sourcesPerPage = 5;

  const getSources = async () => {
    setError(null);
    setLoading(true);
    try {
      const { sources } =  await fetchSources();
      setSources(sources);
    } catch (err) {
      setError(err.message);
    } 
    setLoading(false);                                 
  };  

  useEffect(getSources, []);

  useEffect(() => {
    // Change displayed sources
    const startIndex = sourcesPerPage * currentPage;
    const newSources = sources.slice(startIndex, startIndex + sourcesPerPage);
    setDisplayedSources(newSources);
  }, [sources, currentPage]);

  useEffect(() => {
    const totalPages = Math.floor(sources.length / sourcesPerPage);
    setTotalPages(totalPages);
  }, [sources]);

  const searchSources = (e) => {
    // Find sources
    const newSources = sources.filter((source) => {
      return source.name.includes(e.target.value);
    });
    // Set displayed sources state
    const startIndex = sourcesPerPage * currentPage;
    setDisplayedSources(newSources.slice(startIndex, startIndex + sourcesPerPage));
    // Update pagination state
    setCurrentPage(1);
    const totalPages = Math.floor(newSources.length / sourcesPerPage);
    setTotalPages(totalPages);
  };

  return (
    <>
      {loading ? (
        <LoadingCard 
          loadingText="Loading sources..."
          loadingDescription="Sources are loading. Please wait"
        />
      ) : (
        <>
          {error ? <ErrorCard message={error} /> : (
            <div className="sources-container">
              <div className="search-container">
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                <input 
                  type="text" 
                  className="search-input" 
                  placeholder="Search sources..." 
                  onChange={searchSources}
                />
              </div>
              <ul className="source-list">
                {displayedSources.length > 0 ? (
                  <>
                    {displayedSources.map((source) => (
                      <li className="source-list-item" key={source.id}>
                        <div className="source-item-left">
                          <img 
                            src={`https://countryflagsapi.com/svg/${source.country}`} 
                            alt={source.country}
                            className="source-flag" 
                          />
                          <a href={source.url} className="source-link" target="_blank">{source.name}</a>
                        </div>
                        <div className="source-item-right">
                          <a href={source.url} target="_blank" className="source-item-link">
                            Visit source
                            <FontAwesomeIcon icon={faChevronRight} />
                          </a>
                          <Link to={`/?sources=${source.id}`} className="source-item-link">
                            Source news
                            <FontAwesomeIcon icon={faChevronRight} />
                          </Link>
                        </div>
                      </li>
                    ))}
                    <Pagination 
                      currentPage={currentPage} 
                      pagesCount={totalPages}
                      onChange={(page) => setCurrentPage(page)} 
                    /> 
                  </>
                ) : (
                  <p className="empty-sources-text">No sources found</p>
                )}
              </ul>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default Sources;