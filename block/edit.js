/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { TextControl } from '@wordpress/components';
import { Fragment } from '@wordpress/element';
import {
  InnerBlocks,
  InspectorAdvancedControls
} from '@wordpress/editor';

/**
 * Internal dependencies
 */
import { containerAttributes } from "./helpers";

const SimpleContainer = ( props ) => {
  const htmlAttributes = containerAttributes( props.attributes );

  return (
    <Fragment>
      <div { ...htmlAttributes } >
        <InnerBlocks/>
      </div>

      <InspectorAdvancedControls>
        <TextControl
          label={ __( 'CSS ID', "simple-container-block" ) }
          value={ props.attributes.cssId || '' }
          onChange={ ( value ) => {
            props.setAttributes( {
              cssId: value
            } );
          } }
        />
      </InspectorAdvancedControls>
    </Fragment>
  );
};

export default SimpleContainer;
