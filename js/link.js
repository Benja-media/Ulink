     const header = document.querySelector('header');
    const section = document.querySelector('section');

    let requestURL = '/config/config.json';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'text';
    request.send();

    request.onload = function() {
      const js_res = request.response;
      const js_par = JSON.parse(js_res);
      writeHeader(js_par);
      js_obj(js_par);
    }

    function writeHeader(jsonObj) {
      const myImg = document.createElement('img')
      myImg.src = jsonObj['photo']; 
      header.appendChild(myImg);

      const myH1 = document.createElement('a');
      myH1.textContent = jsonObj['name'];
      myH1.setAttribute('href', jsonObj['profile']);
      myH1.setAttribute('class', "h1");
      myH1.setAttribute("id", "h1");
      header.appendChild(myH1);

      const p = document.createElement('p');
      p.textContent = jsonObj['symbol'] + jsonObj['user'];
      header.appendChild(p);
    }

    function js_obj(jsonObj) {
      const links = jsonObj['links'];

      for(let i = 0; i < links.length; i++) {
        const list = document.createElement('link_list');
        const h2 = document.createElement('h2');
        const link = document.createElement('a');
        const url = document.createElement('p');
        const myList = document.createElement('ul');

        h2.textContent = links[i].name;
        link.textContent = links[i].title;
        link.setAttribute('href', links[i].url);
        link.setAttribute('class', "link");
        link.setAttribute("id", links[i].id + "-title");

        list.appendChild(h2);
        list.appendChild(link);
        list.appendChild(url);
        list.appendChild(myList);

        section.appendChild(list);
      }
    }

