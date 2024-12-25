

const Header = () => {
  return (
    <div className="lg:flex border-none bg-white w-[98%] mx-auto mt-[10px] border-black justify-between  text-[.6rem] px-2 py-1 rounded-lg shadow-xl items-center hidden ">
      <h1>My open leads</h1>
      <div className="flex gap-8 items-center ">
        <div className="flex gap-4  text">
          <div className="flex gap-2 items-center justify-center">
            <i className="bi bi-image "></i>
            <h2>Show chart</h2>
          </div>
          <div className="flex gap-2">
            <i className="bi bi-list-task"></i>
            <h2>Focused View</h2>
          </div>
          <div className="flex gap-2">
            <i className="bi bi-plus-lg"></i>
            <h2>New</h2>
          </div>
          <div className="flex gap-2">
            <i className="bi bi-arrow-clockwise"></i>
            <h2>Refresh</h2>
          </div>
          <div className="flex gap-2">
            <i className="bi bi-microsoft-teams text-blue-600"></i>
            <h2>Collaborate</h2>
          </div>
          <div className="flex gap-2">
            <i className="bi bi-trash3"></i>
            <h2>Delete</h2>
          </div>
          <div>
            <i className="bi bi-chevron-down"></i>
            <i className="bi bi-three-dots-vertical"></i>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 border-[1px]  border-gray-400 p-1">
            <i className="bi bi-pie-chart"></i>
            <h2>Smart data</h2>
          </div>
          <div className="flex gap-2 border-[1px]  border-gray-400 p-1">
            <i className="bi bi-filter"></i>
            <h2>Edit filters</h2>
          </div>
          <div className="flex gap-2 border-[1px]  border-gray-400 p-1">
            <i className="bi bi-pencil-square"></i>
            <h2>Edit columns</h2>
          </div>
          <div>
           
            <i className="bi bi-chevron-down"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
