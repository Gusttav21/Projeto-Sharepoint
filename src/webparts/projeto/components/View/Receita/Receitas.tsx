import * as React from "react";
import { makeResetStyles, tokens } from "@fluentui/react-components";


const useStackClassName = makeResetStyles({
    display: "flex",
    flexWrap: "wrap",
    gap: tokens.spacingHorizontalS,
    padding: tokens.spacingHorizontalS

});

const ViewReceitas: React.FunctionComponent = (props) => {
    return(
        <div className={useStackClassName()}>
            
        </div>
    )
}
export default ViewReceitas