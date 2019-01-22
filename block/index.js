/**
 * WordPress Dependencies
 */
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks } from '@wordpress/editor';

/**
 * Internal Dependencies
 */
import blockAttributes from "./data/attributes";
import editor from "./edit";
import "./i18n";

/**
 * Register block.
 */
registerBlockType( "timothyjensen/simple-container-block", {
  title: __( "Simple Container", "simple-container-block" ),
  description: __(
    "A simple container block.",
    "simple-container-block"
  ),
  keyword: [
    __( "custom", "simple-container-block" ),
    __( "container", "simple-container-block" ),
    __( "wrapper", "simple-container-block" )
  ],
  icon: {
    src: "editor-contract"
  },
  category: "layout",
  attributes: blockAttributes,
  supports: {
    align: [ "wide", "full" ]
  },
  edit: editor,
  save( props ) {
    const htmlAttributes = {};

    if ( props.attributes.anchor && props.attributes.anchor.length ) {
      htmlAttributes.id = props.attributes.anchor;
    }

    if ( props.attributes.className && props.attributes.className.length ) {
      htmlAttributes.className = props.attributes.className;
    }

    return (
      <div {...htmlAttributes}>
        <InnerBlocks.Content/>
      </div>
    );
  }
} );
