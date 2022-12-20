// How do I clear my local storage reload?
// window.onbeforeunload = () => { localStorage.clear(); };
// Function for finding maximum meeting in one room
function maxMeetings(s, f, n) {
    let a = new Array(n + 1);
    let i;
    for (i = 0; i < n; i++) {
        a[i] = new Array(2);
        a[i][0] = f[i];
        a[i][1] = i;
    }

    // Sorting of meeting according to their finish time.
    a.sort();
    console.log("A is:", a);

    // time_limit to check whether new
    // meeting can be conducted or not.
    let time_limit = a[0][0];

    // Vector for storing selected meeting.
    let m = [];

    // Initially select first meeting.
    m.push(a[0][1] + 1);

    // Check for all meeting whether it
    // can be selected or not.
    for (i = 1; i < n; i++) {
        if (s[a[i][1]] >= time_limit) {
            // Push selected meeting to vector
            m.push(a[i][1] + 1);
            console.log(`iteration ${i}`);
            console.log(m);
            // console.log(a[i][1]+1,"is pushed");

            // update time limit
            time_limit = a[i][0];
            // console.log(`time_limit = ${a[i][0]}`);
        }
    }

    // Print final selected meetings.

    console.log("Meetings to attend:");
    let meetings = document.getElementById("meeting-list");
    for (let i = 0; i < m.length; i++) {
        console.log(m[i])
        meetings.innerHTML += `<li>Meet ${m[i]} : ${s[m[i]-1]} hrs to  ${f[m[i]-1]} hrs</li>`;
    }
}

// Driver code

// Store the new inputs in localstorage
function store() {
    var startInput = document.getElementById("st").value;
    if (localStorage.getItem('s') == null) {
        localStorage.setItem('s', '[]');
    }
    var old_s = JSON.parse(localStorage.getItem('s'));
    old_s.push(parseInt(startInput));

    localStorage.setItem('s', JSON.stringify(old_s));

    var endInput = document.getElementById("et").value;
    if (localStorage.getItem('f') == null) {
        localStorage.setItem('f', '[]');
    }
    var old_f = JSON.parse(localStorage.getItem('f'));
    old_f.push(parseInt(endInput));

    localStorage.setItem('f', JSON.stringify(old_f));

}
function showResult() {
    // let ul = document.getElementById("meeting-list");
    // ul.classList.remove("hid");
    // Get the inputs from localstorage
    var ftimeint = JSON.parse(localStorage.getItem('f'));
    var stimeint = JSON.parse(localStorage.getItem('s'));
    // console.log(stimeint)
    // console.log(stimeint)
    //Number of meetings
    var n = stimeint.length;
    //Function call
    maxMeetings(stimeint, ftimeint, n);
}

function clr() {
    localStorage.clear();
    let ul = document.getElementById("meeting-list");
    ul.innerHTML = ``;
}