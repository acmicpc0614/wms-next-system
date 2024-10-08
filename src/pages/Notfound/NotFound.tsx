// NotFound.js
// import { Link } from 'react-router-dom';
import './NotFound.css'; // Optional: for styling

const NotFound = () => {
  return (
    <div className="flex flex-col gap-16 items-center justify-center h-screen bg-black">
      <div className="text-[100px] text-danger font-bold">404</div>
      <div className="text-[20px] text-white font-bold">Page Not Found</div>
    </div>
  );
};

export default NotFound;
