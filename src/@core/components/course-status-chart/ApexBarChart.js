// ** Third Party Components
import Chart from 'react-apexcharts'
import Flatpickr from 'react-flatpickr'
import { Calendar } from 'react-feather'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'
import { useEffect, useState } from 'react'
import { allCourseListD } from '../../services/api/Dashboard/AllCourselistD'

const StatusBarChart = ({ info }) => {

  // ** States

  const [totalCount, setTotalCount] = useState(1)
  const [allCourse, setallCourse] = useState([])
  const [cancelledC, setCancelledC] = useState([])
  const [isBeginC, setIsBeginC] = useState([])
  const [isStatrting, setIsStatrting] = useState([])

  // ** Get the Info

  const infoes = async () => {
    let totalC = await allCourseListD(1)
    setTotalCount(totalC.totalCount)

    let res = await allCourseListD(totalCount)

    setallCourse(res.courseDtos)
  }

  // ** UseEffect

  useEffect(() => {
    infoes();
  }, [])
  useEffect(() => {
    infoes();
  }, [totalCount])
  


  // ** Chart Options
  const options = {
    chart: {
      parentHeightOffset: 0,
      fontFamily: 'DannaMedium',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '30%',
        borderRadius: 8,
        borderRadiusApplication: 'end'
      }
    },
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    colors: info,
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['شروع ثیت نام', 'منقضی شده', 'درحال برگزاری']
    },
    yaxis: {
      opposite: 'rtl'
    }
  }

  // ** Chart Series
  const series = [
    {
      data: [allCourse.filter(el => el.statusName == 'شروع ثبت نام').length, allCourse.filter(el => el.statusName == 'منقضی شده').length, allCourse.filter(el => el.statusName == 'درحال برگزاری').length]
    }
  ]

  return (
    <Card className='containerCourseStatusChart'>
      <CardHeader className='d-flex flex-sm-row flex-column justify-content-md-between align-items-start justify-content-start'>
        <div>
          <CardSubtitle className='text-muted mb-25 DannaB'>وضعیت دوره ها</CardSubtitle>
        </div>
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type='bar' height={400}/>
      </CardBody>
    </Card>
  )
}

export default StatusBarChart
