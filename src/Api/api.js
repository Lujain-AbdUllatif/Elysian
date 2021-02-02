const local = "http://localhost:4000";

export const addExercise = async (data) => {
  try {
    const respone = await fetch(`${local}/tester/addExercise`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });
    const res = await respone.json();
    if (res) {
      console.log("parsed response is: ", res);
    }
  } catch (err) {
    console.log(err);
  }
};
//connect front with back in viewExercises
export const viewExercise = async () => {
  try {
    const responseExercise = await fetch(`${local}/tester/getExercises`);

    const dataExercise = await responseExercise.json();

    if (dataExercise) {
      return dataExercise.data;
    }
  } catch (error) {
    console.log(error);
  }
};

//connect front with back in viewTests
export const viewTest = async () => {
  try {
    const responseTest = await fetch(`${local}/tester/test`);
    // console.log(responseTest);
    const dataTest = await responseTest.json();
    // console.log("dataTest:", dataTest);
    if (dataTest) {
      return dataTest.data;
    }
  } catch (error) {
    console.log(error);
  }
};
