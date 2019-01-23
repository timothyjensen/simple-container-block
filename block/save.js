/**
 * WordPress dependencies
 */
import { InnerBlocks } from '@wordpress/editor';

const SaveBlock = ( props ) => {

  const shouldApplyDefaultClass = (htmlAttributes) => {
    return ! htmlAttributes.id && ! props.attributes.className
  };

  const htmlAttributes = {};

  if ( props.attributes.anchor && props.attributes.anchor.length ) {
    htmlAttributes.id = props.attributes.anchor;
  }

  if ( shouldApplyDefaultClass( htmlAttributes ) ) {
    htmlAttributes.className = 'scb-container';
  }

  return (
    <div {...htmlAttributes}>
      <InnerBlocks.Content/>
    </div>
  );
};

export default SaveBlock;
