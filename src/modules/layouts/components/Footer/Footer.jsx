import React from 'react';
import styled from 'styled-components';
import FooterLink from './FooterLink';

const Layout = styled.footer`
  background-color: ${props => props.theme.colorShark};
  color: ${props => props.theme.colorWhite};
  padding-bottom: 50px;
`;

const FooterCentered = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  max-width: 1260px;
`;

const FooterContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const FooterContentLeft = styled.section`
  grid-column: 1/2;
  box-sizing: inherit;
`;

export const ParagraphStyle = styled.p`
  color: ${props => props.theme.colorCornflowerBlue};
  padding-top: 15px;
`;

const FooterContentRight = styled.section`
  grid-column: 2/4;
  box-sizing: inherit;
  height: inherit;
  display: grid;
  grid-template: repeat(2, auto) / repeat(2, 1fr);
`;

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
          <FooterContentGrid>
            <FooterContentLeft>
              <ParagraphStyle>
                Copyright © 2018 aurelius0523/kim.loong.tan
              </ParagraphStyle>
            </FooterContentLeft>
            <FooterContentRight>
              {this.state.categories.map(category => {
                return <FooterLink data={category} key={category.category} />;
              })}
            </FooterContentRight>
          </FooterContentGrid>
        </FooterCentered>
      </Layout>
    );
  }
}
