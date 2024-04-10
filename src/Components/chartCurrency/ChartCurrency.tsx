import style from './chartcurrency.module.css';
import {useEffect, useState} from 'react'

import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries} from 'react-vis';

export const ChartCurrency = ({data, coinName}: {data: Record<string, any>[], coinName: string}) => {
    
    const[chartData, setChartData] = useState([{x: 1, y: 1}]);

    useEffect(()=>{
        const settData = data.sort().map((item)=>{
            return {
                x: new Date(item.createdDate).getTime(),
                y: item[coinName]
            }
        })
        setChartData(settData)
    },[data])

    return (
        <>
            <XYPlot
                xType='time'
                width={700}
                height={300}
            >
                <HorizontalGridLines />
                <VerticalGridLines />
                <XAxis title='Time' />
                <YAxis title='Course' />
                <LineSeries
                    data={
                        chartData
                    }
                    color = "red"
                    style={{ strokeWidth: 2, fill: 'none' }}
                    />
            </XYPlot>
        </>
    )
}
