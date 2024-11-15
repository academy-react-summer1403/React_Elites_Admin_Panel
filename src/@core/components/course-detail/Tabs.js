// ** React Imports
import { Fragment, useEffect, useState } from 'react'

// ** Reactstrap Imports
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'

// ** Icons Imports
import { User, Lock, Bookmark, Bell } from 'react-feather'
import { getCourseGroup } from '../../services/CourseManagement/course-group-by-id'
import DataTable from 'react-data-table-component'
import { groupColumns } from './GroupColumn'

const UserTabs = ({ active, toggleTab, courseDetail, courseGroupObj }) => {

  return (
    <Fragment>
      <Nav pills className='mb-2'>
        <NavItem>
          <NavLink active={active === '1'} onClick={() => toggleTab('1')}>
            <User className='font-medium-3 me-50' />
            <span className='fw-bold'> دانش آموزان </span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '2'} onClick={() => toggleTab('2')}>
            <Lock className='font-medium-3 me-50' />
            <span className='fw-bold'> گروه ها </span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '3'} onClick={() => toggleTab('3')}>
            <Bookmark className='font-medium-3 me-50' />
            <span className='fw-bold'> کامنت ها </span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '4'} onClick={() => toggleTab('4')}>
            <Bell className='font-medium-3 me-50' />
            <span className='fw-bold'> پرداخت ها </span>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={active}>
        <TabPane tabId='1'>

        //for students

        </TabPane>

        <TabPane tabId='2'>
          <DataTable 
            data={courseGroupObj}
            columns={groupColumns}
            className='react-dataTable'
            responsive={true}
            highlightOnHover={true}
          />
        </TabPane>

        <TabPane tabId='3'>

        //for comments

        </TabPane>
        <TabPane tabId='4'>

        //for payments

        </TabPane>
      </TabContent>
    </Fragment>
  )
}
export default UserTabs
