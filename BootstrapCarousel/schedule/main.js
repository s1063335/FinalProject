$(document).ready(function(){
   $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>"); 
    
    var topicCount=topic.length;
    for(var i=0;i<topicCount;i++)
    {
        $("#courseTable").append("<tr>");    
        $("#courseTable").append("<td>"+(i+1)+"</td>");  
        $("#courseTable").append("<td>"+new Date(startDate.getTime()+1000*60*60*24*7*i).toLocaleDateString().slice(2,9)+"</td>");  
        if(topic[i]=="停課"){
            $("#courseTable").append("<td>"+topic[i]+"</td>"); 
            
        }
        else{
            $("#courseTable").append("<td style='color:red'>"+topic[i]+"</td>"); 
        }
        $("#courseTable").append("</tr>");  
    }
    $("#date").change(function(){
        $("#courseTable").text("");
        for(var i=0;i<topicCount;i++)
        {
            var x=new Date(($("#date").val()).getTime()).toLocaleDateString();
            $("#courseTable").append("<tr>");    
            $("#courseTable").append("<td>"+(i+1)+"</td>");  
            $("#courseTable").append("<td>"+x+"</td>");  
            if(topic[i]=="停課"){
                $("#courseTable").append("<td>"+topic[i]+"</td>"); 
            
            }
            else{
                $("#courseTable").append("<td style='color:red'>"+topic[i]+"</td>"); 
            }
            $("#courseTable").append("</tr>");  
        } 
    });
});