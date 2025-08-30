import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import "../components/Style/Splash.css";

const SplashScreen = ({ onFinish }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish();
        }, 5000); // 5 sec
        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className="splash-container">
            {/* Background 3D animation (canvas) */}
            <canvas id="matrixCanvas"></canvas>

            {/* Center text */}
            <div className="splash-text">
                <h1 className="glow-text">Arpon Sana</h1>
                <div className="typewriter">
                    <Typewriter
                        options={{
                            strings: [
                                " Welcome to my Portfolio.. ",
                                "< Hello World !! >",
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 48,
                            deleteSpeed: 30
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;
