import React from "react"
import './Pages.css'
import Header from "../Components/Headers/Headers"
const HomePage= () => {
  return(
     <div className="homepage">
        <Header/>
            
            <h1 className="welcome">Welcome to Vivekanand College!</h1>
            <h3 className="Your">Your journey to excellence starts here.</h3>
            <div id="para">
                    <p>**Vivekanand College is a premier educational institution dedicated to fostering academic
                        excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 
                        1980], we have proudly served generations of students, empowering them to achieve their full
                        potential.
                    </p>
                    <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond
                        textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community
                        create a unique ecosystem where curiosity thrives and future leaders are shaped.
                    </p>
            </div>
            <h2 id="why">Why Choose Vivekanand College?</h2>
            <ul id="list">
                <li>**Legacy of Excellence:** Decades of commitment to quality education.</li>
                <li>**Experienced Faculty:** Learn from renowned experts and passionate educators.</li>
                <li>**Modern Facilities:** Well-equipped labs, expansive library, and comfortable campus.</li>
                <li>**Holistic Development:** Focus on co-curricular activities, sports, and community service.</li>
                <li>**Strong Placements:** Excellent career opportunities with leading companies.</li>
            </ul>
                <h2>Campus Life & Facilities</h2>
                <div>
                    <img src="public/images/students-studying.jpeg" height="400" width="600" alt="vck"></img> 
                    <img src="public/images/vck-campus.jpg" height="400" width="600" alt="vck"></img> 
                </div>
                <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning
                 experience and personal growth.
                </p>
                <h4>Ready to explore our courses?</h4>
                <button onclick="submit" id="explore">Exploer Courses</button>
         </div>
    )
}
export default HomePage 