import { Link, useNavigate, useSearchParams } from "react-router-dom";

function Search({ handleSearch }) { 
    //console.log(handleSearch);
    const navigate = useNavigate();
    const [params, setParams] = useSearchParams();
    return (
        <form className="d-flex col-4" role="search" onSubmit={(event) => event.preventDefault()}>
            <input className="form-control me-2 search-input"
                type="search"
                placeholder="Buscar Canchas..."
                aria-label="Search"
                onChange={handleSearch}
                onKeyUpCapture={(event) =>  {
                    if (event.key === 'Enter') { 
                        setParams({ q: event.target.value });
                        navigate(`/canchas/?q=${params.get('q')}`);
                    }
                }}
            />
        </form>
    );
}

export default Search;