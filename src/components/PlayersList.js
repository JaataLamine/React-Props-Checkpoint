import { Player } from "./Player";
import { players } from "../players"

/**
 * description: Display all players by mapping through all the elements in the array of players
 * @returns PlayersList component
 */
export function PlayersList() {
  return (
    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4'>
      {players.map((player, index) =>
        <div className="col">
          <Player key={index}
            image={player.Image}
            name={player.name}
            age={player.age}
            team={player.team}
            nationality={player.nationality}
            jerseyNumber={player.jerseyNumber}
          />
        </div>
      )}
    </div>
  )
}