import React from 'react';
import { shallow } from 'enzyme';
import { BulletChart } from '../index';
import { Tooltip } from '../../Tooltip/index';

const customTooltipFunction = (value, title) => React.createElement(Tooltip, {
  id: "bullet-tip-1"
}, `${title}: ${value}%`);

const customTooltipFunction2 = (value, title) => React.createElement(Tooltip, {
  id: "bullet-tip-2"
}, `${title} - ${value}%`);

const nonPercentTooltipFunction = (value, title) => React.createElement(Tooltip, {
  id: "bullet-tip-1"
}, `${title}: ${value}`);

const goodRanges = [{
  value: 50,
  title: 'Range 1',
  tooltipFunction: customTooltipFunction
}, {
  value: 70,
  title: 'Range 2',
  tooltipFunction: customTooltipFunction
}, {
  value: 100,
  title: 'Range 3',
  tooltipFunction: customTooltipFunction
}];
const invalidRanges = [{
  value: -50,
  title: 'Range 1',
  tooltipFunction: customTooltipFunction
}, {
  value: -70,
  title: 'Range 2',
  tooltipFunction: customTooltipFunction
}, {
  value: -100,
  title: 'Range 3',
  tooltipFunction: customTooltipFunction
}];
const unsortedRanges = [{
  value: 70,
  title: 'Range 1',
  tooltipFunction: customTooltipFunction
}, {
  value: 100,
  title: 'Range 2',
  tooltipFunction: customTooltipFunction
}, {
  value: 50,
  title: 'Range 3',
  tooltipFunction: customTooltipFunction
}];
const singleRange = [{
  value: 50,
  title: 'Range 1'
}];
const doubleRange = [{
  value: 50,
  title: 'Range 1',
  tooltipFunction: customTooltipFunction
}, {
  value: 100,
  title: 'Range 2',
  tooltipFunction: customTooltipFunction
}];
const titleLessRanges = [{
  value: 50,
  tooltipFunction: customTooltipFunction
}, {
  value: 70,
  tooltipFunction: customTooltipFunction
}, {
  value: 100,
  tooltipFunction: customTooltipFunction
}];
const values = [{
  value: 10,
  title: 'data1',
  tooltipFunction: customTooltipFunction
}, {
  value: 20,
  title: 'data2',
  tooltipId: 'data2-tooltip'
}];
const invalidValues = [{
  value: -10,
  title: 'data1',
  tooltipFunction: customTooltipFunction
}, {
  value: -20,
  title: 'data2',
  tooltipFunction: customTooltipFunction2
}];
const singleValue = [{
  value: 10,
  title: 'data1',
  tooltipFunction: customTooltipFunction
}];
const nonPercentValues = [{
  value: 130,
  title: 'data1',
  tooltipFunction: nonPercentTooltipFunction
}, {
  value: 220,
  title: 'data2',
  tooltipId: 'data2-tooltip'
}];
const nonPercentRanges = [{
  value: 100,
  title: 'Range 1',
  tooltipFunction: nonPercentTooltipFunction
}, {
  value: 200,
  title: 'Range 2',
  tooltipFunction: nonPercentTooltipFunction
}, {
  value: 300,
  title: 'Range 3',
  tooltipFunction: nonPercentTooltipFunction
}];
test('BulletChart renders properly with defaults', () => {
  expect(shallow(React.createElement(BulletChart, {
    id: "bullet-all",
    values: values
  })).getElement()).toMatchSnapshot();
});
test('BulletChart renders properly with all fields', () => {
  expect(shallow(React.createElement(BulletChart, {
    id: "bullet-all",
    label: "Test Label",
    details: "Test Details",
    values: values,
    thresholdError: 10,
    thresholdWarning: 20,
    thresholdErrorLegendText: "TEST Error",
    thresholdWarningLegendText: "TEST Warning",
    ranges: goodRanges,
    showLegend: true
  })).getElement()).toMatchSnapshot();
});
test('BulletChart prioritizes on legend text function', () => {
  expect(shallow(React.createElement(BulletChart, {
    id: "bullet-all",
    label: "Test Label",
    details: "Test Details",
    values: values,
    thresholdError: 10,
    thresholdWarning: 20,
    thresholdErrorLegendText: "TEST Error",
    thresholdWarningegendText: "TEST Warning",
    thresholdErrorLegendTextFunction: () => 'TEST Error Function',
    thresholdWarningLegendTextFunction: () => 'TEST Warning Function',
    ranges: goodRanges,
    showLegend: true
  })).getElement()).toMatchSnapshot();
});
test('BulletChart renders properly with a single value', () => {
  expect(shallow(React.createElement(BulletChart, {
    id: "bullet-single-value",
    label: "Test Label",
    details: "Test Details",
    values: singleValue,
    thresholdError: 10,
    thresholdWarning: 20,
    ranges: goodRanges
  })).getElement()).toMatchSnapshot();
});
test('BulletChart renders properly handling invalid data', () => {
  expect(shallow(React.createElement(BulletChart, {
    id: "bullet-invalid",
    label: "Test Label",
    details: "Test Details",
    values: invalidValues,
    thresholdError: 110,
    thresholdWarning: -10,
    ranges: invalidRanges
  })).getElement()).toMatchSnapshot();
});
test('BulletChart renders properly with unsorted ranges', () => {
  expect(shallow(React.createElement(BulletChart, {
    id: "bullet-unsorted-ranges",
    label: "Test Label",
    details: "Test Details",
    values: values,
    thresholdError: 10,
    thresholdWarning: 20,
    ranges: unsortedRanges
  })).getElement()).toMatchSnapshot();
});
test('BulletChart renders properly with a single range', () => {
  expect(shallow(React.createElement(BulletChart, {
    id: "bullet-single-range",
    label: "Test Label",
    details: "Test Details",
    values: values,
    thresholdError: 10,
    thresholdWarning: 20,
    ranges: singleRange
  })).getElement()).toMatchSnapshot();
});
test('BulletChart renders properly with two ranges', () => {
  expect(shallow(React.createElement(BulletChart, {
    id: "bullet-two-ranges",
    label: "Test Label",
    details: "Test Details",
    values: values,
    thresholdError: 10,
    thresholdWarning: 20,
    ranges: doubleRange
  })).getElement()).toMatchSnapshot();
});
test('BulletChart renders properly with no thresholds', () => {
  expect(shallow(React.createElement(BulletChart, {
    id: "bullet-no-thresholds",
    label: "Test Label",
    details: "Test Details",
    values: values,
    ranges: goodRanges,
    range2: 70,
    range3: 90
  })).getElement()).toMatchSnapshot();
});
test('BulletChart renders properly with only warning threshold', () => {
  expect(shallow(React.createElement(BulletChart, {
    id: "bullet-warning-treshold",
    label: "Test Label",
    details: "Test Details",
    values: values,
    thresholdWarning: 20,
    ranges: goodRanges,
    tooltipFunction: customTooltipFunction
  })).getElement()).toMatchSnapshot();
});
test('BulletChart renders properly with only error threshold', () => {
  expect(shallow(React.createElement(BulletChart, {
    id: "bullet-error-threshold",
    label: "Test Label",
    details: "Test Details",
    values: values,
    thresholdError: 100,
    ranges: goodRanges
  })).getElement()).toMatchSnapshot();
});
test('BulletChart renders properly with only value in the legend', () => {
  expect(shallow(React.createElement(BulletChart, {
    id: "bullet-one-legend",
    label: "Test Label",
    details: "Test Details",
    values: singleValue,
    thresholdWarning: 20,
    thresholdError: 100,
    showLegend: true,
    ranges: titleLessRanges
  })).getElement()).toMatchSnapshot();
});
test('BulletChart renders properly without axis', () => {
  expect(shallow(React.createElement(BulletChart, {
    id: "bullet-no-axis",
    label: "Test Label",
    details: "Test Details",
    values: values,
    thresholdError: 10,
    thresholdWarning: 20,
    ranges: goodRanges,
    showLegend: true,
    showAxis: false
  })).getElement()).toMatchSnapshot();
});
test('BulletChart renders vertical chart properly', () => {
  expect(shallow(React.createElement(BulletChart, {
    id: "bullet-vertical",
    vertical: true,
    label: "Test Label",
    details: "Test Details",
    values: values,
    thresholdError: 10,
    thresholdWarning: 20,
    ranges: goodRanges,
    showLegend: true
  })).getElement()).toMatchSnapshot();
});
test('BulletChart renders stacked chart properly', () => {
  expect(shallow(React.createElement(BulletChart, {
    id: "bullet-stacked",
    stacked: true,
    label: "Test Label",
    details: "Test Details",
    values: values,
    thresholdError: 10,
    thresholdWarning: 20,
    ranges: goodRanges,
    showLegend: true
  })).getElement()).toMatchSnapshot();
});
test('BulletChart renders vertical stacked chart properly', () => {
  expect(shallow(React.createElement(BulletChart, {
    id: "bullet-vertical-stacked",
    vertical: true,
    stacked: true,
    label: "Test Label",
    details: "Test Details",
    values: values,
    thresholdError: 10,
    thresholdWarning: 20,
    ranges: goodRanges,
    showLegend: true
  })).getElement()).toMatchSnapshot();
});
test('BulletChart renders vertical dots chart properly', () => {
  expect(shallow(React.createElement(BulletChart, {
    id: "bullet-vertical",
    vertical: true,
    label: "Test Label",
    details: "Test Details",
    values: values,
    thresholdError: 10,
    thresholdWarning: 20,
    ranges: goodRanges,
    showLegend: true,
    useDots: true
  })).getElement()).toMatchSnapshot();
});
test('BulletChart renders stacked dots chart properly', () => {
  expect(shallow(React.createElement(BulletChart, {
    id: "bullet-stacked",
    stacked: true,
    label: "Test Label",
    details: "Test Details",
    values: values,
    thresholdError: 10,
    thresholdWarning: 20,
    ranges: goodRanges,
    showLegend: true,
    useDots: true
  })).getElement()).toMatchSnapshot();
});
test('BulletChart renders vertical stacked dots chart properly', () => {
  expect(shallow(React.createElement(BulletChart, {
    id: "bullet-vertical-stacked",
    vertical: true,
    stacked: true,
    label: "Test Label",
    details: "Test Details",
    values: values,
    thresholdError: 10,
    thresholdWarning: 20,
    ranges: goodRanges,
    showLegend: true,
    useDots: true
  })).getElement()).toMatchSnapshot();
});
test('BulletChart renders default colors properly', () => {
  const defaultColorValues = [{
    value: 10,
    title: 'data1',
    tooltipFunction: customTooltipFunction
  }, {
    value: 20,
    title: 'data2',
    tooltipFunction: customTooltipFunction2
  }, {
    value: 30,
    title: 'data3',
    tooltipId: 'data3-tooltip'
  }, {
    value: 40,
    title: 'data4',
    tooltipId: 'data4-tooltip'
  }];
  expect(shallow(React.createElement(BulletChart, {
    id: "bullet-default-colors",
    vertical: true,
    label: "Test Label",
    details: "Test Details",
    values: defaultColorValues,
    thresholdError: 10,
    thresholdWarning: 20,
    ranges: goodRanges
  })).getElement()).toMatchSnapshot();
});
test('BulletChart renders extended colors properly', () => {
  const extendedColorValues = [{
    value: 10,
    title: 'data1',
    tooltipFunction: customTooltipFunction
  }, {
    value: 10,
    title: 'data2',
    tooltipFunction: customTooltipFunction2
  }, {
    value: 10,
    title: 'data3',
    tooltipFunction: customTooltipFunction2
  }, {
    value: 10,
    title: 'data4',
    tooltipFunction: customTooltipFunction2
  }, {
    value: 10,
    title: 'data5',
    tooltipFunction: customTooltipFunction2
  }, {
    value: 10,
    title: 'data6',
    tooltipFunction: customTooltipFunction2
  }, {
    value: 10,
    title: 'data7',
    tooltipFunction: customTooltipFunction2
  }, {
    value: 10,
    title: 'data8',
    tooltipFunction: customTooltipFunction2
  }, {
    value: 10,
    title: 'data9',
    tooltipFunction: customTooltipFunction2
  }];
  expect(shallow(React.createElement(BulletChart, {
    id: "bullet-extended-colors",
    vertical: true,
    stacked: true,
    label: "Test Label",
    details: "Test Details",
    values: extendedColorValues,
    thresholdError: 10,
    thresholdWarning: 20,
    ranges: goodRanges
  })).getElement()).toMatchSnapshot();
});
test('BulletChart renders custom Axis properly', () => {
  const customAxis = React.createElement(BulletChart.Axis, null, React.createElement(BulletChart.AxisTic, {
    value: 33,
    text: "One Third"
  }), React.createElement(BulletChart.AxisTic, {
    value: 66,
    text: "Two Thirds"
  }));
  expect(shallow(React.createElement(BulletChart, {
    id: "bullet-custom-legend",
    label: "Test Label",
    details: "Test Details",
    values: values,
    thresholdError: 10,
    thresholdWarning: 20,
    ranges: goodRanges,
    showLegend: true,
    customAxis: customAxis
  })).getElement()).toMatchSnapshot();
});
test('BulletChart renders custom legend properly', () => {
  expect(shallow(React.createElement(BulletChart, {
    id: "bullet-custom-legend",
    label: "Test Label",
    details: "Test Details",
    values: values,
    thresholdError: 10,
    thresholdWarning: 20,
    ranges: goodRanges,
    showLegend: true,
    customLegend: React.createElement("div", null, "Custom Legend")
  })).getElement()).toMatchSnapshot();
});
test('BulletChartTitle renders properly', () => {
  expect(shallow(React.createElement(BulletChart.Title, {
    id: "my-bullet-title",
    className: "my-bullet-title",
    label: "test label",
    details: "test details"
  })).getElement()).toMatchSnapshot();
});
test('BulletChartThreshold renders properly', () => {
  expect(shallow(React.createElement(BulletChart.Threshold, {
    id: "my-bullet-threshold",
    className: "my-bullet-threshold",
    threshold: 40
  })).getElement()).toMatchSnapshot();
  expect(shallow(React.createElement(BulletChart.Threshold, {
    id: "my-bullet-threshold-vertical",
    className: "my-bullet-threshold-vertical",
    threshold: 60,
    vertical: true
  })).getElement()).toMatchSnapshot();
  expect(shallow(React.createElement(BulletChart.Threshold, {
    id: "my-bullet-threshold-invalid-zero",
    className: "my-bullet-threshold-invalid-zero",
    threshold: 0
  })).getElement()).toMatchSnapshot();
  expect(shallow(React.createElement(BulletChart.Threshold, {
    id: "my-bullet-threshold-vertical-invalid-greater-than-100",
    className: "my-bullet-threshold-vertical-invalid-greater-than-100",
    threshold: 160
  })).getElement()).toMatchSnapshot();
  expect(shallow(React.createElement(BulletChart.Threshold, {
    id: "my-bullet-threshold-non-percent",
    className: "my-bullet-threshold-non-percent",
    threshold: 160,
    percent: false,
    maxValue: 200
  })).getElement()).toMatchSnapshot();
});
test('BulletChartValue renders properly', () => {
  expect(shallow(React.createElement(BulletChart.Value, {
    id: "my-bullet-value",
    className: "my-bullet-value",
    value: values[0]
  })).getElement()).toMatchSnapshot();
  expect(shallow(React.createElement(BulletChart.Value, {
    id: "my-bullet-value-stacked",
    className: "my-bullet-value-stacked",
    value: values[1],
    prevValue: 10
  })).getElement()).toMatchSnapshot();
  expect(shallow(React.createElement(BulletChart.Value, {
    id: "my-bullet-value-vertical",
    className: "my-bullet-value-vertical",
    value: values[0],
    prevValue: 10,
    vertical: true
  })).getElement()).toMatchSnapshot();
  expect(shallow(React.createElement(BulletChart.Value, {
    id: "my-bullet-value-dot",
    className: "my-bullet-value-dot",
    value: values[1],
    dot: true
  })).getElement()).toMatchSnapshot();
  expect(shallow(React.createElement(BulletChart.Value, {
    id: "my-bullet-value-stacked-dot",
    className: "my-bullet-value-stacked-dot",
    value: values[1],
    prevValue: 10,
    dot: true
  })).getElement()).toMatchSnapshot();
  expect(shallow(React.createElement(BulletChart.Value, {
    id: "my-bullet-value-vertical-dot",
    className: "my-bullet-value-vertical-dot",
    value: values[0],
    prevValue: 10,
    vertical: true,
    dot: true
  })).getElement()).toMatchSnapshot();
  expect(shallow(React.createElement(BulletChart.Value, {
    id: "my-bullet-value-not-percent",
    value: nonPercentValues[0],
    percent: false,
    maxValue: 400
  })).getElement()).toMatchSnapshot();
});
test('BulletChartRange renders properly', () => {
  expect(shallow(React.createElement(BulletChart.Range, {
    id: "my-bullet-range",
    className: "my-bullet-range",
    value: 20,
    index: 1
  })).getElement()).toMatchSnapshot();
  expect(shallow(React.createElement(BulletChart.Range, {
    id: "my-bullet-range-vertical",
    className: "my-bullet-range-vertical",
    value: 60,
    index: 2,
    vertical: true
  })).getElement()).toMatchSnapshot();
  expect(shallow(React.createElement(BulletChart.Range, {
    id: "my-bullet-range-negative",
    className: "my-bullet-range-negative",
    value: -10,
    index: 1
  })).getElement()).toMatchSnapshot();
  expect(shallow(React.createElement(BulletChart.Range, {
    id: "my-bullet-range-invalid",
    className: "my-bullet-range-invalid",
    value: 160,
    index: 1
  })).getElement()).toMatchSnapshot();
});
test('BulletChartAxis renders properly', () => {
  expect(shallow(React.createElement(BulletChart.Axis, {
    id: "my-bullet-axis",
    className: "my-bullet-axis"
  }, React.createElement(BulletChart.AxisTic, {
    value: 0
  }), React.createElement(BulletChart.AxisTic, {
    value: 25
  }), React.createElement(BulletChart.AxisTic, {
    value: 50
  }), React.createElement(BulletChart.AxisTic, {
    value: 75
  }), React.createElement(BulletChart.AxisTic, {
    value: 100
  }))).getElement()).toMatchSnapshot();
});
test('BulletChartAxis renders vertical properly', () => {
  expect(shallow(React.createElement(BulletChart.Axis, {
    id: "my-bullet-vertical-axis",
    className: "my-bullet-vertical-axis"
  }, React.createElement(BulletChart.AxisTic, {
    value: 0,
    vertical: true
  }), React.createElement(BulletChart.AxisTic, {
    value: 25,
    vertical: true
  }), React.createElement(BulletChart.AxisTic, {
    value: 50,
    vertical: true
  }), React.createElement(BulletChart.AxisTic, {
    value: 75,
    vertical: true
  }), React.createElement(BulletChart.AxisTic, {
    value: 1000,
    vertical: true
  }))).getElement()).toMatchSnapshot();
});
test('BulletChartAxis renders properly with custom text', () => {
  expect(shallow(React.createElement(BulletChart.Axis, {
    id: "my-bullet-axis",
    className: "my-bullet-axis"
  }, React.createElement(BulletChart.AxisTic, {
    value: 10,
    text: "ten"
  }), React.createElement(BulletChart.AxisTic, {
    value: 20,
    text: "twenty"
  }), React.createElement(BulletChart.AxisTic, {
    value: 30,
    text: "thirty"
  }), React.createElement(BulletChart.AxisTic, {
    value: 40,
    text: "forty"
  }), React.createElement(BulletChart.AxisTic, {
    value: 50,
    text: "fifty"
  }))).getElement()).toMatchSnapshot();
});
test('BulletChartAxisTic renders properly', () => {
  expect(shallow(React.createElement(BulletChart.AxisTic, {
    id: "my-bullet-axis-tic",
    className: "my-bullet-axis-tic",
    value: 25
  })).getElement()).toMatchSnapshot();
});
test('BulletChartAxisTic renders vertical properly', () => {
  expect(shallow(shallow(React.createElement(BulletChart.AxisTic, {
    id: "my-bullet-axis-tic-vertical",
    className: "my-bullet-axis-tic-vertical",
    value: 25,
    vertical: true
  })).getElement()).getElement()).toMatchSnapshot();
});
test('BulletChartAxisTic renders text properly', () => {
  expect(shallow(shallow(React.createElement(BulletChart.AxisTic, {
    id: "my-bullet-axis-tic-text",
    className: "my-bullet-axis-tic-text",
    value: 25,
    text: "my-bullet-axis-tic-text"
  })).getElement()).getElement()).toMatchSnapshot();
});
test('BulletChartLegend renders properly', () => {
  expect(shallow(React.createElement(BulletChart.Legend, {
    id: "my-bullet-legend",
    className: "my-bullet-legend"
  }, React.createElement(BulletChart.LegendItem, {
    title: values[0].title,
    value: values[0].value,
    color: values[0].color
  }), React.createElement(BulletChart.LegendItem, {
    title: values[1].title,
    value: values[1].value,
    color: values[1].color
  }))).getElement()).toMatchSnapshot();
});
test('BulletChartLegendItem renders properly', () => {
  expect(shallow(React.createElement(BulletChart.LegendItem, {
    id: "my-bullet-legend-item",
    className: "my-bullet-legend-item",
    title: values[0].title,
    value: values[0].value,
    color: values[0].color,
    tooltipId: "my-bullet-legend-item-tooltip-id"
  })).getElement()).toMatchSnapshot();
  expect(shallow(React.createElement(BulletChart.LegendItem, {
    id: "my-bullet-legend-item",
    className: "my-bullet-legend-item",
    title: values[0].title,
    value: values[0].value,
    color: values[0].color,
    tooltipFunction: customTooltipFunction
  })).getElement()).toMatchSnapshot();
});
test('BulletChart uses custom legend text correctly', () => {
  const customLegendFunction = value => `Custom Legend: ${value.value}`;

  const rangeTextFunction = range => `Custom Legend: ${range.value}`;

  values[0].legendTextFunction = customLegendFunction;
  values[1].legendText = 'Custom Value Legend Text';
  goodRanges[0].legendTextFunction = rangeTextFunction;
  goodRanges[1].legendText = 'Custom Range Legend Text';
  goodRanges[2].color = 'black';
  expect(shallow(React.createElement(BulletChart, {
    id: "bullet-all",
    label: "Test Label",
    details: "Test Details",
    values: values,
    thresholdError: 10,
    thresholdWarning: 20,
    ranges: goodRanges,
    showLegend: true
  })).getElement()).toMatchSnapshot();
});
test('BulletChart renders properly with non-percent values', () => {
  expect(shallow(React.createElement(BulletChart, {
    id: "bullet-all",
    label: "Test Label",
    details: "Test Details",
    percents: false,
    values: nonPercentValues,
    maxValue: 400,
    thresholdError: 340,
    thresholdWarning: 220,
    ranges: nonPercentRanges,
    showLegend: true
  })).getElement()).toMatchSnapshot();
});