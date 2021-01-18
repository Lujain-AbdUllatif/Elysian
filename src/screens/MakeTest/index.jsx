import React from "react";
import "./style.css";

// Importing components
import TesterHeader from "../../components/TesterHeader";
import ImageSet from "../../components/ImageSet";
import Button from "../../components/Btn";

const data = [
  {
    name: "ex1",
    src: [
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
    ],
  },
  {
    name: "ex2",
    src: [
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
    ],
  },
  {
    name: "ex3",
    src: [
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
    ],
  },
  {
    name: "ex4",
    src: [
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
    ],
  },
  {
    name: "ex5",
    src: [
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
    ],
  },
];

export default function MakeTest(props) {
  return (
    <div className="make-test-container">
      <TesterHeader text="Make Test" />
      <div className="make-test-inputs">
        <input type="text" placeHolder="Test Name" />
        <input type="number" placeHolder="Time(min)" />
      </div>
      {data.map((ex) => {
        return (
          <div>
            <input
              type="checkbox"
              id={ex.name}
              name={ex.name}
              value={ex.name}
            />
            <label for={ex.name}>{ex.name}</label>
            <div>
              <ImageSet images={ex.src} />
            </div>
          </div>
        );
      })}
      <Button label="Make Test" />
    </div>
  );
}
