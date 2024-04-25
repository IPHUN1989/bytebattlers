import Register from "./Register";
import { useNavigate } from "react-router-dom";

const UserCreator = () => {

    const navigate = useNavigate();


    const createUser = async (user) => {
        try {
        const res = await fetch("/api/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        if (res.ok) {
            alert("Thank you for registering to our website!")
            navigate("/");
          }  
          else if (res.status === 409) {
            res.text().then(() => {
              alert("User already exists!")
            });
          }
          else {
            throw new Error(`Error creating game: ${res.statusText}`);
          }
        } catch (error) {
          console.error("Error creating game: ", error);
          throw error;
        }
    }



   
    return (
        <Register
            onCancel={() => navigate("/")}
            onSave={createUser}
        />
    );
}

export default UserCreator;