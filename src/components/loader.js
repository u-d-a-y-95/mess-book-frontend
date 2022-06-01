import spinner from "../assets/spinner.svg"
const Loader = () => {
  return (
    <div className="fixed left-0 top-0 bottom-0 right-0 flex justify-center items-center bg-blue-200 opacity-70 z-50">
      <img src={spinner} alt="loading" />
    </div>
  );
};


export default Loader