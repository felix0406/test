import styles from './index.moudule.css';
const Car = ({ color = "blue" }) =>(
<span className="App" style={{color}}>
    Car {color}
</span>
);

export default Car;