

type ChiProps = {
    name: string;
    name1: string;
    name2: string;
  };
  
  function Chi(props: ChiProps) {
    return (
      <div className="w-full border- h-[37.5rem] flex items-center border-black ">

        <div className="w-[33.33%] text-center bg-blue-400 rounded-md mx-3 shadow-2xl shadow-black"><h1 className="text-3xl font-semibold py-16 underline">{props.name}</h1></div>

        <div className="w-[33.33%] text-center bg-blue-500 rounded-md shadow-2xl shadow-black"><h1 className="text-3xl font-semibold py-16 underline">{props.name1}</h1></div>
        
        <div className="w-[33.33%] text-center bg-blue-600 rounded-md mx-3 shadow-2xl shadow-black  "><h1 className="text-3xl font-semibold py-16 underline">{props.name2}</h1></div>

      </div>
    );
  }
  
  export default Chi;