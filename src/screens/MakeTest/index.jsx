import React from 'react'
import './style.css'

// Importing components
import TesterHeader from '../../components/TesterHeader'
import ImageSet from '../../components/ImageSet'
import Button from '../../components/Btn'

const data = [
  {
    exNum: 'Exercise 1',
    src: [
      'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
      'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
      'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
      'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
      'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
    ],
  },
  {
    exNum: 'Exercise 2',
    src: [
      'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
      'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
      'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
      'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
      'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
      'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
    ],
  },
  {
    exNum: 'Exercise 3',
    src: [
      'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
      'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
      'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
    ],
  },
  {
    exNum: 'Exercise 4',
    src: [
      'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
      'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
    ],
  },
  {
    exNum: 'Exercise 5',
    src: [
      'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
    ],
  },
]

export default function MakeTest(props) {
  return (
    <div className='make-test-container'>
      <TesterHeader text='Make Test' />
      <div className='make-test-inputs'>
        <input type='text' placeHolder='Test Name' />
        <input type='number' placeHolder='Time(minutes)' />
      </div>
      <div className='exercises'>
        {data.map((ex) => {
          return (
            <div className='exercise'>
              <div className='check-and-name'>
                <input
                  type='checkbox'
                  id={ex.exNum}
                  name={ex.exNum}
                  value={ex.exNum}
                  onChange={(e) => e.target.classList.toggle('green')}
                />
                <label for={ex.exNum}>{ex.exNum}</label>
              </div>

              <div>
                <ImageSet className='images' images={ex.src} />
              </div>
            </div>
          )
        })}
      </div>
      <Button label='Make Test' />
    </div>
  )
}
