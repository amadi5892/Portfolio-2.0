import React from "react";
import './foodApp.styles.css'

const FoodApp = () => {
    return (
        <div className="food-section">
            <div className="food-title">
                <h3>Food Delivery App (Deliveroo Clone)</h3>
            </div>
            <div className="food-img">
                <img src={require("../../assets/RestauraantScreen.png")} alt="app screen 2" />
                <img src={require("../../assets/HomeScreen.png")} alt="app screen 1" />
                <img src={require("../../assets/BasketScreen.png")} alt="app screen 3" />
            </div>
            <div className="food-info">
                <div className="food-info-img">
                    <img src={require("../../assets/PreparingScreen.png")} alt="app screen 4" />
                    <img src={require("../../assets/DeliveryScreen.png")} alt="app screen 5" />
                </div>
                <div className="food-info-para">
                    <p>
                        A mobile application project where I built a Food Delivery Mobile App.
                        You can call it a clone or look-a-like, but it was definitely inspired by the mobile app Deliveroo.<br></br>
                        <br></br>All restaurants and locations were made up for this project. 
                    </p>
                    <h4>Technology Used</h4>
                    <ul>
                        <li><strong>React Native</strong>, used to build cross-platform (IOS & Android) mobile applications.</li>
                        <li><strong>Expo CLI</strong>, open-source framework for apps that run natively on Android, IOS and the web.</li>
                        <li><strong>Redux</strong>, for managing and centralizing applicaton state.</li>
                        <li><strong>Sanity Database</strong>, open-source backend database.</li>
                        <li><strong>Babel</strong>, a JavaScript compiler.</li>
                        <li><strong>Node.js</strong>, backend JavaScript runtime environment.</li>
                        <li><strong>Nativewind</strong>, a package that uses Tailwind CSS to style the app.</li>
                    </ul>
                </div>
                <div className="food-content">
                    <a href="https://github.com/amadi5892/Food-Delivery-App" target="_blank" rel="noreferrer" >Click here for GitHub Repository</a>
                </div>
            </div>
        </div>
    );
};

export default FoodApp;