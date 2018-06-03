import React from 'react';
import styled from 'styled-components';
import Markdown from 'markdown-to-jsx';
import file from '@resources/markdown/rest.md';
import markdownStyle from '@styles/markdown.css';

export default () => (
  <div>
    <Markdown>{file}</Markdown>
  </div>
);
