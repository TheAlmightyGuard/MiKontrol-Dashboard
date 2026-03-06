import { FaHardHat } from "react-icons/fa";

export default function Construction() {
    return (
        <>
            <div className="background">
                <main className="restricted">
                    <div className="construction-icon">
                        <FaHardHat/>
                    </div>
                    <h1 className="construction-header">OOPS! We are currently under construction!</h1>
                    <p className="construction-text">We will be right back after some updates!</p>
                </main>
            </div>
        </>
    )
}