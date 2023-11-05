function Search({ handleSearch, searchTerm }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    
                </div>
                <form className="d-flex col-6">
                    <div className="input-group" id="search">
                        <input
                            type="text"
                            className="form-control search-input"
                            placeholder="Buscar..."
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>
                </form>
                <div className="col-3">

                </div>
            </div>
        </div>
    );
}

export default Search;


