import React, { useEffect, useState } from "react";
import "./Carousel.scss";
import image1 from "../../../assets/image1.png";
import image2 from "../../../assets/image2.png";
import image3 from "../../../assets/image3.png";
import image4 from "../../../assets/image4.png";
import image5 from "../../../assets/image5.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Carousel() {
    const images = [
        { image: image1, message: "Modern Kitchen Utensils" },
        { image: image2, message: "Modern Art Works" },
        { image: image3, message: "Home Decorations" },
        { image: image4, message: "Modern Decorations" },
        { image: image5, message: "Botanicals" },
        { image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600", message: "Abstract Paintings" },
        { image: "https://images.pexels.com/photos/3852204/pexels-photo-3852204.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=279.825&fit=crop&h=453.05", message: "Vintage Furniture" },
        { image: "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=600", message: "Contemporary Sculptures" },
        { image: "https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=600", message: "Rustic Home Accents" },
        { image: "https://images.pexels.com/photos/593655/pexels-photo-593655.jpeg?auto=compress&cs=tinysrgb&w=600", message: "Minimalist Designs" },
    ];
    let length = images.length;
    const [mid, setMid] = useState(2);
    const [firstLeft, setFirstLeft] = useState(mid - 1);
    const [secondLeft, setSecondLeft] = useState(mid - 2);
    const [firstRight, setFirstRight] = useState(mid + 1);
    const [secondRight, setSecondRight] = useState(mid + 2);
    useEffect(() => {
        if (mid < 0) setMid(length - 1);
        if (mid === length) setMid(0);
        setFirstLeft(mid - 1);
        if (mid == 0) {
            setFirstLeft(length - 1);
        }
        setSecondLeft(mid - 2);
        if (mid == 1) {
            setSecondLeft(length - 1);
        }
        if (mid == 0) {
            setSecondLeft(length - 2);
        }
        setFirstRight(mid + 1);
        if (mid == length - 1) setFirstRight(0);
        setSecondRight(mid + 2);
        if (mid == length - 1) setSecondRight(1);
        if (mid == length - 2) setSecondRight(0);
    }, [mid]);
    return (
        <div className="Carousel">
            <div className="image-section-wrapper">
                <div className="image-section">
                    <div className="second-layer image-layer">
                        <img
                            src={images[secondLeft]?.image}
                            alt="second left"
                        />
                        <img
                            src={images[secondRight]?.image}
                            alt="first left"
                        />
                    </div>
                    <div className="first-layer image-layer">
                        <img src={images[firstLeft]?.image} alt="second left" />
                        <img src={images[firstRight]?.image} alt="first left" />
                    </div>
                    <div className="image-layer main-image">
                        <img src={images[mid]?.image} alt="main image" />
                        <p>{images[mid]?.message}</p>
                    </div>
                </div>
            </div>
            <div className="slide">
                <FaArrowLeft onClick={() => setMid(mid - 1)} />
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <FaArrowRight onClick={() => setMid(mid + 1)} />
            </div>
        </div>
    );
}

export default Carousel;
