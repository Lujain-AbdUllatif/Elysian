import React, { useEffect, useState } from 'react'
import LineTest from '../../components/LineTest'
import TesterHeader from '../../components/TesterHeader'
import { viewTest } from '../../Api/api'

import './style.css'

export default function ViewTests() {
  const [Tests, setTests] = React.useState([])

  const deleteTest = (index) => {
    Tests[index] = 'delete'
    setTests((prevExes) => prevExes.filter((exe) => exe !== 'delete'))
  }
  useEffect(async () => {
    const Tests = await viewTest()
    console.log('data test:', Tests)
    setTests(Tests)
  }, [])
  return (
    <div className='ViewTest'>
      <TesterHeader text='View-Tests' />
      {Tests.map((test, i) => {
        return (
          <LineTest
            key={test.name}
            index={i}
            text={test.name}
            TestData={test}
            onDelete={deleteTest}
          />
        )
      })}
    </div>
  )
}
