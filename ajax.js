//initial
function _(ele) {
  return document.querySelectorAll(ele);
}

//----------------------AJAX Function---------------------------------

function loc(loc) {
  target = document.querySelector(loc);
  console.log(target);

  function ajax(e) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", e, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 2) {
        target.innerHTML = "Loading....";
      }
      if (xhr.readyState == 4 && xhr.status == 200) {
        target.innerHTML = xhr.responseText;
      }
    };
    xhr.send();
  }
  return { ajax: ajax };
}
//----------------------AJAX Function End--------------------------------

//-----prevent following links of a tag-----
function nav(nav) {
  var nav = _(nav);
  console.log(nav);

  function prevent() {
    nav.forEach(navItems);

    function navItems(item) {
      console.log(item);

      item.addEventListener("click", function(event) {
        event.preventDefault();
        var list = _("body a");
        list.forEach(function(all) {
          all.classList.remove("active");
        });
        console.log(list);
        item.classList.add("active");
      });
    }
  }
  return { prevent: prevent };
}

//--------------end-----------------------
