// ** React Imports
import { Fragment, useEffect, useState } from 'react'

// ** Reactstrap Imports
import { CardGroup, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'

// ** Icons Imports
import { User, Lock, Bookmark, Bell, Users, MessageSquare, DollarSign, File } from 'react-feather'
import DataTable from 'react-data-table-component'
import { fileColumn } from './FileColumn'
import { commentColumn } from './CommentColumn'

const UserTabs = ({ active, toggleTab, blogFiles, blogComment}) => {

  return (
    <Fragment>
      <Nav pills className='mb-2'>
        <NavItem>
          <NavLink active={active === '1'} onClick={() => toggleTab('1')}>
            <File className='font-medium-3 me-50' />
            <span className='fw-bold DannaM'> فایل ها </span>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink active={active === '2'} onClick={() => toggleTab('2')}>
            <MessageSquare className='font-medium-3 me-50' />
            <span className='fw-bold DannaM'> کامنت ها </span>
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={active}>
        <TabPane tabId='1'>
        <DataTable 
            data={blogFiles}
            columns={fileColumn}
            className='react-dataTable'
            responsive={true}
            highlightOnHover={true}
          />
        </TabPane>

        <TabPane tabId='2'>
        <DataTable 
            data={blogComment}
            columns={commentColumn}
            className='react-dataTable'
            responsive={true}
            highlightOnHover={true}
          />
        </TabPane>
      </TabContent>
    </Fragment>
  )
}
export default UserTabs