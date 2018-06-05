import React from 'react';
import styled from 'styled-components';
import Markdown from 'markdown-to-jsx';
import markdownStyle from '@styles/markdown.css';

export default props => (
  <div>
    <Markdown>{props.file}</Markdown>
  </div>
);
