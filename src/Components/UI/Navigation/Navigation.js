import Button from "../Button/Button";
import React from "react";
import classes from './Navigation.css';

const Navigation = () => {
    return (
    <nav className={classes.Navigation}>
        <Button value="To the collection" disabled=""/>
        <Button value="Shop all bags" disabled=""/>
        <Button value="Pre-orders" disabled="disabled"/>
    </nav>
    )
}

export default Navigation;

