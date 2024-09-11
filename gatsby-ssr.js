/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
import React from 'react';
import { ServerStyleSheets } from '@mui/styles';

export const onRenderBody = ({ setHeadComponents, setBodyAttributes }, pluginOptions) => {
  const sheets = new ServerStyleSheets();
  setHeadComponents([sheets.getStyleElement()]);
};