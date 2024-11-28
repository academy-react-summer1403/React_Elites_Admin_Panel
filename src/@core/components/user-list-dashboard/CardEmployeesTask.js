// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import Chart from 'react-apexcharts'
import { MoreVertical } from 'react-feather'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

// ** Avatar Imports
import avatar1 from '@src/assets/images/portrait/small/avatar-s-1.jpg'
import avatar9 from '@src/assets/images/portrait/small/avatar-s-9.jpg'
import avatar13 from '@src/assets/images/portrait/small/avatar-s-13.jpg'
import avatar20 from '@src/assets/images/portrait/small/avatar-s-20.jpg'
import avatar16 from '@src/assets/images/portrait/small/avatar-s-16.jpg'

const UsersList = ({ colors, trackBgColor, totalCountU, adminisator, teacher, empAdmin, empWriter, student, courseAssistance, referee, tournamentAdmin, tournamentMentor, support }) => {

  var chart = {
    type: 'radialBar',
    series: [45],
    height: 30,
    width: 30,
    options: {
      grid: {
        show: false,
        padding: {
          left: -15,
          right: -15,
          top: -12,
          bottom: -15
        }
      },
      colors: [colors.primary.main],
      plotOptions: {
        radialBar: {
          hollow: {
            size: '22%'
          },
          track: {
            background: trackBgColor
          },
          dataLabels: {
            showOn: 'always',
            name: {
              show: false
            },
            value: {
              show: false
            }
          }
        }
      },
      stroke: {
        lineCap: 'round'
      }
    }
  }

  return (
    <Card className='containerUsersList'>
      <CardHeader>
        <CardTitle tag='h4' className='DannaB'> لیست نقش ها </CardTitle>
        <MoreVertical size={18} className='cursor-pointer' />
      </CardHeader>
      <CardBody>
                <div className='employee-task d-flex justify-content-between align-items-center roleListItem'>
                  <div className='d-flex'>
                  <img  src='https://img.icons8.com/?size=100&id=ZsCzr7hIS3wT&format=png&color=000000' className='roleAvatar' />
                    <div className='my-auto'>
                      <h6 className='mb-0 DannaM'> مدیر </h6>
                      <small className='DannaM'> {adminisator} </small>
                  </div>
                </div>
                <div className='d-flex align-items-center'>
                  <small className='text-muted me-75 DannaM'> {Math.ceil(adminisator * 100 / totalCountU)}%</small>
                  <Chart
                    options={chart.options}
                    series={[adminisator * 100 / totalCountU]}
                    type={chart.type}
                    height={chart.height}
                    width={chart.width}
                  />
                </div>
              </div>

              <div className='employee-task d-flex justify-content-between align-items-center roleListItem'>
                  <div className='d-flex'>
                    <img  src='https://img.icons8.com/?size=100&id=QrDBhHpXERhW&format=png&color=000000' className='roleAvatar' />
                    <div className='my-auto'>
                      <h6 className='mb-0 DannaM'>  </h6>
                      <small className='DannaM'> {teacher} </small>
                  </div>
                </div>
                <div className='d-flex align-items-center'>
                  <small className='text-muted me-75 DannaM'>{Math.ceil(teacher * 100 / totalCountU)}%</small>
                  <Chart
                    options={chart.options}
                    series={[teacher * 100 / totalCountU]}
                    type={chart.type}
                    height={chart.height}
                    width={chart.width}
                  />
                </div>
              </div>

              <div className='employee-task d-flex justify-content-between align-items-center roleListItem'>
                  <div className='d-flex'>
                  <img  src='https://img.icons8.com/?size=100&id=23347&format=png&color=000000' className='roleAvatar' />
                    <div className='my-auto'>
                      <h6 className='mb-0 DannaM'> ادمین کارمند </h6>
                      <small className='DannaM'> {empAdmin} </small>
                  </div>
                </div>
                <div className='d-flex align-items-center'>
                  <small className='text-muted me-75 DannaM'>{Math.ceil(empAdmin * 100 / totalCountU)}%</small>
                  <Chart
                    options={chart.options}
                    series={[empAdmin * 100 / totalCountU]}
                    type={chart.type}
                    height={chart.height}
                    width={chart.width}
                  />
                </div>
              </div>

              <div className='employee-task d-flex justify-content-between align-items-center roleListItem'>
                  <div className='d-flex'>
                  <img  src='https://img.icons8.com/?size=100&id=gj4D8gcd0a9k&format=png&color=000000' className='roleAvatar' />
                    <div className='my-auto'>
                      <h6 className='mb-0 DannaM'> نویسنده کارمند </h6>
                      <small className='DannaM'> {empWriter} </small>
                  </div>
                </div>
                <div className='d-flex align-items-center'>
                  <small className='text-muted me-75 DannaM'>{Math.ceil(empWriter * 100 / totalCountU)}%</small>
                  <Chart
                    options={chart.options}
                    series={[empWriter * 100 / totalCountU]}
                    type={chart.type}
                    height={chart.height}
                    width={chart.width}
                  />
                </div>
              </div>

              <div className='employee-task d-flex justify-content-between align-items-center roleListItem'>
                  <div className='d-flex'>
                  <img  src='https://img.icons8.com/?size=100&id=23319&format=png&color=000000' className='roleAvatar' />
                    <div className='my-auto'>
                      <h6 className='mb-0 DannaM'> دانش آموز </h6>
                      <small className='DannaM'> {student} </small>
                  </div>
                </div>
                <div className='d-flex align-items-center'>
                  <small className='text-muted me-75 DannaM'>{Math.ceil(student * 100 / totalCountU)}%</small>
                  <Chart
                    options={chart.options}
                    series={[student * 100 / totalCountU]}
                    type={chart.type}
                    height={chart.height}
                    width={chart.width}
                  />
                </div>
              </div>

              <div className='employee-task d-flex justify-content-between align-items-center roleListItem'>
                  <div className='d-flex'>
                  <img  src='https://img.icons8.com/?size=100&id=23345&format=png&color=000000' className='roleAvatar' />
                    <div className='my-auto'>
                      <h6 className='mb-0 DannaM'> دستیار دوره </h6>
                      <small className='DannaM'> {courseAssistance} </small>
                  </div>
                </div>
                <div className='d-flex align-items-center'>
                  <small className='text-muted me-75 DannaM'>{Math.ceil(courseAssistance * 100 / totalCountU)}%</small>
                  <Chart
                    options={chart.options}
                    series={[courseAssistance * 100 / totalCountU]}
                    type={chart.type}
                    height={chart.height}
                    width={chart.width}
                  />
                </div>
              </div>

              <div className='employee-task d-flex justify-content-between align-items-center roleListItem'>
                  <div className='d-flex'>
                  <img  src='https://img.icons8.com/?size=100&id=TzF0HaXGNW16&format=png&color=000000' className='roleAvatar' />
                    <div className='my-auto'>
                      <h6 className='mb-0 DannaM'> داور </h6>
                      <small className='DannaM'> {referee} </small>
                  </div>
                </div>
                <div className='d-flex align-items-center'>
                  <small className='text-muted me-75 DannaM'>{Math.ceil(referee * 100 / totalCountU)}%</small>
                  <Chart
                    options={chart.options}
                    series={[referee * 100 / totalCountU]}
                    type={chart.type}
                    height={chart.height}
                    width={chart.width}
                  />
                </div>
              </div>

              <div className='employee-task d-flex justify-content-between align-items-center roleListItem'>
                  <div className='d-flex'>
                  <img  src='https://img.icons8.com/?size=100&id=23441&format=png&color=000000' className='roleAvatar' />
                    <div className='my-auto'>
                      <h6 className='mb-0 DannaM'> ادمین تورنومنت </h6>
                      <small className='DannaM'> {tournamentAdmin} </small>
                  </div>
                </div>
                <div className='d-flex align-items-center'>
                  <small className='text-muted me-75 DannaM'>{Math.ceil(tournamentAdmin * 100 / totalCountU)}%</small>
                  <Chart
                    options={chart.options}
                    series={[tournamentAdmin * 100 / totalCountU]}
                    type={chart.type}
                    height={chart.height}
                    width={chart.width}
                  />
                </div>
              </div>

              <div className='employee-task d-flex justify-content-between align-items-center roleListItem'>
                  <div className='d-flex'>
                  <img  src='https://img.icons8.com/?size=100&id=WwQvy9RCNgHA&format=png&color=000000' className='roleAvatar' />
                    <div className='my-auto'>
                      <h6 className='mb-0 DannaM'> منتور تورنومنت </h6>
                      <small className='DannaM'> {tournamentMentor} </small>
                  </div>
                </div>
                <div className='d-flex align-items-center'>
                  <small className='text-muted me-75 DannaM'>{Math.ceil(tournamentMentor * 100 / totalCountU)}%</small>
                  <Chart
                    options={chart.options}
                    series={[tournamentMentor * 100 / totalCountU]}
                    type={chart.type}
                    height={chart.height}
                    width={chart.width}
                  />
                </div>
              </div>

              <div className='employee-task d-flex justify-content-between align-items-center roleListItem'>
                  <div className='d-flex'>
                  <img  src='https://img.icons8.com/?size=50&id=l342AIc0m0qQ&format=png&color=000000' className='roleAvatar' />
                    <div className='my-auto'>
                      <h6 className='mb-0 DannaM'> پشتیبان </h6>
                      <small className='DannaM'> {support} </small>
                  </div>
                </div>
                <div className='d-flex align-items-center'>
                  <small className='text-muted me-75 DannaM'>{Math.ceil(teacher * 100 / support)}%</small>
                  <Chart
                    options={chart.options}
                    series={[support * 100 / totalCountU]}
                    type={chart.type}
                    height={chart.height}
                    width={chart.width}
                  />
                </div>
              </div>
      </CardBody>
    </Card>
  )
}

export default UsersList
