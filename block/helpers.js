/**
 * Returns an object of HTML attributes for the container.
 *
 * @param attributes Block attributes
 */
export const containerAttributes = ( attributes ) => {
  const shouldApplyDefaultClass = ( htmlAttributes ) => {
    return (
             ! htmlAttributes.id || ! htmlAttributes.id.length
           )
           &&
           (
             ! htmlAttributes.class || ! htmlAttributes.class.length
           );
  };

  const htmlAttributes = {};

  if ( attributes.cssId && attributes.cssId.length ) {
    htmlAttributes.id = attributes.cssId;
  }

  if ( attributes.className && attributes.className.length ) {
    htmlAttributes.class = attributes.className;
  }

  if ( shouldApplyDefaultClass( htmlAttributes ) ) {
    htmlAttributes.class = "scb-container";
  }

  return htmlAttributes;
};
