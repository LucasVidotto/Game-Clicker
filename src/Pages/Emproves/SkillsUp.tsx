import { Link } from "react-router-dom";
import { useUpStore } from "../../Store/StoreUps";
import { BoxUp,CardCenter } from "../../Styles/SkillsUpStyled";


export default function SkillsUp(){
  const incrementeUps = useUpStore((state) => state.incrementFirstUps);
  const incrementSecond = useUpStore((state) => state.incrementSecondUps);
  const incrementThird = useUpStore((state) => state.incrementThirdUps);

    const TotalDivs = 9;
    return (
        <BoxUp>
          <CardCenter>
            {Array.from({ length: TotalDivs }).map((_, index) => (
              <div key={index}>
                {index === 8 ? (
                  <Link to="/">Gold System</Link>
                ) : index === 1 ? (
                  <button onClick={incrementSecond}>Improve Gold {index}</button>
                ) : index === 2 ? (
                  <button onClick={incrementThird}>Improve Gold {index}</button>
                ) : (
                  <button onClick={incrementeUps}>Improve Gold {index}</button>
                )}
              </div>
            ))}
          </CardCenter>
        </BoxUp>
      );
    }