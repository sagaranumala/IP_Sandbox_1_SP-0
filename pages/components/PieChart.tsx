
import { title } from 'process'
import React from 'react'
import Chart from 'react-apexcharts'

const PieChart = () => {
  return (
    <div>
       <Chart 
          type='pie'
          
          height={550}
          series={[23,43,50,54,65]}
          options={{
            title:{
                 text:'completed'
            },
            noData:{text:'empty'},
            labels:['hindi','math','english','sicnce','telugu']
          }}
       />
    </div>
  )
}

export default PieChart
