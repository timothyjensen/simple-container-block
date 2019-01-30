/**
 * WordPress Dependencies
 */
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks } from '@wordpress/editor';

/**
 * Internal Dependencies
 */
import "./i18n";
import editBlock from "./edit";
import saveBlock from "./save";

/**
 * Register block.
 */
registerBlockType( "timothyjensen/simple-container-block", {
  title: __( "Simple Container", "simple-container-block" ),
  description: __( "A simple container block.", "simple-container-block" ),
  keyword: [
    __( "container", "simple-container-block" ),
    __( "section", "simple-container-block" ),
    __( "wrapper", "simple-container-block" )
  ],
  icon: {
    src: "editor-contract"
  },
  category: "layout",
  attributes: {
    cssId: {
      type: "string",
      default: ""
    },
    className: {
      type: "string",
      default: "sbc-container"
    }
  },
  supports: {
    className: false,
    align: [ "wide", "full" ]
  },
  edit: editBlock,
  save: saveBlock
} );
