function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { CompoundLabel } from '../index';
export class MockCompoundLabel extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "removeMe", (category, value) => {
      const values = this.state.tag.values.filter(val => val.id !== value.id);
      const state = {
        tag: _objectSpread({}, this.state.tag, {
          values
        })
      };
      this.setState(state);
    });

    this.state = {
      tag: {
        id: 1,
        label: 'Most delicious food you will ever eat',
        values: [{
          id: 11,
          label: 'Strawberries harvested under full moon light'
        }, {
          id: 12,
          label: 'Argentinian beef steak from hand massaged cow'
        }, {
          id: 13,
          label: 'Enchanted cookies baked by insane chef'
        }, {
          id: 14,
          label: 'Dumplings'
        }]
      }
    };
  }

  render() {
    return React.createElement(CompoundLabel, {
      key: this.state.tag.id,
      category: {
        id: this.state.tag.id,
        label: this.state.tag.label
      },
      values: this.state.tag.values,
      onDeleteClick: this.removeMe
    });
  }

}
export const mockCompoundLabelSource = `
import React from 'react';
import { CompoundLabel } from '../index';

export class MockCompoundLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: {
        id: 1,
        label: 'Most delicious food you will ever eat',
        values: [
          { id: 11, label: 'Strawberries harvested under full moon light' },
          { id: 12, label: 'Argentinian beef steak from hand massaged cow' },
          { id: 13, label: 'Enchanted cookies baked by insane chef' },
          { id: 14, label: 'Dumplings' }
        ]
      }
    };
  }

  removeMe = (category, value) => {
    const values = this.state.tag.values.filter(val => val.id !== value.id);
    const state = { tag: { ...this.state.tag, values } };
    this.setState(state);
  };

  render() {
    return (
      <CompoundLabel
        key={this.state.tag.id}
        category={{ id: this.state.tag.id, label: this.state.tag.label }}
        values={this.state.tag.values}
        onDeleteClick={this.removeMe}
      />
    );
  }
}
`;