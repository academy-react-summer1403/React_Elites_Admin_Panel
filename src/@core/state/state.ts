import { createGlobalState } from "react-hooks-global-state";

const { useGlobalState } = createGlobalState({
    sthChangedCourseList: true,
    sthChangedCourseDetail: true,
    sthChangedBlogList: true,
    sthChangedBlogDetail: true,
    sthChangedUserDetail: true,
    sthChangedCommentList: true,
})


export {useGlobalState}