import React from 'react';
import styled from 'styled-components';
import FooterLink from './FooterLink';

const Layout = styled.footer`
  background-color: ${props => props.theme.colorShark};
  min-height: 200px;
  box-sizing: border-box;
`;

const FooterCentered = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: inherit;

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

const FooterContentLeft = styled.div`
  grid-column: 1/2;
  box-sizing: inherit;
`;

const FooterContentRight = styled.div`
  grid-column: 2/4;
  box-sizing: inherit;
`;

const FooterContentRightFlexLayout = styled.div``;

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  componentWillMount() {
    //fetch data
    const data = [
      {
        category: 'Docs',
        items: [
          {
            title: 'Installation',
            url: 'https://www.google.com',
            isExternalLink: false
          }
        ]
      },
      {
        category: 'Community',
        items: [
          {
            title: 'Community Resources',
            url: 'https://reactjs.org',
            isExternalLink: false
          }
        ]
      },
      {
        category: 'Channel',
        items: [
          {
            title: 'Github',
            url: 'https://www.github.com',
            isExternalLink: true
          },
          {
            title: 'Stack Overflow',
            url: 'https://www.stackoverflow.com',
            isExternalLink: true
          }
        ]
      }
    ];

    this.setState({ categories: data });
  }

  render() {
    return (
      <Layout>
        <FooterCentered>
          <FooterContentLeft>Left</FooterContentLeft>
          <FooterContentRight>
            Right
            {this.state.categories.map(category => {
              return <FooterLink data={category} key={category.category} />;
            })}
          </FooterContentRight>
        </FooterCentered>
      </Layout>
    );
  }
}
