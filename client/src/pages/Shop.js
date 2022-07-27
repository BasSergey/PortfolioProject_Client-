import React, { useContext, useEffect } from 'react';
import TypeBar from '../components/TypeBar';
import AreaBar from '../components/AreaBar';
import { observer } from 'mobx-react-lite';
import CourseList from '../components/CourseList';
import NavBar from '../components/NavBar.js';
import { Context } from '..';
import Pages from '../components/Pages';
import { fetchAreas, fetchCourses, fetchTypes } from '../http/courseAPI';
const Shop = () => {
  const { course } = useContext(Context)


  useEffect(() => {
    fetchTypes().then(data => course.setTypes(data))
    fetchAreas().then(data => course.setAreas(data))
    fetchCourses(null, null, 1, 4).then(data => {
      course.setCourses(data.rows)
      course.setTotalCount(data.count)
    })
  }, [])

  useEffect(() => {
    fetchCourses(course.selectedType.id, course.selectedArea.id, course.page, 4).then(data => {
      course.setCourses(data.rows)
      course.setTotalCount(data.count)
    })
  }, [course.page, course.selectedType, course.selectedArea,])

  return (
    <div>
      <div className='row shop'  >
        <div className='col filter' style={{ animationName: "typeBar", animationDuration: "1.5s" }}>
          <TypeBar />
          <AreaBar />
        </div>
        <div className='col course-list' style={{animationName: "areaBar", animationDuration: "1s" }} >
          <CourseList />
          <Pages />
        </div>
      </div>
      <NavBar />
    </div>

  );
}

export default observer(Shop);

