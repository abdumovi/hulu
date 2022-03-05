import FlipMove from "react-flip-move"
import RenderCard from "./RenderCard";



const Results = ({results}) => {

  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3
     3xl:flex flex-wrap justify-center
    ">
        {results.map((item)=> (
          <RenderCard key={item.id} result={item}/>
        ))}
    </FlipMove>
  );
};

export default Results;