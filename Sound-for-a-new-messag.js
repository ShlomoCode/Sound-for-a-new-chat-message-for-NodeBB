function play(select) {
  var audio;
  audio = new Audio(
    "https://madrichim.ovh/assets/uploads/sounds/new-chat-message" +
      select +
      ".mp3"
  );
  audio.play();
}

function testSelectedZlil() {
  if (
    localStorage.getItem("zlil") !== null &&
    localStorage.getItem("zlil") !== undefined
  ) {
    return localStorage.getItem("zlil");
  } else {
    return 1;
  }
}
function SelectedZlilBox() {
  let selected;
  bootbox.dialog({
    title: "בחירת צליל להודעות צ'אט",
    message: "<p>אנא בחר צליל להתראה על הודעת צ'אט חדשה.</p>",
    onEscape: true,
    backdrop: true,
    size: "large",
    buttons: {
      reset: {
        label: "איפוס",
        className: "",
        callback: function () {
          play(1);
          localStorage.removeItem("zlil");
          return false;
        },
      },
      0: {
        label: "1",
        className: "btn-warning",
        callback: function () {
          play(0);
          selected = 0;
          return false;
        },
      },
      1: {
        label: "2",
        className: "btn-warning",
        callback: function () {
          play(1);
          selected = 1;
          return false;
        },
      },
      2: {
        label: "3",
        className: "btn-warning",
        callback: function () {
          play(2);
          selected = 2;
          return false;
        },
      },
      3: {
        label: "4",
        className: "btn-warning",
        callback: function () {
          play(3);
          selected = 3;
          return false;
        },
      },
      4: {
        label: "5",
        className: "btn-warning",
        callback: function () {
          play(4);
          selected = 4;
          return false;
        },
      },
      5: {
        label: "6",
        className: "btn-warning",
        callback: function () {
          play(5);
          selected = 5;
          return false;
        },
      },
      6: {
        label: "7",
        className: "btn-warning",
        callback: function () {
          play(6);
          selected = 6;
          return false;
        },
      },
      7: {
        label: "8",
        className: "btn-warning",
        callback: function () {
          play(7);
          selected = 7;
          return false;
        },
      },
      8: {
        label: "9",
        className: "btn-warning",
        callback: function () {
          play(8);
          selected = 8;
          return false;
        },
      },
      9: {
        label: "10",
        className: "btn-warning",
        callback: function () {
          play(9);
          selected = 9;
          return false;
        },
      },
      ok: {
        label: "שמירה (חובה!)",
        className: "btn-success",
        callback: function () {
          localStorage.setItem("zlil", selected);
        },
      },
    },
  });
}

const SettingsBtn = document.createElement("div");
$(SettingsBtn).attr({
  id: "SettingsBtn",
});
$(SettingsBtn).css({
  position: "fixed",
  top: "12%",
  left: "1%",
  border: "solid 1px",
  padding: "5px",
  "border-radius": "5px",
  "background-color": "rgba(187,231,255,0.44)",
});
$(SettingsBtn).addClass("fas fa-cogs");
document.body.appendChild(SettingsBtn);

$("#SettingsBtn").click(function () { 
  SelectedZlilBox()
});
socket.on("event:chats.receive", function (data) {
  // data.message.newSet === true &&
  if (data.self === 0) {
    play(testSelectedZlil());
  }
});

// $("#SelectedAudio").on("click", function () {
//   play(document.getElementById("SelectedAudio").options.selectedIndex);
// });
// {
//   /* <button onclick="testPlay">Try it</button> */
// }
