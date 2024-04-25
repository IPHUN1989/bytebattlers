import { useNavigate } from "react-router-dom";
import BoardGameForm from "../Components/BoardGameForm";

const BoardGameCreator = () => {
  const navigate = useNavigate();

  const createGame = async (boardGame) => {
    try {
      const userToken = localStorage.getItem("usertoken");
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      };

      const res = await fetch("/api/games/create", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(boardGame),
      });

      if (res.ok) {
        alert("Thank you for sending in a new board game!")
        navigate("/games");
      }  
      else if (res.status === 409) {
        res.text().then(() => {
          alert("Game already exists!")
        });
      }
      else {
        throw new Error(`Error creating game: ${res.statusText}`);
      }
    } catch (error) {
      console.error("Error creating game: ", error);
      throw error;
    }
  };

  

  return (
    <BoardGameForm
      onCancel={() => navigate("/")}
      onSave={createGame}
    />
  );
};

export default BoardGameCreator;
