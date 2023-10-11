// Variables for inline styling
const style = {
  fontSize: "1.1rem",
  fontWeight: 500,
  textAlign: "center",
  fontFamily: "Verdana",
};
const styleShadow = {
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
};
const styleLink = {
  textDecoration: "none",
  color: "black",
};

/**
 * description: The component display all attributes for each player defined in the players.js
 * @param {string} name
 * @param {string} team
 * @param {string} nationality
 * @param {number} jerseyNumber
 * @param {number} age
 * @param {string} image
 * @returns Player component
 */
export function Player({
  name = "Lamine Diatta",
  team = "GoMyCode",
  nationality = "Senegalese",
  jerseyNumber = "18.2.0",
  age = 34,
  image = "../images/gomycode.jpg",
}) {
  return (
    <div className="card h-100 w-auto p-1" style={styleShadow}>
      <a href="#nowhere" style={styleLink}>
        <img
          src={image}
          className="card-img-top"
          alt="soccer card"
          height={300}
        />
        <div className="card-body cardDetails">
          <p style={style}>{`Name: ${name}`}</p>
          <p style={style}>{`Team: ${team}`}</p>
          <p style={style}>{`Nationality: ${nationality}`}</p>
          <p style={style}>{`Jersey number: ${jerseyNumber}`}</p>
          <p style={style}>{`Age: ${age}`}</p>
        </div>
      </a>
    </div>
  );
}
