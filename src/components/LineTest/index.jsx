import React, { useEffect, useState } from 'react'
import { DeleteIcon, ViewIcon, EditIcon } from '../../icons'
import ImageSet from '../../components/ImageSet'
import ExercisesTest from '../ExercisesTests'
import './style.css'
const LineTest = (props) => {
  const [eyeClick, setEyeClick] = React.useState(false)
  // const [deleteClick, setDeleteClick] = React.useState(false);
  // const [editClick, setEditClick] = React.useState(false);
  const handleClick = () => {}

  const handleShowExe = () => {
    setEyeClick((prev) => !prev)
  }

  return (
    <div>
      <div className='page-view-line'>
        <h3>{props.text}</h3>
        <div className='icons-line'>
          <button
            onClick={() => props.onDelete(props.index)}
            className='line-btns'
          >
            <DeleteIcon />
          </button>
          <button onClick={handleClick} className='line-btns'>
            <EditIcon />
          </button>

          <button onClick={handleShowExe} className='line-btns'>
            <ViewIcon />
          </button>
        </div>
      </div>
      {eyeClick ? (
        <div className='main-details-Test'>
          {console.log(props.TestData.exercises)}
          <div className='exercises'>
            <div className='exercise'>
              <ExercisesTest exercises={props.TestData.exercises} />
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}
export default LineTest
