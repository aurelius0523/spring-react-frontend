import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.footer`
  background-color: ${props => props.theme.colorShark};
  height: 300px;
`;

const FooterContent = styled.div`
  display: grid;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  @media (max-width: 599px) {
    height: 40px;
  }

  @media (min-width: 600px) {
    height: 60px;
  }

  @media (min-width: 1340px) {
    max-width: 1260px;
  }

  @media (min-width: 780px) {
    width: 90%;
  }
`;

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          category: '',
          items: [
            {
              title: '',
              url: ''
            }
          ]
        }
      ]
    };
  }

  componentDidMount() {
    //fetch data
    const data = [
      {
        category: 'Docs',
        items: [
          {
            title: 'Installation',
            url: 'www.google.com',
            isExternalLink: false
          }
        ]
      },
      {
        category: 'Community',
        items: [
          {
            title: 'Community Resources',
            url: 'reactjs.org',
            isExternalLink: false
          }
        ]
      },
      {
        category: 'Channel',
        items: [
          {
            title: 'Github',
            url: 'www.github.com',
            isExternalLink: true
          },
          {
            title: 'Stack Overflow',
            url: 'www.stackoverflow.com',
            isExternalLink: true
          }
        ]
      }
    ];

    this.setState({ categories: data });
  }

  render() {
    return (
      <FooterDiv>
        <FooterContent>Content{this.props.title}</FooterContent>
      </FooterDiv>
    );
  }
}
