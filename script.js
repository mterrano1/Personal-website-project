const mlb = document.createElement("mlb");
mlb.src = "https://pbs.twimg.com/media/ElYvRfDXgAU_9m1.jpg:large";

const nfl = document.createElement("img");
nfl.setAttribute("height", "100px");
nfl.setAttribute("width", "100px");
nfl.src = "https://logos-world.net/wp-content/uploads/2020/05/Tampa-Bay-Buccaneers-Logo-1997-2013.png";
const bucs = document.getElementById("teamImg");

const wrong = document.createElement("img");
wrong.setAttribute("height", "200px");
wrong.setAttribute("width", "200px");
wrong.src = "https://images-na.ssl-images-amazon.com/images/I/61+vcHxNc+L.png";
const no = document.getElementById("teamImg");


const input = document.getElementById("myPic");
input.addEventListener("mouseover", function () {
  myPic.src="https://pbs.twimg.com/media/DM2nMrdWsAAkvck.jpg";
});

input.addEventListener("mouseout", function () {
  myPic.src="https://s3-media0.fl.yelpcdn.com/bphoto/UFTXYAIMcVpJigvH_trr2w/348s.jpg";
});

function fn1() {
    const teamAnswer = document.getElementById("team").value;
      if (teamAnswer.toLowerCase() === "dodgers") {
        alert("CORRECT!!!");
      } else {
          alert("Incorrect");
      }
};

function fn2() {
    const nflTeamAnswer = document.getElementById("nflTeam").value;
      if (nflTeamAnswer.toLowerCase() === "buccaneers") {
          bucs.appendChild(nfl);
      } else {
          no.appendChild(wrong);
      }   
};