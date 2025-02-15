export const serverFetch = async ({ method, data, endpoint, headers }) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  try {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(data);

    var requestOptions = {
      method: method,
      headers: headers ?? myHeaders,
      body: data ? raw : undefined,
      redirect: "follow",
    };

    const res = await fetch(endpoint, requestOptions);
    let response = await res.json();

    return { response, status: res.status };
  } catch (error) {
    //console.log(error);
    return { status: 400 };
  }
};
