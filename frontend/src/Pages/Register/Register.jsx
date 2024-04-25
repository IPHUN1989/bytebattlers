import { useState } from "react";

const Register = ({ onSave, onCancel }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entries = [...formData.entries()];

    const isAnyFieldEmpty = entries.some(([, v]) => !v);

    if (isAnyFieldEmpty) {
      alert("Please fill in all the fields");
      return;
    }

    const user = entries.reduce((acc, entry) => {
      const [k, v] = entry;
      acc[k] = v;
      return acc;
    }, {});
    user.reviews = [];
    user.favoriteBoardGamePublicIDS = [];
    user.ratings = [];
    console.log(user);
    onSave(user);
  };
  return (
    <section>
      <div className="form-box">
        <div className="form-value">
          <form action="" onSubmit={onSubmit}>
            <h2>Register</h2>

            <div className="input-box">
              <ion-icon name="user_name-outline"></ion-icon>
              <label htmlFor="name"></label>
              <input placeholder="Username" name="name" id="name" />
            </div>

            <div className="input-box">
              <ion-icon name="email-outline"></ion-icon>
              <label htmlFor="email"></label>
              <input placeholder="E-mail" name="email" id="email" />
            </div>

            <div className="input-box">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <label htmlFor="password"></label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                id="password"
                onClick={() => setShowHint(false)}
                required
              />
            </div>
            <label hidden={showHint ? true : false}>
              8 chars, min 1 capital and 1 number{" "}
            </label>
            <div>
              <input
                type="checkbox"
                onChange={() => setShowPassword(!showPassword)}
              />
              <label>Show Password</label>
            </div>

            <button type="submit">Register</button>
            <button type="button" onClick={onCancel}>
              Cancel
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
