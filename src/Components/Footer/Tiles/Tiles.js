import React from 'react';
import Tile from "./Tile/Tile";
import brand from "./../../../assets/brand.png";
import story from "./../../../assets/our_story.png";

const Tiles = () => {
    return(
        <>
            <Tile type="text" title="The brand" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam commodi, cumque deserunt, dolore ducimus illo illum laborum obcaecati odit quam quasi quia quis quod recusandae reiciendis, sequi vel velit?" />
            <Tile type="image" image={brand} />
            <Tile type="image" image={story} />
            <Tile type="text" title="Our story" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam commodi, cumque deserunt, dolore ducimus illo illum laborum obcaecati odit quam quasi quia quis quod recusandae reiciendis, sequi vel velit?" />

        </>
    )
}

export default Tiles;