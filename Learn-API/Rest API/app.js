/**
 * fetch("https://reqres.in/api/users?page=2")
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((res) => {
    let html = "";
    res.data.forEach((item) => {
      html += `<div>${item.email}</div>`;
    });
    document.getElementById("result").innerHTML = html;
    console.log("chinh thuc", res);
  });

 */

axios.get("https://reqres.in/api/users?page=2").then((res) => {
  console.log(res);
});
