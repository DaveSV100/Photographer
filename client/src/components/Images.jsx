import './Images.scss'
import hotel from '../assets/hotel.jpg'
import canoe from '../assets/canoe.jpg'
import drone from '../assets/drone.jpg'
import wedding from '../assets/wedding.jpg'

const Images = () => {
    return (
        <div className='services'>
            <h3>Servicios</h3>
            <div className="imgs">
                <div>
                    <h4>Negocios</h4>
                    <p></p>
                    <img src={hotel} alt="Hey dude" />
                </div>
                <div>
                    <h4>Turismo</h4>
                    <p></p>
                    <img src={canoe} alt="Hey dude" />
                </div>
                <div>
                    <h4>Drone</h4>
                    <p></p>
                    <img src={drone} alt="Hey dude" />
                </div>
                <div>
                    <h4>Bodas</h4>
                    <p></p>
                    <img src={wedding} alt="Hey dude" />
                </div>
            </div>
        </div>
    )
}
export default Images;
