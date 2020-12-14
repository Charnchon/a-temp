import { Index, TimeSeries } from 'pondjs'
import React from 'react'
import { ChartContainer, ChartRow, Charts, LineChart, styler, YAxis } from 'react-timeseries-charts'
import data2 from '../../services/Data'
import { GraphComponents, GraphDetails } from './GraphElements'

class Graph extends React.Component {
  constructor(props) {
    super(props)
    console.log(data2)
    let x = data2.values.map(([d, value]) => [Index.getIndexString('1h', new Date(d)), value])
    console.log(x)
    const series = {
      name: 'weather',
      columns: ['time', 'temp'],
      points: [
        [1607666430, 25.544],
      ],
    }
    this.state = {
      series: new TimeSeries(series),
    }
  }

  componentDidMount() {
    const p = '/query?db=dii&q=SELECT%20mean(%22d_temperature%22)%20FROM%20%22v1%22%20WHERE%20(%22topic%22%20%3D%20%27dii%2FArm-001%2Fstatus%27)%20AND%20time%20%3E%3D%20now()%20-%203h%20GROUP%20BY%20time(15s)%20fill(null)%3BSELECT%20mean(%22d_temperature%22)%20FROM%20%22v1%22%20WHERE%20(%22topic%22%20%3D%20%27dii%2FBoat-001%2Fstatus%27)%20AND%20time%20%3E%3D%20now()%20-%203h%20GROUP%20BY%20time(15s)%20fill(null)&epoch=ms'
    fetch(p)
      .then((res) => res.json())
      .then((json) => {
        const d = {
          data: json.results[0].series[0].values
        }
        console.log(d)
        const series = {
          name: 'weather',
          columns: ['time', 'temp'],
          points: d.data,
        }
        this.setState({
          data: d.data,
          series: new TimeSeries(series),
        })
      })
  }

  render() {
    console.log(this.state.series)
    let series1 = this.state.series
    let tempSeries = this.state.series
    window.series = series1

    const style = styler([
      {
        key: 'precip',
        color: '#A5C8E1',
        selected: '#2CB1CF',
      },
      {
        key: 'temp',
        color: '#A5C8E1',
        selected: '#2CB1CF',
      },
    ])

    return (
      <GraphComponents>
        <h1>GRAPH</h1>
        <GraphDetails>
          <ChartContainer
            utc={this.state.mode === 'utc'}
            timeRange={tempSeries.timerange()}
            showGrid={true}
            showGridPosition="over"
            trackerPosition={this.state.tracker}
            trackerTimeFormat="%X"
            onTrackerChanged={(tracker) => this.setState({ tracker })}
          >
            <ChartRow height="350">
              <YAxis
                id="temp"
                label="Temperature (°C)"
                // labelOffset={-5}
                style={style.axisStyle('temp')}
                min={tempSeries.min('temp')}
                max={tempSeries.max('temp')}
                width="50"
                type="linear"
                format=",.1f"
              />
              <Charts>
                <LineChart axis="temp" series={tempSeries} columns={['temp']} style={style} />
                {/* <LineChart
                  axis="pressure"
                  series={pressureSeries}
                  columns={['pressure']}
                  style={style}
                /> */}
              </Charts>
            </ChartRow>
          </ChartContainer>
        </GraphDetails>
      </GraphComponents>
    )
  }
}

export default Graph
