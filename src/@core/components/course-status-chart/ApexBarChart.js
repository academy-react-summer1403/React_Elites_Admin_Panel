// ** Third Party Components
import Chart from 'react-apexcharts'
import Flatpickr from 'react-flatpickr'
import { Calendar } from 'react-feather'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'
import { useEffect, useState } from 'react'
import { allCourseListD } from '../../services/api/Dashboard/AllCourselistD'

const StatusBarChart = ({ info, report }) => {

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
        horizontal: false,
        barHeight: '50%',
        columnWidth: '40%',
        borderRadius: 12,
        borderRadiusApplication: 'end'
      }
    },
    fill: {
      colors: ['#7367f0']
    },
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['شروع ثبت نام', 'منقضی شده', 'درحال برگزاری', 'رزرو ها', 'رزرو تایید شده', 'رزرو تایید نشده']
    },
    yaxis: {
      opposite: 'rtl'
    }
  }

  // ** Chart Series
  const series = [
    {
      data: [allCourse.filter(el => el.statusName == 'شروع ثبت نام').length, report.allReserve, report.allReserveAccept, report.allReserveNotAccept, allCourse.filter(el => el.statusName == 'منقضی شده').length, allCourse.filter(el => el.statusName == 'درحال برگزاری').length]
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
        <Chart options={options} series={series} type='bar' height={300}/>
      </CardBody>
    </Card>
  )
}

export default StatusBarChart
