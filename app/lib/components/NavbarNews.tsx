import { IoMdInformationCircleOutline } from "react-icons/io";

export default function NavbarNews() {
    return (
        <>
            <div className="navbar-news">
                <IoMdInformationCircleOutline className="navbar-news-icon"/>
                <h1 className="navbar-news-message"> Welcome to MiKontrol! Please enjoy your stay!</h1>
            </div>
        </>
    )
}