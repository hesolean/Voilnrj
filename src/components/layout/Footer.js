import React, { useState } from "react";
import logo from '../../assets/logo.jpeg'


const Footer = () => {
  const [message, setMessage] = useState("");
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
	if (inputValue) {
		alert(
      `Merci d'avoir partage ${message} avec moi. Je vous répondrai à l'adresse ${inputValue}.`
    );
	}
    
  }
  function handleInput(e) {
    setInputValue(e.target.value);
  }

  /**
   * action quand l'utilisateur clicken dehors de la zone
   */
  function handleBlur() {
    if (!inputValue.includes("@")) {
      alert(
        "Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥"
      );
    }
  }

  return (
    <div name="footer">
      <footer className="text-light p-4 border-t-black border-2 text-xl bg-gradient-to-b from-darkblue to-gray grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center items-center">
          <h3 className="mb-2 text-center">
            Partagez avec moi sur notre passion commune :{" "}
            <br/><u>brasser du vent !</u>
          </h3>
		  <img className="rounded-2xl w-32 my-auto" src={logo} alt='logo voilnrj'/>

        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center m-2"
          >
            <textarea
              className="my-2 p-2 bg-transparent border-2 rounded-md text-blue focus:outline-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Dites m'en plus sur votre passion."
            ></textarea>

            <input
              className="p-2 bg-transparent border-2 rounded-md text-blue focus:outline-none"
              placeholder="Entrez votre mail"
              onChange={handleInput}
              value={inputValue}
              onBlur={handleBlur}
            />
            <button type="submit" className="mt-8">
              Partager
            </button>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
