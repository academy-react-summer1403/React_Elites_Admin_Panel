import { useContext } from 'react'

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardLink,
} from "reactstrap";
import CardMedal from "../@core/components/Card Medal/CardMedal";
import StatsCard from "../@core/components/stats-card/StatsCard";
import Earnings from "../@core/components/earnings/Earnings";
import CompanyTable from "../@core/components/course-list-dashboard/CompanyTable";
import CardEmployeesTasks from '../@core/components/user-list-dashboard/CardEmployeesTask';
import GoalOverview from "../@core/components/applied-courses-percentage/GoalOverview";


import { ThemeColors } from '@src/utility/context/ThemeColors'
import SupportTracker from '../@core/components/comment-applied-percentage/SupportTracker';

const Home = () => {

  // ** Context
  const { colors } = useContext(ThemeColors)


    // ** Vars
  const trackBgColor = '#e9ecef'

  return (
    <div className='containerHome'>
      <CardEmployeesTasks  colors={colors} trackBgColor={trackBgColor}  />
      <StatsCard  cols={{ md: '3', sm: '6', xs: '12' }}  />
      <CompanyTable />
      <GoalOverview />
      <SupportTracker />
    </div>
  );
};

export default Home;
