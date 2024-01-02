import React from "react";

const Submit = ({ label, clickHandler, isLoading = false, valid }) => {
    return (
        <div className="mb-3">
            <button
                onClick={clickHandler}
                disabled={isLoading || !valid}
                type="submit"
                className="btn btn-warning w-100"
            >
                {isLoading ? "Loading..." : label}
            </button>
        </div>
    );
};

export default Submit;
