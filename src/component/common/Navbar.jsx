import { navbar } from "../../../data/navbar_tabs";
import { Link } from "react-router-dom";
import mainLogo from "../../assets/mainlogo.png"

const Navbar = () => {
  return (
    <div className="w-full relative top-0 opacity-90 mb-2 flex justify-between items-center bg-richblack-900 px-10">
      <Link to={"/"}>

        <img src={mainLogo} alt="logo" width={250} />
      </Link>
      <ul className="flex justify-between gap-10 ">

        {
          navbar.map((data, index) => (
            <Link key={index} to={data.link}>
              <li className="text-2xl text-richblack-25 text">
                {
                  data.tabs
                }
              </li>
            </Link>

          ))
        }
      </ul>
    </div>
  )
}

export default Navbar
