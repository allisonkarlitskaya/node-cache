function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { VerticalNav, Masthead } from '../../../index';
import { mockNavItems } from './mockNavItems';
export class MockWithMastHeadComponent extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      collapse: false
    });

    _defineProperty(this, "onCollapse", () => {
      this.setState({
        collapse: !this.state.collapse
      });
    });
  }

  render() {
    return React.createElement(VerticalNav, {
      sessionKey: "storybookCustomMasthead",
      items: mockNavItems,
      masthead: React.createElement(Masthead, {
        onNavToggleClick: () => this.onCollapse()
      }),
      navCollapsed: this.state.collapse,
      showBadges: true
    });
  }

}
export const mockWithMastHeadSource = `
import React from 'react';
import { VerticalNav, MastHead as MastheadPf } from '../../../index';
import { mockNavItems } from './mockNavItems';

export class MockWithMastHeadComponent extends React.Component {
  state = {
    collapse: false
  };

  onCollapse = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  render() {
    return (
      <VerticalNav
        sessionKey="storybookCustomMasthead"
        items={mockNavItems}
        masthead={<Masthead onNavToggleClick={() => this.onCollapse()} />}
        navCollapsed={this.state.collapse}
        showBadges
      />
    );
  }
}
`;