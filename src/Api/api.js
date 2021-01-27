const local = "http://localhost:4000";

export const addExercise = async (data) => {
  try {
    const respone = await fetch(`${local}/tester/addExercise`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ data: data }),
    });
    console.log(data);
    const res = await respone.json();
    if (res) {
      console.log(res);
    }
  } catch (err) {
    console.log(err);
  }
};
