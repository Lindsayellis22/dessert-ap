import React from 'react';

function CuisineForm(props) {
    const { handleSubmit, handleChange, searchString } = props;
        
        return (
            <form onSubmit={handleSubmit} className="form-horizontal">
            <input
              placeholder="Search"
              type="text"
              name="searchString"
              required
              onChange={handleChange}
              value={searchString}
            />
            <button type="submit">Search</button>
          </form>
        );
      }
    


export default CuisineForm;