const local = 'http://localhost:4000'

export const addExercise = async (data) => {
  try {
    const respone = await fetch(`${local}/tester/addExercise`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    })
    const res = await respone.json()
    if (res) {
      console.log('parsed response is: ', res)
    }
  } catch (err) {
    console.log(err)
  }
}

//connect front with back in viewExercises
export const viewExercise = async () => {
  try {
    const access_token = localStorage.getItem("access_token");
    const tests_id = localStorage.getItem("tests_id");
    const testsid = JSON.parse(tests_id);
    const response = await fetch(`${local}/tester/exercises`, {
      method: 'POST',
      headers: {
<<<<<<< HEAD
        "Content-Type": "application/json",
        access_token: access_token,
      },
      body: JSON.stringify({
        tests_id: { tests_id: testsid },
=======
        'Content-Type': 'application/json',
        access_token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMTZmMWUwNjY2YjY0MTE0MGJiZGM4OCIsInJvbGUiOiJ0ZXN0ZXIiLCJpYXQiOjE2MTIxMTcyMTZ9.iSNlXyHD5rNAdJrlI0EwckFWFmHkGrheMaf-XpmmjoM',
      },
      body: JSON.stringify({
        tests_id: [
          '6015948eba159f12050993cf',
          '601594dbba159f12050993d0',
          '6016f3cb666b641140bbdc8a',
          '60184dd0808df20def34efd1',
        ],
>>>>>>> main
      }),
    })

    const dataExercise = await response.json()
    console.log('dataExercise:', dataExercise)
    if (dataExercise) {
      return dataExercise
    }
  } catch (err) {
    console.log(err)
  }
}

//connect front with back in viewTests

export const viewTest = async () => {
  try {
    const access_token = localStorage.getItem("access_token");
    const tests_id = localStorage.getItem("tests_id");
    console.log("tests_id:", JSON.parse(tests_id));
    const testsid = JSON.parse(tests_id);
    const responseTest = await fetch(`${local}/tester/tests`, {
      method: 'POST',
      headers: {
<<<<<<< HEAD
        "content-Type": "application/json",

        access_token:
          // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMTZmMWUwNjY2YjY0MTE0MGJiZGM4OCIsInJvbGUiOiJ0ZXN0ZXIiLCJpYXQiOjE2MTIxOTU1MDd9.xFBUimnzJZLnvYKjpivm0xlE-bl67rG60jfEpNaBs1Y",
          access_token,
      },

      body: JSON.stringify({ tests_id: testsid }),
    });
    const dataTest = await responseTest.json();
    console.log("dataTest:", dataTest.data);
=======
        'content-Type': 'application/json',
        access_token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMTZmMWUwNjY2YjY0MTE0MGJiZGM4OCIsInJvbGUiOiJ0ZXN0ZXIiLCJpYXQiOjE2MTIxOTU1MDd9.xFBUimnzJZLnvYKjpivm0xlE-bl67rG60jfEpNaBs1Y',
      },
      body: JSON.stringify({
        tests_id: [
          '6015948eba159f12050993cf',
          '601594dbba159f12050993d0',
          '6016f3cb666b641140bbdc8a',
          '60184dd0808df20def34efd1',
        ],
      }),
    })

    const dataTest = await responseTest.json()
    console.log('dataTest:', dataTest.data)
>>>>>>> main
    if (dataTest) {
      return dataTest.data
    }
  } catch (error) {
    console.log(error)
  }
<<<<<<< HEAD
};
=======
}

//{
>>>>>>> main
