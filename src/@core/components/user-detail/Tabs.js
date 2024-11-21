// ** React Imports
import { Fragment, useEffect, useState } from 'react'

// ** Reactstrap Imports
import { CardGroup, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'

// ** Icons Imports
import { User, Lock, Bookmark, Bell, Users, MessageSquare, DollarSign, Package, MessageCircle } from 'react-feather'
import DataTable from 'react-data-table-component'
import { userCoursee } from './userCourse'
import { userReservee } from './userReserve'

const UserTabs = ({ active, toggleTab, userCourse, userReserve, userDetail }) => {

  return (
    <Fragment>
      <Nav pills className='mb-2'>
        <NavItem>
          <NavLink active={active === '1'} onClick={() => toggleTab('1')}>
            <Package className='font-medium-3 me-50' />
            <span className='fw-bold DannaM'> دوره ها  </span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '2'} onClick={() => toggleTab('2')}>
            <Package className='font-medium-3 me-50' />
            <span className='fw-bold DannaM'> رزرو ها </span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '3'} onClick={() => toggleTab('3')}>
            <MessageCircle className='font-medium-3 me-50' />
            <span className='fw-bold DannaM'> راه های ارتباطی </span>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={active}>
        <TabPane tabId='1'>
        <DataTable 
            data={userCourse}
            columns={userCoursee}
            className='react-dataTable'
            responsive={true}
            highlightOnHover={true}
          />
        </TabPane>
        <TabPane tabId='2'>
        <DataTable 
            data={userReserve}
            columns={userReservee}
            className='react-dataTable'
            responsive={true}
            highlightOnHover={true}
          />
        </TabPane>
        <TabPane tabId='3'>
        <div className='socialContainer'>
          <div className='socialHolder'>
          <div className='telegram DannaB'></div>
          <div className='socialText DannaB'> تلگرام : </div>
          <a href={userDetail?.telegramLink} className='DannaM'>{userDetail?.telegramLink}</a>
          </div>
          <div className='socialHolder'>
          <div className='linkedin DannaB'></div>
          <div className='socialText DannaB'> لینکدین : </div>
          <a href={userDetail?.linkdinProfile} className='DannaM'>{userDetail?.linkdinProfile}</a>
          </div>
        </div>
        </TabPane>
      </TabContent>
    </Fragment>
  )
}
export default UserTabs
