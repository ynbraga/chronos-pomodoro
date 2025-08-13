import { TimerIcon } from "lucide-react";
import { Heading } from "./components/Heading";

import "./styles/global.css";
import "./styles/theme.css";

export function App() {
  return (
    <>
      <Heading>
        Olá Mundo 1
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
        laborum unde magni cupiditate saepe iusto eveniet, atque praesentium
        facilis autem, rerum molestiae, quibusdam architecto! Placeat soluta
        totam nihil error neque!
      </p>
    </>
  );
}
