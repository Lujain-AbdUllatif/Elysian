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
