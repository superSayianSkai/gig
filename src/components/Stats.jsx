const Stats = () => {
  return (
    <div className="md:w-[80%] flex rounded-md flex-col">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="text-left text-[.6rem]">1 month until Q4 ends</p>
          <div className="flex text-[.6rem] gap-2">
            <div>Target $45million</div>
            <div>68% of target achieved</div>
          </div>
        </div>
        <div className="w-[100%] flex">
          <div className="bg-green-500 w-[20%] h-[7px] rounded-l-md"></div>
          <div className="bg-blue-500 w-[10%] h-[7px]"></div>
          <div className="bg-pink-500 w-[10%] h-[7px]"></div>
          <div className="bg-orange-500 w-[5%] h-[7px]"></div>
          <div className="bg-gray-200 w-[80%] h-[7px]"></div>
        </div>
        <div className="text-left text-[.7rem] flex gap-5">
          <div className="flex items-center gap-2 text-[.6rem]">
            <div className=" bg-green-500 w-[8px] h-[8px] rounded-full"></div>
            <p>Won $118m</p>
          </div>
          <div className="flex  items-center gap-2 text-[.6rem]">
            <div className="bg-green-500 w-[8px] h-[8px] rounded-full"></div>
            <p>Won $118m</p>
          </div>
          <div className="flex items-center gap-2 text-[.6rem]">
            <div className="bg-green-500 w-[8px] h-[8px] rounded-full"></div>
            <p>Won $118m</p>
          </div>
          <div className="flex items-center gap-2 text-[.6rem]">
            <div className="bg-green-500 w-[8px] h-[8px] rounded-full"></div>
            <p>Won $118m</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
