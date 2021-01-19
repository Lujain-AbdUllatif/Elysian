import React from "react";
import { DeleteIcon, ViewIcon, EditIcon } from "../../icons";
import ImageSet from "../../components/ImageSet";
import "./style.css";
const detailsTest = [
  {
    exercise: "Exercise 1",
    src: [
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
    ],
  },
  {
    exercise: "Exercise 2",
    src: [
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
    ],
  },
  {
    exercise: "Exercise 3",
    src: [
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
    ],
  },
  {
    exercise: "Exercise 4",
    src: [
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
    ],
  },
  {
    exercise: "Exercise 5",
    src: [
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
    ],
  },
];

const LineTest = (props) => {
  const [eyeClick, setEyeClick] = React.useState(false);
  const [deleteClick, setDeleteClick] = React.useState(false);
  const [editClick, setEditClick] = React.useState(false);
  const handleClick = () => {};

  const handleShowExe = () => {
    setEyeClick((prev) => !prev);
  };
  return (
    <div>
      <div className="page-view-line">
        <h3>{props.text}</h3>
        <div className="icons-line">
          <button
            onClick={() => props.onDelete(props.index)}
            className="line-btns"
          >
            <DeleteIcon />
          </button>
          <button onClick={handleClick} className="line-btns">
            <EditIcon />
          </button>

          <button onClick={handleShowExe} className="line-btns">
            <ViewIcon />
          </button>
        </div>
      </div>
      {eyeClick ? (
        <div className="main-details-Test">
          {detailsTest.map((datalist) => {
            return (
              <div className="exercises">
                <div className="exercise">
                  {datalist.exercise}
                  <ImageSet className="images" images={datalist.src} />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default LineTest;
