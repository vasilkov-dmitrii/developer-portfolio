import {Link} from "react-router-dom";
import {Routes} from "../../../routes";
import React from "react";

export const BackToMain = () => {
    return <Link to={Routes.MAIN} className="back_menu" title="Back">
        <div className="hidden_arrow"></div>
    </Link>
}