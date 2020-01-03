import React from 'react';
import c3 from 'c3';
import 'c3/c3.css';

export default class PieChart extends React.Component {
  componentDidMount() {
    this.renderGraph();
  }
  componentDidUpdate() {
    this.loadGraphData();
  }

  render() {
    return (
      <div id="pie-chart" ref={node => (this.node = node)} />
    );
  }

  renderGraph() {
    this.chart = c3.generate({
      bindto: '#pie-chart',
      data: {
        columns: this.props.data,
        type: 'pie',
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