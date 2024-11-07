// ** React Imports
import { useEffect, useState } from 'react'

// ** Third Party Components
import axios from 'axios'
import Chart from 'react-apexcharts'

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown
} from 'reactstrap'

const CommentAppliedPercentage = props => {
  // ** State
  // const [data, setData] = useState(null)

  // useEffect(() => {
  //   axios.get('/card/card-analytics/support-tracker').then(res => setData(res.data))
  //   return () => setData(null)
  // }, [])

  const options = {
      plotOptions: {
        radialBar: {
          size: 150,
          offsetY: 20,
          startAngle: -150,
          endAngle: 150,
          hollow: {
            size: '65%'
          },
          track: {
            background: '#fff',
            strokeWidth: '100%'
          },
          dataLabels: {
            name: {
              offsetY: -5,
              fontFamily: 'Montserrat',
              fontSize: '1rem'
            },
            value: {
              offsetY: 15,
              fontFamily: 'Montserrat',
              fontSize: '1.714rem'
            }
          }
        }
      },
      colors: [props.danger],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: ["#20E647"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        dashArray: 8
      },
      labels: ['کامنت های تایید شده']
    },
    series = [83]

  return (
    <Card className='containerAppliedComments'>
      <CardHeader className='pb-0'>
        <CardTitle tag='h4' className='DannaB'> کامنت های تایید شده </CardTitle>
        <UncontrolledDropdown className='chart-dropdown'>
          <DropdownMenu end>
          </DropdownMenu>
        </UncontrolledDropdown>
      </CardHeader>
      <CardBody>
        <Row className='d-flex justify-content-center'>
          <Col sm='10' className='d-flex justify-content-center'>
            <Chart options={options} series={series} type='radialBar' height={270} id='support-tracker-card' />
          </Col>
        </Row>
        <div className='d-flex justify-content-between mt-4'>
          <div className='text-center'>
            <CardText className='mb-50 DannaM'> تایید نشده </CardText>
            <span className='font-large-1 fw-bold'>10</span>
          </div>
          <div className='text-center'>
            <CardText className='mb-50 DannaM'> تایید شده </CardText>
            <span className='font-large-1 fw-bold'>30</span>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
export default CommentAppliedPercentage
