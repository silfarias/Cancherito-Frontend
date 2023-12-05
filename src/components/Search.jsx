import { Link } from "react-router-dom";

function Search({ handleSearch, searchTerm }) {
    return (
        <form className="d-flex col-4" role="search">
            <input className="form-control me-2 search-input"
                type="search"
                placeholder="Buscar Canchas..."
                aria-label="Search"
                value={searchTerm}
                onChange={handleSearch}
            />
        </form>
    );
}

export default Search;