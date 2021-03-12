import React from 'react';
import classes from './Tile.css';

const Tile = (props) => {
        function switchTile(props) {
            switch(props.type) {
                case "text":
                    return (<><h2>{props.title}</h2><p>{props.content}</p></>);
                case "image" :
                    return (<><img alt='' src={props.image} /></>);
                default :
                    return (<>Tile not found...</>);
            }
        }

        return (
            <section className={classes.Tile}>
                {switchTile(props)}
            </section>
        )
}

export default Tile;