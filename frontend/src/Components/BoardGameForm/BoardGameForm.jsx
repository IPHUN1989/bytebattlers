import { useState, useEffect } from "react";
import PropTypes from "prop-types";


const BoardGameForm = ({ onSave, onCancel }) => {
  const [publishers, setPublishers] = useState([]);
  const [categories, setCategories] = useState([]);

  const publishersFetch = async () => {
    try {
      const userToken = localStorage.getItem("usertoken");
      const headers = userToken
        ? {
            Authorization: `Bearer ${userToken}`,
            "Content-Type": "application/json",
          }
        : { "Content-Type": "application/json" };

      const response = await fetch("/api/publishers", {
        method: "GET",
        headers: headers,
      });

      if (!response.ok) {
        throw new Error(`Error fetching publishers: ${response.statusText}`);
      }

      const data = await response.json();
      setPublishers(data);
    } catch (error) {
      console.error("Error fetching publishers:", error);
    }
  };


  const categoriesFetch = async () => {
    try {
      const userToken = localStorage.getItem("usertoken");
      const headers = userToken
        ? {
            Authorization: `Bearer ${userToken}`,
            "Content-Type": "application/json",
          }
        : { "Content-Type": "application/json" };

      const response = await fetch("/api/categories", {
        method: "GET",
        headers: headers,
      });

      if (!response.ok) {
        throw new Error(`Error fetching categories: ${response.statusText}`);
      }

      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };




  useEffect(() => {
    publishersFetch();
    categoriesFetch();
  }, []);



  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entries = [...formData.entries()];


    const selectedCategories = formData.getAll("categories")
      .map((categoryID) => {
        const category = categories.find((c) => c.publicID === categoryID);
        if (category) {
          return {
            publicID: category.publicID,
            name: category.name,
            description: category.description,
          };
        }
        return null;
      })
      .filter(category => !!category);

    const boardGame = {
      ...Object.fromEntries(entries),
      categories: selectedCategories.map(category => ({
        ...category,
      }))
    };

    boardGame.reviews = [];
    boardGame.appUserPublicIDS = [];
    boardGame.rating_count = 0;
    boardGame.ratings = [] ;

    onSave(boardGame);
  };



  return (
    <div className="BoardForm">
      <form className="BoardGameForm" onSubmit={onSubmit}>

        <br></br>
        <div className="control">
          <label htmlFor="gameName">Name: </label>
          <input
            name="gameName"
            id="gameName"
            minLength={2}
            maxLength={255}
            required
          />
        </div>
        <div className="control">
          <label htmlFor="minPlayer">Min Player: </label>
          <input
            type="number"
            name="minPlayer"
            id="minPlayer"
            min={1}
            max={20}
            required
          />
        </div>
        <div className="control">
          <label htmlFor="maxPlayer">Max Player: </label>
          <input
            type="number"
            name="maxPlayer"
            id="maxPlayer"
            min={1}
            max={50}
            required
          />
        </div>
        <div className="control">
          <label htmlFor="playTimeInMinutes">Playtime (minutes): </label>
          <input
            type="number"
            name="playTimeInMinutes"
            id="playTimeInMinutes"
            min={5}
            max={1000}
            required
          />
        </div>

        <div className="control">
          <label htmlFor="recommendedAge">Rec. age: </label>
          <input
            type="number"
            name="recommendedAge"
            id="recommendedAge"
            min={3}
            max={99}
            required
          />
        </div>
        <div className="control">
          <label htmlFor="description">Description: </label>
          <input
            name="description"
            id="description"
            minLength={10}
            maxLength={255}
            required
          />
        </div>
        <div className="control">
          <label htmlFor="publisherPublicID">Publisher: </label>
          <select key="publisherPublicID" name="publisherPublicID" id="publisherPublicID" required>
            {publishers.map((publisher) => {
              return <option value={publisher.publicID} key={publisher.publicID}>{publisher.publisherName}</option>
            })}
          </select>
        </div>

        <div className="control">
          <label htmlFor="categories">Categories: </label>
          <select key="categories" name="categories" id="categories" multiple required>
            {categories.map((category) => {
              return <option value={[category.publicID]} key={category.publicID}>{category.name}</option>
            })}
          </select>
        </div>

        <br></br>


        <div className="buttons">
          <button type="submit">
            Create BoardGame
          </button>
          <br></br>
          <br></br>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
        <br></br>
      </form>
    </div>
  );
};

BoardGameForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default BoardGameForm;
