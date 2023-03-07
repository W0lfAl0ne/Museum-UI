var tiditem, tidlist, items = [], itemsimg = [];

var data = {
    "trealet": {
        "exec": "streamline"
    }
};

fetch('./local.json')
.then(response => response.json())
.then(function (data) {
    console.log(data);
});


function ctheme() {
    data["trealet"]["title"] = document.getElementById("title").value;
    data["trealet"]["desc"] = document.getElementById("desc").value;
    data["trealet"]["img"] = document.getElementById("Timg").value;
    data["trealet"]["items"] = items;

    // var xmlhttp = new XMLHttpRequest();
    // xmlhttp.open("POST", "admin.php", true);
    // xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // xmlhttp.send("data=" + JSON.stringify(data));

    var element = document.createElement('a');
	

    element.href = 'data:text/plain;charset=utf-8,' + JSON.stringify(data);
    element.download = 'example.trealet';
    element.target ='_blank';
	element.style.display = 'none';
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);

    items = [], itemsimg = [],
    data = {
        "trealet": {
            "exec": "streamline"
        }
    };


    document.getElementById("title").value = "";
    document.getElementById("Timg").value = "";
    document.getElementById("desc").value = "";

    clearitem();
    clearitemp();
    loadListimg();
    loaditems();

}

function creatItem() {
    let item = {};
    item["ID"] = creatID(items);
    item["name"] = document.getElementById("itemname").value;
    item["img"] = document.getElementById("itemimg").value;
    item["audio"] = document.getElementById("iaudio").value;
    item["desc"] = document.getElementById("idesc").value;
    item["items"] = [];
    items.push(item);

    clearitem();
    loaditems();
}

function deleteItem() {
    for (let i = 0; i < items.length; i++) {
        if (items[i]["ID"] == document.getElementById("idItem").textContent) {
            itemsimg = items[i];
            let newArray = items.filter(t => t !== itemsimg);
            items = newArray;
            break;
        }
    }
    clearitem();
    loaditems();
    document.getElementById("idItem").innerHTML = "";
    clearitemp();
    loadListimg();
}

function editItem() {
    for (let i = 0; i < items.length; i++) {
        if (items[i]["ID"] == document.getElementById("idItem").textContent) {
            items[i]["ID"] = document.getElementById("idItem").textContent;
            items[i]["name"] = document.getElementById("itemname").value;
            items[i]["img"] = document.getElementById("itemimg").value;
            items[i]["audio"] = document.getElementById("iaudio").value;
            items[i]["desc"] = document.getElementById("idesc").value;

            clearitem();
            loaditems();
            break;
        }
    }
}
function creatItemimg() {
    for (let i = 0; i < items.length; i++) {
        if (items[i]["ID"] == document.getElementById("idItem").textContent) {
            itemsimg = items[i]["items"];
            break;
        }
    }

    if (document.getElementById("idItem").textContent) {
        let item = {};
        item["ID"] = creatID(itemsimg);
        item["title"] = document.getElementById("Ititle").value;
        item["img"] = document.getElementById("Iimg").value;
        item["descImg"] = document.getElementById("descimg").value;
        item["content"] = document.getElementById("contentimg").value;

        itemsimg.push(item);
        clearitemp();
        loadListimg();

    } else {
        alert("Lựa Chọn Item Trước");
    }

    for (let i = 0; i < items.length; i++) {
        if (items[i]["ID"] == document.getElementById("idItem").value) {
            items[i] = itemsimg;
            break;
        }
    }

}

function deleteItemimg() {
    for (let i = 0; i < items.length; i++) {
        if (items[i]["ID"] == document.getElementById("idItem").textContent) {
            for (let j = 0; j < items[i]["items"].length; j++) {
                if (items[i]["items"][j]["ID"] == tidlist) {
                    itemsimg = items[i]["items"][j];
                    let newArray = items[i]["items"].filter(t => t !== itemsimg);
                    items[i]["items"] = newArray;
                    break;
                }
            }

        }
    }
    clearitemp();
    loadListimg();
}

function editItemimg() {
    for (let i = 0; i < items.length; i++) {
        if (items[i]["ID"] == document.getElementById("idItem").textContent) {
            for (let j = 0; j < items[i]["items"].length; j++) {
                if (items[i]["items"][j]["ID"] == tidlist) {
                    items[i]["items"][j]["ID"] = tidlist;
                    items[i]["items"][j]["title"] = document.getElementById("Ititle").value;
                    items[i]["items"][j]["img"] = document.getElementById("Iimg").value;
                    items[i]["items"][j]["descImg"] = document.getElementById("descimg").value;
                    items[i]["items"][j]["content"] = document.getElementById("contentimg").value;

                    clearitemp();
                    loadListimg();
                    break;
                }
            }
            break;
        }
    }
}

function loadListimg() {
    itemsimg = [];
    for (let i = 0; i < items.length; i++) {
        if (items[i]["ID"] == document.getElementById("idItem").textContent) {
            itemsimg = items[i]["items"];
            break;
        }
    }
    let tbody = document.getElementById("lItemct");
    tbody.innerHTML = "";
    itemsimg.forEach(element => {
        let tr = document.createElement("tr");
        tbody.appendChild(tr);

        let id = document.createElement("td");
        let txtid = document.createTextNode(element["ID"]);
        tr.appendChild(id);
        id.appendChild(txtid);

        let Ititle = document.createElement("td");
        let txtItitle = document.createTextNode(element["title"]);
        tr.appendChild(Ititle);
        Ititle.appendChild(txtItitle);

        tr.addEventListener('click', function () {
            itemsimg.forEach(e => {
                if (tr.firstChild.textContent == e["ID"]) {
                    tidlist = e["ID"];
                    document.getElementById("Ititle").value = e["title"];
                    document.getElementById("Iimg").value = e["img"];
                    document.getElementById("descimg").value = e["descImg"];
                    document.getElementById("contentimg").value = e["content"];
                }
            });
        });
    });
}

function loaditems() {
    let tbody = document.getElementById("items");
    tbody.innerHTML = "";
    items.forEach(element => {
        let tr = document.createElement("tr");
        tbody.appendChild(tr);

        let id = document.createElement("td");
        let txtid = document.createTextNode(element["ID"]);
        tr.appendChild(id);
        id.appendChild(txtid);

        let Ititle = document.createElement("td");
        let txtItitle = document.createTextNode(element["name"]);
        tr.appendChild(Ititle);
        Ititle.appendChild(txtItitle);

        tr.addEventListener('click', function () {
            items.forEach(e => {
                if (tr.firstChild.textContent == e["ID"]) {

                    document.getElementById("itemname").value = e["name"];
                    document.getElementById("itemimg").value = e["img"];
                    document.getElementById("iaudio").value = e["audio"];
                    document.getElementById("idesc").value = e["desc"];

                    document.getElementById("idItem").innerHTML = e["ID"];
                    clearitemp();
                }
            });
            loadListimg();
        });
    });
}

function clearitem() {
    document.getElementById("itemname").value = "";
    document.getElementById("itemimg").value = "";
    document.getElementById("iaudio").value = "";
    document.getElementById("idesc").value = "";
}

function clearitemp() {
    document.getElementById("Ititle").value = "";
    document.getElementById("Iimg").value = "";
    document.getElementById("descimg").value = "";
    document.getElementById("contentimg").value = "";
}

function creatID(arr) {
    let i;
    for (i = 1; checkID(i, arr); i++);
    return i;
}

function checkID(id, arr) {
    let bl = false;
    arr.forEach(element => {
        if (id == element["ID"]) {
            bl = true;
        }
    });
    return bl;
}