import React, { useState } from 'react';
import { Form, Button} from 'react-bootstrap';
import SearchBar from '../../components/SearchBar';


const ResourceSearch: React.FC = () => {
  // const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    subject: '',
    gradeLevel: [] as string[],
    type: [] as string[],
    postDate: '',
  });

  const [showFilters, setShowFilters] = useState(false); // New state for filter options visibility

  const handleSearch = () => {
    // Your search logic goes here
    console.log('Searching...');
  };

  const handleFilterChange = (filter: string, value: string | string[]) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filter]: value }));
  };

  const handleToggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="pt-3 resource_search">
      <Form>
        <div className="mt-3 mb-3 d-flex justify-content-end  filter-nav">
          <div>
            <SearchBar placeholder='Search CALA resources by subject, grade level, type, tags...'/>
            {/* <Form.Control
              type="text"
              placeholder="Search CALA resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            /> */}
          </div>
          <div>
            <Button variant="primary" className='mx-3' onClick={handleSearch}>Search</Button>
            <Button variant="secondary" onClick={handleToggleFilters}>Filters</Button>
          </div>
          <div className="d-flex justify-content-end filters border-radius-round box-shadow">
          <div className={`mx-3 ${showFilters ? 'search-visible' : 'search-hidden'}`}> 
            <Form.Label className='d-flex'>Subject</Form.Label>
            <Form.Control
              as="select"
              value={filters.subject}
              onChange={(e) => handleFilterChange('subject', e.target.value)}
            >
              <option value="">All</option>
              <option value="math">Mathematics</option>
              <option value="science">Science</option>
              {/* Add more subject options */}
            </Form.Control>
          </div>
          <div className={`mx-3 ${showFilters ? 'search-visible' : 'search-hidden'}`}> 
            <Form.Label>Grade Level</Form.Label>
            <div>
              <Form.Check
                type="checkbox"
                label="Grade 1"
                value="1"
                checked={filters.gradeLevel.includes("1")}
                onChange={(e) =>
                  handleFilterChange(
                    "gradeLevel",
                    e.target.checked
                      ? [...filters.gradeLevel, e.target.value]
                      : filters.gradeLevel.filter((level) => level !== e.target.value)
                  )
                }
              />
              <Form.Check
                type="checkbox"
                label="Grade 2"
                value="2"
                checked={filters.gradeLevel.includes("2")}
                onChange={(e) =>
                  handleFilterChange(
                    "gradeLevel",
                    e.target.checked
                      ? [...filters.gradeLevel, e.target.value]
                      : filters.gradeLevel.filter((level) => level !== e.target.value)
                  )
                }
              />
              {/* Add more grade level options */}
            </div>
          </div>
          <div className={`mx-3 ${showFilters ? 'search-visible' : 'search-hidden'}`}> 
            <Form.Label>Data Type</Form.Label>
            <div>
              <Form.Check
                type="checkbox"
                label="All"
                value="all"
                checked={filters.type.includes("all")}
                onChange={(e) =>
                  handleFilterChange(
                    "type",
                    e.target.checked
                      ? ["all", "video", "pdf", "picture", "blog"]
                      : []
                  )
                }
              />
              <Form.Check
                type="checkbox"
                label="Video"
                value="video"
                checked={filters.type.includes("video")}
                onChange={(e) =>
                  handleFilterChange(
                    "type",
                    e.target.checked
                      ? [...filters.type, e.target.value]
                      : filters.type.filter((type) => type !== e.target.value)
                  )
                }
              />
              <Form.Check
                type="checkbox"
                label="PDF"
                value="pdf"
                checked={filters.type.includes("pdf")}
                onChange={(e) =>
                  handleFilterChange(
                    "type",
                    e.target.checked
                      ? [...filters.type, e.target.value]
                      : filters.type.filter((type) => type !== e.target.value)
                  )
                }
              />
              <Form.Check
                type="checkbox"
                label="Picture"
                value="picture"
                checked={filters.type.includes("picture")}
                onChange={(e) =>
                  handleFilterChange(
                    "type",
                    e.target.checked
                      ? [...filters.type, e.target.value]
                      : filters.type.filter((type) => type !== e.target.value)
                  )
                }
              />
              <Form.Check
                type="checkbox"
                label="Blog"
                value="blog"
                checked={filters.type.includes("blog")}
                onChange={(e) =>
                  handleFilterChange(
                    "type",
                    e.target.checked
                      ? [...filters.type, e.target.value]
                      : filters.type.filter((type) => type !== e.target.value)
                  )
                }
              />
            </div>
          </div>
        </div>
        </div>
      </Form>
    </div>
  );
};

export default ResourceSearch;
