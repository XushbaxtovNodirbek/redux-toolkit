import React from "react";
import { Link } from "react-router-dom";

const Hint = ({ warning, a, href }) => {
    return (
        <div className="text-center">
            <label className="text-secondary">{warning}</label>
            <Link to={href}>
                <label>&nbsp;{a}</label>
            </Link>
        </div>
    );
};

export default Hint;
