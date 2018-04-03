var table1 = document.getElementById("table1");
 function tableCreate() {
    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    tbl.style.width = '100%';
    tbl.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');
    for (var i = 0; i < 3; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < 2; j++) {
            if (i == 2 && j == 1) {
                break
            } else {
                var td = document.createElement('td');
                td.appendChild(document.createTextNode('\u0020'))
                i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
                tr.appendChild(td)
            }
        }
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl)
}

// // 표의 헤더를 출력한다.
// var titleArray = ["No", "발생시간", "발생위치", "경보종류", "경보상태",
//                  "경보내용", "확인시간", "해제시간"];
// i = 0;
// while (i < titleArray.length) {
//   document.write("<th>" + titleArray[i] + "</th>");
//   i++;
// }
//
// var alarmData = [[1, '2015-07-01 00:11:00', 'LU1-1',
//                 '통신에러', '해제', '데이터 취득 오류',
//                 '2015-07-02 02:00:00', '2015-07-02 02:30:00'],
//                 [2, '2015-07-01 00:11:00', 'LU1-2',
//                 '통신에러', '해제', '데이터 취득 오류',
//                 '2015-07-02 02:00:00', '2015-07-02 02:30:00']];
// var x = alarmData.length;
// var y = alarmData[0].length;
// var num = 0;
// document.write("행의 크기는 " + alarmData.length + " 입니다.<br>");
// document.write("열의 크기는 " + alarmData[0].length + " 입니다.");
// document.write("<table>");
//  for (var i = 0; i < x; i++) {
//    document.write("<tr>");
//    for (var j = 0; j < y; j++) {
//      document.write("<td>" + alarmData[i, j] + "</td>");
//    }
//   }
// document.write("</tr>");
// document.write("</table>");
