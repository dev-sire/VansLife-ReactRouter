import { Link } from "react-router-dom"
import partners from "../assets/partners.jpg"
import HostHero from "../assets/host-hero.jpg"

export default function Home() {
    return (
        <>
            <div className="home-container">
                <h1>You got the travel plans, we got the travel vans.</h1>
                <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <Link to="vans">Find your van</Link>
            </div>
            <div className="host-content">
                <div className="h-content">
                    <h1>Earn on Wheels: Share Your Van, Join the Adventure</h1>
                    <p>Join our vibrant community and share your unique van with fellow travelers.</p>
                    <div className="host-cta">
                        <h2>List your Vans and start earning today!</h2>
                        <Link to="host">Become Our Host</Link>
                    </div>
                </div>
                <img src={HostHero} alt="hosthero" />
            </div>
            <div className="partner-content">
                <h1>Ride with Confidence: Partnered with Leading Van Brands</h1>
                <p>Explore with peace of mind knowing you've chosen a van trusted by experts.</p>
                <h2>Our Proud Partners</h2>
                <img src={partners} alt="partners image" />
            </div>
        </>
    )
};