import React, {useState, createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LineChart from './Chart/LineChart';
import BarChart from './Chart/BarChart';
import PieChart from './Chart/PieChart';

export const SelectedStateContext = createContext([0, () => {}]);

const DUMMY_DATA = [
    ['data1', 300, 350, 300, 0, 0, 100],
    ['data2', 130, 100, 140, 200, 150, 50],
    ['data3', 10, 200, 0, 10, 50, 50],
];

const Render = () => {
    const [selectedData, setSelected] = useState(0);

    return (
        <div>
            <SelectedStateContext.Provider value={[selectedData, setSelected]}>
                <LineChart data={DUMMY_DATA} />
                <BarChart data={DUMMY_DATA} />
                <PieChart data={DUMMY_DATA} />
            </SelectedStateContext.Provider>
        </div>
    )
}

ReactDOM.render(<Render />, document.getElementById('root'));