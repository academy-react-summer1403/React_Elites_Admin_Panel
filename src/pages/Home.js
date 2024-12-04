import { useContext, useEffect, useState } from 'react'

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardLink,
} from "reactstrap";
import StatsCard from "../@core/components/stats-card/StatsCard";
import CourseListDash from "../@core/components/course-list-dashboard/CompanyTable";
import UsersList from '../@core/components/user-list-dashboard/CardEmployeesTask';
import BlogsAppliedPercentage from "../@core/components/applied-blogs-percentage/GoalOverview";
import {statistics} from '../@core/services/api/Dashboard/Statistics'
import CourseAppliedPercentage from '../@core/components/applied-courses-percentage/GoalOverview';
import BlogsListDash from '../@core/components/blogs-list-dashboard/CompanyTable';
import StatusBarChart from '../@core/components/course-status-chart/ApexBarChart';
import { courseAppliedPercentage } from '../@core/services/api/Dashboard/CourseAppliedPercentage';


import { ThemeColors } from '@src/utility/context/ThemeColors'
import { blogsAppliedPercentage } from '../@core/services/api/Dashboard/BlogsAppliedPercentage';
import { allUserList } from '../@core/services/api/Dashboard/AllUserList';
import { userWithRole } from '../@core/services/api/Dashboard/UserWithRole';
import PacmanLoader from 'react-spinners/PacmanLoader';

const Home = () => {

  const [dataArr, setDataArr] = useState({})
  const [allCourse, setAllCourse] = useState([])
  const [totalCount, setTotalCount] = useState()
  const [activeCourse, setActiveCourse] = useState([])
  const [notActiveCourse, setNotActiveCourse] = useState([])

  const [totalCountB, setTotalCountB] = useState()
  const [activeBlogs, setActiveBlogs] = useState()
  const [notActiveBlogs, setNotActiveBlogs] = useState()

  const [totalCountU, setTotalCountU] = useState([])
  const [adminisator, setAdminisator] = useState()
  const [teacher, setTeacher] = useState()
  const [empAdmin, setEmpAdmin] = useState()
  const [empWriter, setEmpWriter] = useState()
  const [student, setStudent] = useState()
  const [courseAssistance, setCourseAssistance] = useState()
  const [tournamentAdmin, setTournamentAdmin] = useState()
  const [referee, setReferee] = useState()
  const [tournamentMentor, setTournamentMentor] = useState()
  const [support, setSupport] = useState()
  const [isLoading, setisLoading] = useState(true)

  const getStatisticsInfo = async () => {
    let res = await statistics();
    setDataArr(res)
  }

  const getPercentage =  async () => {
    let res2 = await courseAppliedPercentage();
    setAllCourse(res2);
    setTotalCount(res2.totalCount);
    setActiveCourse(res2.courseDtos.filter(el => el.isActive == true));
    setNotActiveCourse(res2.courseDtos.filter(el => el.isActive == false));

    let res3 = await blogsAppliedPercentage(false);
    let res4 = await blogsAppliedPercentage(true);
    setNotActiveBlogs(res3.totalCount);
    setActiveBlogs(res4.totalCount)
    setTotalCountB(res3.totalCount + res4.totalCount);

    let res5 = await allUserList();
    setTotalCountU(res5.totalCount)

    let res6 = await userWithRole(1);
    setAdminisator(res6.totalCount)

    let res7 = await userWithRole(2);
    setTeacher(res7.totalCount)

    let res8 = await userWithRole(3);
    setEmpAdmin(res8.totalCount)

    let res9 = await userWithRole(4);
    setEmpWriter(res9.totalCount)

    let res10 = await userWithRole(5);
    setStudent(res10.totalCount)

    let res11 = await userWithRole(6);
    setCourseAssistance(res11.totalCount)

    let res12 = await userWithRole(7);
    setTournamentAdmin(res12.totalCount)

    let res13 = await userWithRole(8);
    setReferee(res13.totalCount)

    let res14 = await userWithRole(9);
    setTournamentMentor(res14.totalCount)

    let res15 = await userWithRole(2);
    setSupport(res15.totalCount)

    setisLoading(false)
  }

  useEffect(() => {
    getStatisticsInfo();
    getPercentage();
  }, [])

  // ** Context
  const { colors } = useContext(ThemeColors)


    // ** Vars
  const trackBgColor = '#e9ecef'

  return (
    <div className='containerHome'>
      {isLoading && 
      <div className="loader">
        <PacmanLoader color="#7367f0" />
      </div>
      }
      {isLoading == false && 
      <>
        <UsersList  
        colors={colors} 
        trackBgColor={trackBgColor} 
        totalCountU={totalCountU}
        adminisator={adminisator}
        teacher={teacher}
        empAdmin={empAdmin}
        empWriter={empWriter}
        student={student}
        courseAssistance={courseAssistance}
        tournamentAdmin={tournamentAdmin}
        referee={referee}
        tournamentMentor={tournamentMentor}
        support={support}
        />
      <StatsCard dataArr={dataArr}  cols={{ md: '3', sm: '6', xs: '12' }}  />
      <CourseListDash />
      <BlogsAppliedPercentage activeBlogs={activeBlogs} totalCountB={totalCountB} notActiveBlogs={notActiveBlogs} />
      <CourseAppliedPercentage activeCourse={activeCourse} totalCount={totalCount} notActiveCourse={notActiveCourse} />
      <BlogsListDash />
      <StatusBarChart />
      </>
      }
    </div>
  );
};

export default Home;
