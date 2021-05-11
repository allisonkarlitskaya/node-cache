import React from 'react';
import { Table } from '../index';

const headerFormat = value => React.createElement(Table.Heading, null, value);

const cellFormat = value => React.createElement(Table.Cell, null, value);

export const mockBootstrapColumns = [{
  header: {
    label: '#',
    formatters: [headerFormat]
  },
  cell: {
    formatters: [cellFormat]
  },
  property: 'id'
}, {
  header: {
    label: 'First Name',
    formatters: [headerFormat]
  },
  cell: {
    formatters: [cellFormat]
  },
  property: 'first_name'
}, {
  header: {
    label: 'Last Name',
    formatters: [headerFormat]
  },
  cell: {
    formatters: [cellFormat]
  },
  property: 'last_name'
}, {
  header: {
    label: 'Username',
    formatters: [headerFormat]
  },
  cell: {
    formatters: [cellFormat]
  },
  property: 'username'
}];

const headerFormatRightAlign = value => React.createElement(Table.Heading, {
  align: "right"
}, value);

const cellFormatRightAlign = value => React.createElement(Table.Cell, {
  align: "right"
}, value);

export const mockPatternflyColumns = [{
  header: {
    label: 'First Name',
    formatters: [headerFormat]
  },
  cell: {
    formatters: [cellFormat]
  },
  property: 'first_name'
}, {
  header: {
    label: 'Last Name',
    formatters: [headerFormat]
  },
  cell: {
    formatters: [cellFormat]
  },
  property: 'last_name'
}, {
  header: {
    label: 'Username',
    formatters: [headerFormat]
  },
  cell: {
    formatters: [cellFormat]
  },
  property: 'username'
}, {
  header: {
    label: 'Commits',
    formatters: [headerFormatRightAlign]
  },
  cell: {
    formatters: [cellFormatRightAlign]
  },
  property: 'commits'
}, {
  header: {
    label: 'Additions',
    formatters: [headerFormatRightAlign]
  },
  cell: {
    formatters: [cellFormatRightAlign]
  },
  property: 'additions'
}, {
  header: {
    label: 'Location',
    formatters: [value => React.createElement(Table.Heading, {
      align: "center"
    }, value)]
  },
  cell: {
    formatters: [value => React.createElement(Table.Cell, {
      align: "center"
    }, value)]
  },
  property: 'location'
}, {
  header: {
    label: 'Gender',
    formatters: [headerFormat]
  },
  cell: {
    formatters: [cellFormat]
  },
  property: 'gender'
}];