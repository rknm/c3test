import React from 'react';
import c3 from 'c3';
import 'c3/c3.css';

export default class BarChart extends React.Component {
  componentDidMount() {
    this.renderGraph();
  }
  componentDidUpdate() {
    this.loadGraphData();
  }

  render() {
    return (
      <div id="bar-chart" ref={node => (this.node = node)} />
    );
  }

  renderGraph() {
    this.chart = c3.generate({
      bindto: '#bar-chart',
      data: {
        columns: this.props.data,
        type: 'bar',
        selection: {
            enabled: true
        }
      },
      legend: {
        show: false
      }
    });
  }
}