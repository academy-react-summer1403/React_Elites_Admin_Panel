import React from 'react'
import Skeleton from 'react-loading-skeleton'

const CourselistSkeleton = ({cards}) => {
    return Array(cards)
    .fill(0)
    .map((item, i) => (
          <div style={{width: '499px'}}>
              <Skeleton width={499} height={292} baseColor="#dbdbdb" highlightColor="#ffffff" />
              <Skeleton width={499} height={10} count={2} baseColor="#dbdbdb" highlightColor="#ffffff" />
          </div>
    ))
}

export {CourselistSkeleton}