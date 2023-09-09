import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


interface SearchBarPlaceholder {
    placeholder: string;
  }
const SearchBar:React.FC<SearchBarPlaceholder> =({placeholder})=>{
    return(
        <div className="d-flex  align-items-center">
            <FontAwesomeIcon className="text-muted" icon={faSearch}/>
            <input type="text" style={{width:"30rem"}} className="search py-2 px-2 ms-1" placeholder={placeholder}/>
        </div>
    )
}

export default SearchBar