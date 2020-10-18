import React from "react";
import { Link } from "react-router-dom";

export default () => (
        <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center" >
            <div className="jumbotron jumbotron-fluid bg-transparent">
                <div className="container secondary-color">
                    <h1 className="display-4">Test your "number sense"</h1>
                    <p className="lead">
                        Is your number sense tingling? Take these quick ANS and number line tests to find where you rank!
                    </p>
                    <hr className="my-4" />
                    <p> What do these tests show? </p>
                    <Link
                        to="/testme"
                        className="btn btn-lg custom-button"
                        role="button"
                    >
                        Mathematize me!
                    </Link>
                </div>
            </div>
        </div>
);