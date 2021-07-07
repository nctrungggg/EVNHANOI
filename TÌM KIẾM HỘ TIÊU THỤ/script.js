let users = [
  {
    id: "12345",
    name: "Vũ Thanh Hằng",
    cmd: 10230459,
    address: "Hà Nội",
    gender: "Nữ",
    birthDay: "20 / 10 / 2000",
    phone: 1234567890,
    regisDate: "11 / 11 / 2020",
  },

  {
    id: "54321",
    name: "Phạm Kim Cúc",
    cmd: 10987648,
    address: "Thái Bình",
    gender: "Nữ",
    birthDay: "10 / 10 / 2000",
    phone: 1234567890,
    regisDate: "22 / 22 / 2020",
  },
  {
    id: "45678",
    name: "Nguyễn Văn Phúc",
    cmd: 19827584,
    address: "Hà Giang",
    gender: "Nam",
    birthDay: "20 / 10 / 2000",
    phone: 1234567890,
    regisDate: "11 / 11 / 2020",
  },
  {
    id: "98765",
    name: "Nguyễn Chí Trung",
    cmd: 123321123,
    address: "Tuyên Quang",
    gender: "Nam",
    birthDay: "10 / 10 / 2000",
    phone: 1234567890,
    regisDate: "11 / 11 / 2020",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  renderUsers();
});

let html = "";
renderUsers = () => {
  users.forEach((user, index) => {
    html += `
    <tr>
    <th scope="row">${user.id}</th>
    <td>${user.name}</td>
    <td>${user.cmd}</td>
    <td>${user.address}</td>
    <td>${user.gender}</td>
    <td>${user.birthDay}</td>
    <td>${user.phone}</td>
    <td>${user.regisDate}</td>
    </tr>
       `;
  });

  setHTML(".hi", html);
};

//get users
setHTML = (selector, html) => {
  let ussers = document.querySelector(selector);
  ussers.innerHTML = html;
};

//search

// search id
let searchId = document.querySelector(".searchId");
searchId.addEventListener("change", (e) => {
  let id = searchId.value;
  let html = "";
  let filterUsers = users.filter((user) => user.id.includes(id)); //filter ra user có id input nhập vào nằm trong user.id 
  if (filterUsers.length > 0) {
    filterUsers.forEach((user) => {
      html += `
    <tr>
    <th scope="row">${user.id}</th>
    <td>${user.name}</td>
    <td>${user.cmd}</td>
    <td>${user.address}</td>
    <td>${user.gender}</td>
    <td>${user.birthDay}</td>
    <td>${user.phone}</td>
    <td>${user.regisDate}</td>
    </tr>
       `;
      setHTML(".hi", html);
    });
  } else {
    setHTML(".hi", "Không có người dùng phù hợp");
  }
});
