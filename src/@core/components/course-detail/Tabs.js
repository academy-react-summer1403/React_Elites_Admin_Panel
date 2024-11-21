// ** React Imports
import { Fragment, useEffect, useState } from 'react'

// ** Reactstrap Imports
import { CardGroup, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'

// ** Icons Imports
import { User, Lock, Bookmark, Bell, Users, MessageSquare, DollarSign } from 'react-feather'
import DataTable from 'react-data-table-component'
import { groupColumns } from './GroupColumn'
import { userColumn } from './UserColumn'
import { paymentColumn } from './PaymentColumn'
import { commentColumn } from './CommentColumn'

const UserTabs = ({ active, toggleTab, courseDetail, courseGroupObj, courseuser, coursenotDonePayment, courseDonePayment, courseComment }) => {

  return (
    <Fragment>
      <Nav pills className='mb-2'>
        <NavItem>
          <NavLink active={active === '1'} onClick={() => toggleTab('1')}>
            <User className='font-medium-3 me-50' />
            <span className='fw-bold DannaM'> دانش آموزان </span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '2'} onClick={() => toggleTab('2')}>
            <Users className='font-medium-3 me-50' />
            <span className='fw-bold DannaM'> گروه ها </span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '3'} onClick={() => toggleTab('3')}>
            <MessageSquare className='font-medium-3 me-50' />
            <span className='fw-bold DannaM'> کامنت ها </span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '4'} onClick={() => toggleTab('4')}>
            <DollarSign className='font-medium-3 me-50' />
            <span className='fw-bold DannaM'> پرداخت ها </span>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={active}>
        <TabPane tabId='1'>
        <DataTable 
            data={courseuser}
            columns={userColumn}
            className='react-dataTable'
            responsive={true}
            highlightOnHover={true}
          />

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

        <DataTable 
            data={courseComment}
            columns={commentColumn}
            className='react-dataTable'
            responsive={true}
            highlightOnHover={true}
          />

        </TabPane>
        <TabPane tabId='4' className='tab'>
          <div className='w50 green'> پرداخت انجام شد
            <DataTable 
              data={courseDonePayment}
              columns={paymentColumn}
              className='react-dataTable'
              responsive={true}
              highlightOnHover={true}
            />
          </div>
          <div className='w50 red'> پرداخت انجام نشد
          <DataTable 
            data={coursenotDonePayment}
            columns={paymentColumn}
            className='react-dataTable'
            responsive={true}
            highlightOnHover={true}
          />
          </div>
        </TabPane>
      </TabContent>
    </Fragment>
  )
}
export default UserTabs