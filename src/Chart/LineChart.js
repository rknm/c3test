import React from 'react';
import c3 from 'c3';
import 'c3/c3.css';

export default class LineChart extends React.Component {
  componentDidMount() {
    this.renderGraph();
  }
  componentDidUpdate() {
    this.loadGraphData();
  }

  render() {
    return (
      <div id="line-chart" ref={node => (this.node = node)} />
    );
  }

  renderGraph() {
    this.chart = c3.generate({
      bindto: '#line-chart',
      data: {
        columns: this.props.data,
        type: 'line',
        selection: {
            enabled: true
        },
        onselected: (d, element) => {
          console.log(d);
          console.log(element);
        }
      },
      legend: {
        show: false
      }
    });
  }
}