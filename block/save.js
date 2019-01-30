/**
 * WordPress dependencies
 */
import { InnerBlocks } from '@wordpress/editor';

/**
 * Internal dependencies
 */
import { containerAttributes } from "./helpers";

const SaveBlock = ( props ) => {
  const htmlAttributes = containerAttributes( props.attributes );

  return (
    <div { ...htmlAttributes }>
      <InnerBlocks.Content/>
    </div>
  );
};

export default SaveBlock;
