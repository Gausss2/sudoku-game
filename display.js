window.onload = DrawGrid;

function DrawGrid()

{
    document.open()
    document.write("<link rel='stylesheet' href='style.css'>");
document.write("<table id='table'>");

for (i in [1,2,3,4,5,6,7,8,9])
{ 
    document.write("<tr>");
    for (j in [1,2,3,4,5,6,7,8,9])
    {
        document.write(`<td class='rows'>${x[i][j]}</td>`);
    
    }
    document.write("</tr>");
}
document.write("</table>");
}