function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import classNames from 'classnames';
import { boolean } from '@storybook/addon-knobs/dist/index';
import { mockListItems } from './mockListItems';
import { Button, Grid, ListView } from '../../../index';
export class MockCompoundExpansion extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      listItems: mockListItems
    });

    _defineProperty(this, "toggleExpand", (item, expandProp) => {
      if (expandProp === item.expandType) {
        item.expanded = !item.expanded;
      } else {
        item.expanded = true;
        item.expandType = expandProp;
      }

      this.setState({
        listItems: mockListItems
      });
    });

    _defineProperty(this, "renderItem", (item, index) => {
      const expandText = item.compoundExpandText[item.expandType];
      return React.createElement(ListView.Item, {
        key: index,
        actions: MockCompoundExpansion.renderActions(item.actions),
        checkboxInput: React.createElement("input", {
          type: "checkbox"
        }),
        leftContent: React.createElement(ListView.Icon, {
          name: "plane"
        }),
        additionalInfo: this.renderAdditionalInfoExpandItems(item),
        heading: item.title,
        description: item.description,
        stacked: boolean('Stacked', false),
        compoundExpand: true,
        compoundExpanded: item.expanded,
        onCloseCompoundExpand: () => this.closeExpand(item)
      }, React.createElement(Grid.Row, null, React.createElement(Grid.Col, {
        sm: 11
      }, expandText)));
    });
  }

  static renderActions() {
    return React.createElement("div", null, React.createElement(Button, null, "Details"));
  }

  closeExpand(item) {
    item.expanded = false;
    this.setState({
      listItems: mockListItems
    });
  }

  renderAdditionalInfoExpandItems(item) {
    return item.properties && Object.keys(item.properties).map(prop => {
      const cssClassNames = classNames('pficon', {
        'pficon-flavor': prop === 'hosts',
        'pficon-cluster': prop === 'clusters',
        'pficon-container-node': prop === 'nodes',
        'pficon-image': prop === 'images'
      });
      return React.createElement(ListView.InfoItem, {
        key: prop
      }, React.createElement(ListView.Expand, {
        expanded: item.expanded && prop === item.expandType,
        toggleExpanded: () => {
          this.toggleExpand(item, prop);
        }
      }, React.createElement("span", {
        className: cssClassNames
      }), React.createElement("strong", null, item.properties[prop]), " ", prop));
    });
  }

  render() {
    const {
      listItems
    } = this.state;
    return React.createElement(ListView, null, listItems.map(this.renderItem));
  }

}
export const MockCompoundExpansionSource = `
import React from 'react';

import { mockListItems } from './mockListItems';
import { boolean } from '@storybook/addon-knobs/dist/index';
import classNames from 'classnames';

import { Button, Grid, ListView } from '../../../index';

export class MockCompoundExpansion extends React.Component {
    state = {
      listItems: []
    };

  componentDidMount() {
    this.setState({ listItems: mockListItems });
  }

  toggleExpand = (item, expandProp) => {
    if (expandProp === item.expandType) {
      item.expanded = !item.expanded;
    } else {
      item.expanded = true;
      item.expandType = expandProp;
    }
    this.setState({ listItems: mockListItems });
  };

  closeExpand(item) {
    item.expanded = false;
    this.setState({ listItems: mockListItems });
  }

  renderActions() {
    return (
      <div>
        <Button>Details</Button>
      </div>
    );
  }

  renderAdditionalInfoExpandItems(item) {
    return (
      item.properties &&
      Object.keys(item.properties).map(prop => {
        const classNames = classNames('pficon', {
          'pficon-flavor': prop === 'hosts',
          'pficon-cluster': prop === 'clusters',
          'pficon-container-node': prop === 'nodes',
          'pficon-image': prop === 'images'
        });
        return (
          <ListView.InfoItem key={prop}>
            <ListView.Expand
              expanded={item.expanded && prop === item.expandType}
              toggleExpanded={() => {
                this.toggleExpand(item, prop);
              }}
            >
              <span className={classNames} />
              <strong>{item.properties[prop]}</strong> {prop}
            </ListView.Expand>
          </ListView.InfoItem>
        );
      })
    );
  }

  renderItem = (item, index) => {
    let expandText = item.compoundExpandText[item.expandType];
    return (
      <ListView.Item
        key={index}
        actions={this.renderActions(item.actions)}
        checkboxInput={<input type="checkbox" />}
        leftContent={<ListView.Icon name="plane" />}
        additionalInfo={this.renderAdditionalInfoExpandItems(item)}
        heading={item.title}
        description={item.description}
        stacked={boolean('Stacked', false)}
        compoundExpand
        compoundExpanded={item.expanded}
        onCloseCompoundExpand={() => this.closeExpand(item)}
      >
        <Grid.Row>
          <Grid.Col sm={11}>
            {expandText}
          </Grid.Col>
        </Grid.Row>
      </ListView.Item>
    );
  };
  render() {
    const { listItems } = this.state;

    return (
      <ListView>
        {listItems.map(this.renderItem)}
      </ListView>
    );
  }
}
`;